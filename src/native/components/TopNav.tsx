import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, fonts, spacing } from "../styles";

type TopNavItem = {
  id: string;
  label: string;
};

type TopNavProps = {
  items: TopNavItem[];
};

function scrollToId(id: string) {
  if (Platform.OS !== "web") {
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    if (Platform.OS !== "web" || typeof IntersectionObserver === "undefined") {
      return;
    }
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let best: string | null = null;
        let bestRatio = 0;
        visibility.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best && bestRatio > 0) {
          setActiveId(best);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
    );
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);
  return activeId;
}

export function TopNav({ items }: TopNavProps) {
  const activeId = useActiveSection(items.map((item) => item.id));

  return (
    <View pointerEvents="box-none" style={styles.bar}>
      <Pressable
        accessibilityRole="link"
        onPress={() => scrollToId(items[0]?.id ?? "")}
        style={styles.logo}
      >
        <Text style={styles.logoText}>DP</Text>
        <Text style={styles.logoDot}>.</Text>
      </Pressable>
      <View style={styles.links}>
        {items.map((item) => (
          <NavLink active={item.id === activeId} item={item} key={item.id} />
        ))}
      </View>
    </View>
  );
}

function NavLink({ active, item }: { active: boolean; item: TopNavItem }) {
  const [hovered, setHovered] = useState(false);
  const underline = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(underline, {
      duration: 260,
      toValue: hovered || active ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [active, hovered, underline]);

  const width = underline.interpolate({ inputRange: [0, 1], outputRange: ["0%", "100%"] });

  return (
    <Pressable
      accessibilityRole="link"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => scrollToId(item.id)}
      style={styles.link}
    >
      <Text style={[styles.linkText, (hovered || active) && styles.linkTextActive]}>
        {item.label}
      </Text>
      <Animated.View style={[styles.underline, { width }]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  bar: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    left: 0,
    paddingHorizontal: 40,
    paddingVertical: 22,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 30,
  } as unknown as ViewStyle,
  logo: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
  logoText: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 26,
    fontWeight: "700",
    letterSpacing: 1,
  },
  logoDot: {
    color: colors.blue,
    fontFamily: fonts.heading,
    fontSize: 26,
    fontWeight: "700",
  },
  links: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.xl,
  },
  link: {
    paddingVertical: 4,
    position: "relative",
  },
  linkText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 13,
    fontWeight: "500",
    letterSpacing: 1.2,
    textTransform: "uppercase",
    transitionDuration: "220ms",
    transitionProperty: "color",
    transitionTimingFunction: "ease",
  } as unknown as ViewStyle,
  linkTextActive: {
    color: colors.foreground,
  },
  underline: {
    backgroundColor: colors.blue,
    bottom: 0,
    height: 1,
    left: 0,
    position: "absolute",
  },
});
