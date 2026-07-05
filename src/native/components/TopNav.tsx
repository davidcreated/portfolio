import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  ScrollView,
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
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return activeId;
}

export function TopNav({ items }: TopNavProps) {
  const activeId = useActiveSection(items.map((item) => item.id));

  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {items.map((item) => (
          <NavButton active={item.id === activeId} item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
}

function NavButton({ active, item }: { active: boolean; item: TopNavItem }) {
  const [hovered, setHovered] = useState(false);
  const press = useRef(new Animated.Value(0)).current;

  const animatePress = (toValue: number) => {
    Animated.spring(press, {
      damping: 15,
      mass: 0.5,
      stiffness: 300,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const scale = press.interpolate({ inputRange: [0, 1], outputRange: [1, 0.92] });

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        accessibilityRole="button"
        onHoverIn={() => setHovered(true)}
        onHoverOut={() => setHovered(false)}
        onPress={() => scrollToId(item.id)}
        onPressIn={() => animatePress(1)}
        onPressOut={() => animatePress(0)}
        style={[styles.button, active && styles.buttonActive]}
      >
        <Text
          style={[
            styles.label,
            hovered && styles.labelHovered,
            active && styles.labelActive,
          ]}
        >
          {item.label}
        </Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    left: 0,
    position: "fixed",
    right: 0,
    top: 14,
    zIndex: 30,
  } as unknown as ViewStyle,
  scroll: {
    maxWidth: "92%",
  },
  scrollContent: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    boxShadow: "0 10px 30px rgba(10, 10, 10, 0.12)",
    flexDirection: "row",
    gap: spacing.xs,
    paddingHorizontal: spacing.sm,
    paddingVertical: 7,
  },
  button: {
    borderRadius: 999,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  buttonActive: {
    backgroundColor: colors.blue,
  },
  label: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
  },
  labelHovered: {
    color: colors.blue,
  },
  labelActive: {
    color: colors.background,
  },
});
