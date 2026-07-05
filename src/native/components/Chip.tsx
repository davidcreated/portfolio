import { useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";

type ChipProps = {
  label: string;
  small?: boolean;
};

export function Chip({ label, small = false }: ChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      style={[styles.chip, small && styles.smallChip, hovered && styles.chipHovered]}
    >
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
    height: 32,
    justifyContent: "center",
    paddingHorizontal: spacing.md,
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
