import { useState } from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";

type ChipProps = {
  icon?: string;
  label: string;
  small?: boolean;
};

export function Chip({ icon, label, small = false }: ChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[styles.chip, small && styles.smallChip, hovered && styles.chipHovered]}
    >
      {icon ? (
        <Image accessibilityIgnoresInvertColors source={{ uri: icon }} style={styles.icon} />
      ) : null}
      <Text style={[styles.label, small && styles.smallLabel, hovered && styles.labelHovered]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    flexDirection: "row",
    gap: spacing.xs,
    height: 32,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
  },
  icon: {
    height: 16,
    width: 16,
  },
  chipHovered: {
    borderColor: colors.blue,
  },
  smallChip: {
    height: 24,
    paddingHorizontal: spacing.sm,
  },
  label: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "500",
  },
  labelHovered: {
    color: colors.blue,
  },
  smallLabel: {
    fontSize: 11,
  },
});
