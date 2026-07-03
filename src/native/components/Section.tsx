import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

import { colors, fonts, spacing } from "../styles";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ children, title }: SectionProps) {
  return (
    <View nativeID={title.toLowerCase().replace(/\s+/g, "-")} style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    gap: spacing.lg,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 20,
    fontWeight: "700",
  },
});
