import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";

// Public NEXBOT community scene (tracks the cursor natively). ~1.35 MB.
const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";
const VIEWER_SRC = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";

/**
 * The 3D NEXBOT hero centerpiece. It fills its parent, so the hero controls how
 * big it is. It's heavy (WebGL + a multi-MB scene), so loading is deferred until
 * the browser is idle (keeps first paint fast) and skipped under
 * prefers-reduced-motion. It fades in once the scene reports loaded.
 */
export function SplineAvatar() {
  const hostRef = useRef<View>(null);
  const [enabled, setEnabled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const bigEnough = window.matchMedia("(min-width: 380px)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!bigEnough || reduce) {
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
    // Listen for pointer events on the whole window, not just the canvas — the
    // robot sits behind the page content, so without this it would never see
    // the cursor and wouldn't track it.
    el.setAttribute("events-target", "global");
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

  return <View ref={hostRef} style={[styles.host, { opacity: loaded ? 1 : 0 }]} />;
}

const styles = StyleSheet.create({
  host: {
    height: "100%",
    width: "100%",
  },
});
