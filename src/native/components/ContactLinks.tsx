import { StyleSheet, Text, View } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { ContactItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";

type ContactLinksProps = {
  items: ContactItem[];
};

export function ContactLinks({ items }: ContactLinksProps) {
  return (
    <View style={styles.card}>
      <GridPattern />
      <View style={styles.pill}>
        <Text style={styles.pillText}>Contact</Text>
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.text}>Reach me through any of the channels below.</Text>
        <View style={styles.links}>
          {items.map((item) => (
            <ExternalPressable key={item.label} url={item.url}>
              <View style={styles.contactItem}>
                <Text style={styles.link}>{item.label}</Text>
                {item.display ? <Text style={styles.value}>{item.display}</Text> : null}
              </View>
            </ExternalPressable>
          ))}
        </View>
        <Text style={styles.footer}>©2026</Text>
      </View>
    </View>
  );
}

function GridPattern() {
  const cells = Array.from({ length: 120 }, (_, index) => index);

  return (
    <View pointerEvents="none" style={styles.grid}>
      {cells.map((cell) => (
        <View key={cell} style={styles.cell} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    overflow: "hidden",
    padding: 40,
    position: "relative",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    left: 0,
    opacity: 0.28,
    position: "absolute",
    right: 0,
    top: 0,
  },
  cell: {
    borderColor: colors.border,
    borderWidth: 0.5,
    height: 12,
    width: 12,
  },
  pill: {
    backgroundColor: colors.foreground,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    position: "absolute",
    top: -1,
  },
  pillText: {
    color: colors.card,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "500",
  },
  copy: {
    alignItems: "center",
    gap: spacing.md,
    maxWidth: 560,
    position: "relative",
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 42,
    fontWeight: "700",
    letterSpacing: -1,
    lineHeight: 48,
    textAlign: "center",
  },
  text: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
  },
  inlineLink: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 16,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    justifyContent: "center",
  },
  contactItem: {
    alignItems: "center",
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  link: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "600",
  },
  value: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 13,
  },
  footer: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 12,
    marginTop: spacing.sm,
  },
});
