import { useEffect, useRef } from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";

import { colors } from "../styles";

export function CursorDot() {
  const dotRef = useRef<View>(null);

  useEffect(() => {
    if (Platform.OS !== "web") {
      return;
    }

    const node = dotRef.current as unknown as HTMLElement | null;
    if (!node) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      node.style.transform = `translate3d(${event.clientX - 6}px, ${event.clientY - 6}px, 0)`;
      node.style.opacity = "1";
    };

    const handleLeave = () => {
      node.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (Platform.OS !== "web") {
    return null;
  }

  return <View pointerEvents="none" ref={dotRef} style={styles.dot} />;
}

const styles = StyleSheet.create({
  dot: {
    backgroundColor: colors.blue,
    borderRadius: 999,
    height: 12,
    left: 0,
    opacity: 0,
    position: "fixed",
    top: 0,
    transitionDuration: "120ms, 200ms",
    transitionProperty: "transform, opacity",
    transitionTimingFunction: "ease-out",
    width: 12,
    zIndex: 999,
  } as unknown as ViewStyle,
});
