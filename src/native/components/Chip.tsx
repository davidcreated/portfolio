import { StyleSheet, Text, View } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";

type ChipProps = {
  label: string;
  small?: boolean;
};

export function Chip({ label, small = false }: ChipProps) {
  return (
    <View style={[styles.chip, small && styles.smallChip]}>
      <Text style={[styles.label, small && styles.smallLabel]}>{label}</Text>
    </View>
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
  smallLabel: {
    fontSize: 11,
  },
});
