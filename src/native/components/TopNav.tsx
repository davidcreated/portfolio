import { useState } from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from "react-native";

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

export function TopNav({ items }: TopNavProps) {
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
      >
        {items.map((item) => (
          <NavButton item={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
}

function NavButton({ item }: { item: TopNavItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityRole="button"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => scrollToId(item.id)}
      style={styles.button}
    >
      <Text style={[styles.label, hovered && styles.labelHovered]}>{item.label}</Text>
    </Pressable>
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
  label: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
  },
  labelHovered: {
    color: colors.blue,
  },
});
