import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

import { CursorAvatar } from "./CursorAvatar";

// Public NEXBOT community scene (tracks the cursor natively). ~1.35 MB.
const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const VIEWER_SRC = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";

/**
 * The 3D NEXBOT hero. It's heavy (WebGL + a multi-MB scene), so we:
 *  - only load it on desktop pointer devices, and never with reduced-motion,
 *  - defer loading until the browser is idle (keeps first paint fast),
 *  - show the lightweight code-built CursorAvatar as a placeholder/fallback
 *    until the scene reports it has loaded.
 * On mobile / reduced-motion the code avatar is all that ever renders.
 */
export function SplineAvatar() {
  const hostRef = useRef<View>(null);
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const desktop = window.matchMedia("(min-width: 900px) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!desktop || reduce) {
      return;
    }

    const start = () => {
      if (!document.querySelector("script[data-spline-viewer]")) {
        const s = document.createElement("script");
        s.type = "module";
        s.src = VIEWER_SRC;
        s.setAttribute("data-spline-viewer", "");
        document.head.appendChild(s);
      }
      setEnabled(true);
    };

    const ric = (
      window as unknown as { requestIdleCallback?: (cb: () => void, o?: object) => number }
    ).requestIdleCallback;
    const handle = ric ? ric(start, { timeout: 2000 }) : window.setTimeout(start, 700);
    return () => {
      const cic = (window as unknown as { cancelIdleCallback?: (h: number) => void })
        .cancelIdleCallback;
      if (ric && cic) {
        cic(handle);
      } else {
        clearTimeout(handle as number);
      }
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const host = hostRef.current as unknown as HTMLElement | null;
    if (!host) {
      return;
    }

    const el = document.createElement("spline-viewer");
    el.setAttribute("url", SCENE);
    el.style.width = "100%";
    el.style.height = "100%";
    el.style.display = "block";
    const reveal = () => setLoaded(true);
    el.addEventListener("load", reveal);
    host.appendChild(el);

    // Safety net in case the viewer's load event name changes across versions.
    const timer = window.setTimeout(reveal, 6000);

    return () => {
      clearTimeout(timer);
      el.removeEventListener("load", reveal);
      if (el.parentNode === host) {
        host.removeChild(el);
      }
    };
  }, [enabled]);

  return (
    <View style={styles.box}>
      {!loaded ? (
        <View pointerEvents="none" style={styles.placeholder}>
          <CursorAvatar />
        </View>
      ) : null}
      <View ref={hostRef} style={[styles.host, { opacity: loaded ? 1 : 0 }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    height: 380,
    justifyContent: "center",
    width: 340,
  },
  placeholder: {
    ...StyleSheet.absoluteFill,
    alignItems: "center",
    justifyContent: "center",
  },
  host: {
    height: "100%",
    width: "100%",
  },
});
