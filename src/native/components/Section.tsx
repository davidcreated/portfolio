import { PropsWithChildren } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";

import { colors, fonts, spacing } from "../styles";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ children, title }: SectionProps) {
  return (
    <View nativeID={title.toLowerCase().replace(/\s+/g, "-")} style={styles.section}>
      <View style={styles.titleRow}>
        <View style={styles.titleAccent} />
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.lg,
    scrollMarginTop: 96,
  } as ViewStyle,
  titleRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  titleAccent: {
    backgroundColor: colors.blue,
    borderRadius: 2,
    height: 18,
    width: 4,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 20,
    fontWeight: "700",
  },
});
