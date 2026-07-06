import { useEffect, useState } from "react";
import { Platform, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

import { colors, fonts } from "../styles";

type NavItem = { id: string; label: string };

type ScrollProgressProps = {
  items: NavItem[];
  progress: number;
};

const TRACK = 340;

function scrollToId(id: string) {
  if (Platform.OS !== "web") {
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") {
      return;
    }
    const visibility = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          visibility.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
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
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
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

export function ScrollProgress({ items, progress }: ScrollProgressProps) {
  const activeId = useActiveSection(items.map((i) => i.id));
  const [wide, setWide] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      return;
    }
    const mql = window.matchMedia("(min-width: 1200px)");
    const update = () => setWide(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  if (!wide) {
    return null;
  }

  const clamped = Math.max(0, Math.min(1, progress));

  return (
    <View pointerEvents="box-none" style={styles.wrap}>
      <View style={styles.rail}>
        <View style={styles.track} />
        <View style={[styles.fill, { height: clamped * TRACK }]} />
        <Text style={[styles.percent, { top: clamped * TRACK - 8 }]}>
          {Math.round(clamped * 100)}%
        </Text>
        {items.map((item, index) => {
          const top = (items.length > 1 ? index / (items.length - 1) : 0) * TRACK;
          const active = item.id === activeId;
          return (
            <Pressable
              key={item.id}
              onPress={() => scrollToId(item.id)}
              style={[styles.tick, { top: top - 12 }]}
            >
              {active ? <Text style={styles.label}>{item.label}</Text> : null}
              <View style={[styles.dot, active && styles.dotActive]} />
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "flex-end",
    bottom: 0,
    justifyContent: "center",
    paddingRight: 18,
    position: "fixed",
    right: 0,
    top: 0,
    zIndex: 25,
  } as unknown as ViewStyle,
  rail: {
    height: TRACK,
    position: "relative",
    width: 150,
  },
  track: {
    backgroundColor: colors.border,
    borderRadius: 2,
    height: TRACK,
    position: "absolute",
    right: 4,
    top: 0,
    width: 2,
  },
  fill: {
    backgroundColor: colors.blue,
    borderRadius: 2,
    position: "absolute",
    right: 4,
    top: 0,
    width: 2,
  },
  percent: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 10,
    fontVariant: ["tabular-nums"],
    fontWeight: "700",
    position: "absolute",
    right: 14,
    textAlign: "right",
    width: 40,
  },
  tick: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    height: 24,
    justifyContent: "flex-end",
    position: "absolute",
    right: 0,
    width: 150,
  },
  dot: {
    backgroundColor: colors.border,
    borderRadius: 5,
    height: 10,
    width: 10,
  },
  dotActive: {
    backgroundColor: colors.blue,
    boxShadow: `0 0 12px ${colors.blue}`,
    height: 12,
    width: 12,
  },
  label: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
  },
});
