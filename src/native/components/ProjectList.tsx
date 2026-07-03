import { useState } from "react";
import { Image, LayoutChangeEvent, StyleSheet, Text, View } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { ProjectItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";

type ProjectListProps = {
  items: ProjectItem[];
};

export function ProjectList({ items }: ProjectListProps) {
  const [gridWidth, setGridWidth] = useState(0);
  const isTwoColumn = gridWidth >= 640;

  const updateGridWidth = (event: LayoutChangeEvent) => {
    setGridWidth(event.nativeEvent.layout.width);
  };

  return (
    <View style={styles.wrapper}>
      <SectionHeader
        eyebrow="Projects"
        subtitle="A few selected projects I've had my hands on"
        title="Selected project work"
      />
      <View onLayout={updateGridWidth} style={styles.grid}>
        {items.map((item) => (
          <View
            key={item.title}
            style={[styles.card, isTwoColumn ? styles.twoColumnCard : styles.fullCard]}
          >
            <ExternalPressable url={item.href}>
              <View style={styles.media}>
                {item.media ? (
                  <Image
                    accessibilityIgnoresInvertColors
                    resizeMode="cover"
                    source={{ uri: item.media }}
                    style={styles.mediaImage}
                  />
                ) : (
                  <Text style={styles.mediaText}>{item.title}</Text>
                )}
              </View>
            </ExternalPressable>
            <View style={styles.body}>
              <View style={styles.cardHeader}>
                <View style={styles.cardTitleGroup}>
                  <Text style={styles.cardTitle}>{item.title}</Text>
                </View>
                <ExternalPressable url={item.href}>
                  <Text style={styles.arrow}>↗</Text>
                </ExternalPressable>
              </View>
              <Text style={styles.description}>{item.description}</Text>
              <View style={styles.links}>
                {item.links.map((link) => (
                  <ExternalPressable key={`${item.title}-${link.label}`} url={link.url}>
                    <Text style={styles.link}>{link.label}</Text>
                  </ExternalPressable>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  subtitle: string;
  title: string;
};

export function SectionHeader({ eyebrow, subtitle, title }: SectionHeaderProps) {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.ruleRow}>
        <View style={styles.rule} />
        <View style={styles.eyebrowPill}>
          <Text style={styles.eyebrowText}>{eyebrow}</Text>
        </View>
        <View style={styles.rule} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xl,
  },
  sectionHeader: {
    alignItems: "center",
    gap: spacing.md,
  },
  ruleRow: {
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  rule: {
    backgroundColor: colors.border,
    flex: 1,
    height: 1,
  },
  eyebrowPill: {
    backgroundColor: colors.foreground,
    borderColor: colors.border,
    borderRadius: radii.md,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  eyebrowText: {
    color: colors.card,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "500",
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 36,
    fontWeight: "700",
    letterSpacing: -1,
    lineHeight: 42,
    textAlign: "center",
  },
  subtitle: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 16,
    lineHeight: 24,
    maxWidth: 620,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    overflow: "hidden",
  },
  twoColumnCard: {
    flexBasis: "48%",
    flexGrow: 1,
    maxWidth: "49%",
    minWidth: 0,
  },
  fullCard: {
    width: "100%",
  },
  media: {
    alignItems: "center",
    backgroundColor: colors.accentSoft,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    height: 192,
    justifyContent: "center",
  },
  mediaText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 16,
    fontWeight: "600",
  },
  mediaImage: {
    height: "100%",
    width: "100%",
  },
  body: {
    flex: 1,
    gap: spacing.md,
    padding: spacing.lg,
  },
  cardHeader: {
    alignItems: "flex-start",
    flexDirection: "row",
    gap: spacing.sm,
    justifyContent: "space-between",
  },
  cardTitleGroup: {
    flex: 1,
    gap: spacing.xs,
  },
  cardTitle: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 16,
    fontWeight: "600",
  },
  arrow: {
    color: colors.muted,
    fontSize: 18,
  },
  description: {
    color: colors.muted,
    fontFamily: fonts.body,
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  link: {
    backgroundColor: colors.foreground,
    borderRadius: radii.sm,
    color: colors.card,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
});
