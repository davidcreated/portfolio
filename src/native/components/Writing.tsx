import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { WritingItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";

type WritingProps = {
  items: WritingItem[];
  mediumUrl: string;
};

export function Writing({ items, mediumUrl }: WritingProps) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.lead}>
        Writing about mobile engineering, IoT, and Flutter for the developer community.
      </Text>
      <View style={styles.list}>
        {items.map((item) => (
          <ArticleCard item={item} key={item.url} />
        ))}
      </View>
      <ExternalPressable url={mediumUrl}>
        <View style={styles.allRow}>
          <Text style={styles.allText}>Read more on Medium</Text>
          <Feather color={colors.blue} name="arrow-right" size={16} />
        </View>
      </ExternalPressable>
    </View>
  );
}

function ArticleCard({ item }: { item: WritingItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityRole="link"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => void Linking.openURL(item.url)}
      style={[styles.card, hovered && styles.cardHovered]}
    >
      <View style={styles.cardHead}>
        <View style={styles.tagPill}>
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
        <Feather
          color={hovered ? colors.blue : colors.muted}
          name="arrow-up-right"
          size={18}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.excerpt}>{item.excerpt}</Text>
      <Text style={styles.readLink}>Read on Medium</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.lg,
  },
  lead: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 620,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    flexBasis: "48%",
    flexGrow: 1,
    gap: spacing.sm,
    minWidth: 260,
    padding: spacing.lg,
  },
  cardHovered: {
    borderColor: colors.blue,
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
  },
  cardHead: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tagPill: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.blue,
    borderRadius: radii.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  tagText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 11,
    fontWeight: "700",
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 19,
    fontWeight: "700",
    lineHeight: 25,
    marginTop: spacing.xs,
  },
  excerpt: {
    color: colors.muted,
    flex: 1,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 21,
  },
  readLink: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 13,
    fontWeight: "600",
    marginTop: spacing.xs,
  },
  allRow: {
    alignItems: "center",
    alignSelf: "flex-start",
    flexDirection: "row",
    gap: spacing.xs,
  },
  allText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
});
