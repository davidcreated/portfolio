import { useEffect, useRef } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "../styles";

/**
 * A stylized avatar whose eyes and head follow the cursor ("looking at you").
 * Built from plain Views so it needs no SVG/3D dependency. On web it wires a
 * mousemove listener and nudges the pupils/head via direct DOM transforms
 * (same approach as CursorDot). At rest (and on the server) it renders looking
 * straight ahead, so there's no blank/hidden state.
 */
export function CursorAvatar() {
  const rootRef = useRef<View>(null);
  const headRef = useRef<View>(null);
  const leftPupilRef = useRef<View>(null);
  const rightPupilRef = useRef<View>(null);

  useEffect(() => {
    if (Platform.OS !== "web") {
      return;
    }

    const root = rootRef.current as unknown as HTMLElement | null;
    const head = headRef.current as unknown as HTMLElement | null;
    const lp = leftPupilRef.current as unknown as HTMLElement | null;
    const rp = rightPupilRef.current as unknown as HTMLElement | null;
    if (!root || !head || !lp || !rp) {
      return;
    }

    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
    let frame = 0;

    const apply = (clientX: number, clientY: number) => {
      const rect = root.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clientX - cx;
      const dy = clientY - cy;

      const px = clamp(dx / 26, -9, 9);
      const py = clamp(dy / 26, -7, 7);
      lp.style.transform = `translate(${px}px, ${py}px)`;
      rp.style.transform = `translate(${px}px, ${py}px)`;

      const rot = clamp(dx / 45, -9, 9);
      const htx = clamp(dx / 40, -8, 8);
      const hty = clamp(dy / 45, -6, 6);
      head.style.transform = `rotate(${rot}deg) translate(${htx}px, ${hty}px)`;
    };

    const onMove = (event: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => apply(event.clientX, event.clientY));
    };

    lp.style.willChange = "transform";
    rp.style.willChange = "transform";
    head.style.willChange = "transform";
    head.style.transition = "transform 120ms ease-out";
    lp.style.transition = "transform 90ms ease-out";
    rp.style.transition = "transform 90ms ease-out";

    window.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <View ref={rootRef} style={styles.root}>
      <View pointerEvents="none" style={styles.glow} />
      <View style={styles.floatWrapper}>
        <View ref={headRef} style={styles.head}>
          <View style={styles.hair} />
          <View style={[styles.ear, styles.earLeft]} />
          <View style={[styles.ear, styles.earRight]} />
          <View style={styles.face}>
            <View style={styles.brows}>
              <View style={styles.brow} />
              <View style={styles.brow} />
            </View>
            <View style={styles.eyes}>
              <View style={styles.eye}>
                <View ref={leftPupilRef} style={styles.pupil} />
              </View>
              <View style={styles.eye}>
                <View ref={rightPupilRef} style={styles.pupil} />
              </View>
            </View>
            <View style={styles.nose} />
            <View style={styles.mouth} />
          </View>
        </View>
      </View>
      <View pointerEvents="none" style={styles.shadow} />
    </View>
  );
}

const HEAD = 176;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    height: HEAD + 40,
    justifyContent: "center",
    width: HEAD + 40,
  },
  glow: {
    backgroundColor: colors.blue,
    borderRadius: 999,
    filter: "blur(60px)",
    height: HEAD,
    opacity: 0.4,
    position: "absolute",
    width: HEAD,
  } as ViewStyle,
  floatWrapper: {
    alignItems: "center",
    animationDuration: "6s",
    animationIterationCount: "infinite" as unknown as number,
    animationKeyframes: {
      "0%": { transform: [{ translateY: 0 }] },
      "50%": { transform: [{ translateY: -8 }] },
      "100%": { transform: [{ translateY: 0 }] },
    },
    animationTimingFunction: "ease-in-out",
    justifyContent: "center",
  } as ViewStyle,
  head: {
    alignItems: "center",
    backgroundColor: "#ECEAF3",
    borderColor: colors.blue,
    borderRadius: 62,
    borderWidth: 2,
    boxShadow: `0 18px 50px rgba(0,0,0,0.45), 0 0 40px ${colors.blue}55`,
    height: HEAD,
    justifyContent: "center",
    width: HEAD - 12,
  } as ViewStyle,
  hair: {
    backgroundColor: "#1C1730",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    height: 52,
    left: -1,
    position: "absolute",
    right: -1,
    top: -1,
  },
  ear: {
    backgroundColor: "#ECEAF3",
    borderColor: colors.blue,
    borderRadius: 12,
    borderWidth: 2,
    height: 34,
    position: "absolute",
    top: HEAD / 2 - 20,
    width: 18,
  },
  earLeft: { left: -12 },
  earRight: { right: -12 },
  face: {
    alignItems: "center",
    marginTop: 30,
  },
  brows: {
    flexDirection: "row",
    gap: 26,
    marginBottom: 10,
  },
  brow: {
    backgroundColor: "#2A2438",
    borderRadius: 3,
    height: 6,
    width: 34,
  },
  eyes: {
    flexDirection: "row",
    gap: 20,
  },
  eye: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    height: 44,
    justifyContent: "center",
    overflow: "hidden",
    width: 44,
  },
  pupil: {
    backgroundColor: "#1A1626",
    borderRadius: 11,
    height: 22,
    width: 22,
  },
  nose: {
    backgroundColor: "#C9C2DE",
    borderRadius: 4,
    height: 14,
    marginTop: 12,
    width: 8,
  },
  mouth: {
    backgroundColor: "#2A2438",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 10,
    marginTop: 12,
    width: 46,
  },
  shadow: {
    backgroundColor: "rgba(0,0,0,0.35)",
    borderRadius: 999,
    bottom: 6,
    filter: "blur(10px)",
    height: 16,
    position: "absolute",
    width: HEAD * 0.7,
  } as ViewStyle,
});
