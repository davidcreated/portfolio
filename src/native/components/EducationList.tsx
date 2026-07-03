import { StyleSheet, Text, View } from "react-native";

import { colors, fonts, spacing } from "../styles";
import { EducationItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";
import { LogoMark } from "./LogoMark";

type EducationListProps = {
  items: EducationItem[];
};

export function EducationList({ items }: EducationListProps) {
  return (
    <View style={styles.list}>
      {items.map((item) => (
        <ExternalPressable key={item.school} url={item.url}>
          <View style={styles.row}>
            <LogoMark label="LU" source={item.logo} />
            <View style={styles.copy}>
              <Text style={styles.school}>{item.school}</Text>
              <Text style={styles.degree}>{item.degree}</Text>
            </View>
            {item.period ? <Text style={styles.years}>{item.period}</Text> : null}
          </View>
        </ExternalPressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.xl,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
  },
  copy: {
    flex: 1,
    gap: 3,
    minWidth: 0,
  },
  school: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 16,
    fontWeight: "600",
  },
  degree: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
  },
  years: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 12,
    fontVariant: ["tabular-nums"],
    textAlign: "right",
  },
});
