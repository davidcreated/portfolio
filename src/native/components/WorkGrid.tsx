import { useState } from "react";
import {
  Image,
  ImageStyle,
  LayoutChangeEvent,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { ShowcaseItem } from "../types";

type WorkGridProps = {
  items: ShowcaseItem[];
};

export function WorkGrid({ items }: WorkGridProps) {
  const [gridWidth, setGridWidth] = useState(0);
  const columns = gridWidth >= 760 ? 2 : 1;

  const onLayout = (e: LayoutChangeEvent) => setGridWidth(e.nativeEvent.layout.width);

  // Distribute into columns for a masonry feel (cards vary in height).
  const cols: ShowcaseItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => cols[i % columns].push(item));

  return (
    <View nativeID="work" style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>Selected Works</Text>
        <Text style={styles.title}>Things I&apos;ve shipped</Text>
        <Text style={styles.subtitle}>
          Production apps across fintech, health tech, e-commerce, and energy. Each one a
          study in making complex systems feel calm.
        </Text>
      </View>

      <View onLayout={onLayout} style={styles.columns}>
        {cols.map((col, ci) => (
          <View key={ci} style={styles.column}>
            {col.map((item, i) => (
              <WorkCard index={ci + i * columns} item={item} key={item.title} />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

function WorkCard({ index, item }: { index: number; item: ShowcaseItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Pressable
      accessibilityRole="link"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => item.href && void Linking.openURL(item.href)}
      style={styles.card}
    >
      <View style={styles.stage}>
        <View style={[styles.device, { aspectRatio: item.aspectRatio }]}>
          <Image
            accessibilityIgnoresInvertColors
            alt={`${item.title} app screen`}
            resizeMode="cover"
            source={{ uri: item.screenshots[0] }}
            style={[styles.shot, hovered && styles.shotHovered]}
          />
        </View>
        <View style={[styles.overlay, hovered && styles.overlayVisible]}>
          <Text style={styles.overlayText}>Explore the Technical Architecture →</Text>
        </View>
      </View>

      <View style={styles.caption}>
        <Text style={styles.index}>{String(index + 1).padStart(2, "0")}</Text>
        <View style={styles.captionText}>
          <View style={styles.captionTop}>
            <Text style={[styles.cardTitle, hovered && styles.cardTitleHovered]}>
              {item.title}
            </Text>
            {item.note ? <Text style={styles.note}>{item.note}</Text> : null}
          </View>
          <Text style={styles.tagline}>{item.tagline}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xxl,
    scrollMarginTop: 96,
  } as ViewStyle,
  header: {
    gap: spacing.sm,
    maxWidth: 640,
  },
  eyebrow: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 52,
    fontWeight: "600",
    letterSpacing: -0.5,
    lineHeight: 54,
  },
  subtitle: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 17,
    lineHeight: 27,
    marginTop: spacing.xs,
  },
  columns: {
    flexDirection: "row",
    gap: spacing.xl,
  },
  column: {
    flex: 1,
    gap: spacing.xl,
  },
  card: {
    gap: spacing.md,
  },
  stage: {
    alignItems: "center",
    backgroundColor: colors.card,
    backgroundImage: "linear-gradient(155deg, #1F1F1F 0%, #141414 55%, #101010 100%)",
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    justifyContent: "center",
    overflow: "hidden",
    paddingHorizontal: 44,
    paddingVertical: 48,
    position: "relative",
  } as unknown as ViewStyle,
  device: {
    backgroundColor: "#0A0A0A",
    borderColor: "#050505",
    borderRadius: 34,
    borderWidth: 8,
    boxShadow: "0 30px 60px rgba(0,0,0,0.55)",
    height: 420,
    overflow: "hidden",
    transitionDuration: "400ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
  } as unknown as ViewStyle,
  shot: {
    height: "100%",
    transitionDuration: "400ms",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    width: "100%",
  } as unknown as ImageStyle,
  shotHovered: {
    transform: [{ scale: 1.05 }],
  },
  overlay: {
    alignItems: "center",
    backgroundColor: "rgba(10,10,10,0.55)",
    bottom: 0,
    justifyContent: "flex-end",
    left: 0,
    opacity: 0,
    paddingBottom: 28,
    position: "absolute",
    right: 0,
    top: 0,
    transitionDuration: "400ms",
    transitionProperty: "opacity",
    transitionTimingFunction: "ease-in-out",
  } as unknown as ViewStyle,
  overlayVisible: {
    opacity: 1,
  },
  overlayText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0.4,
  },
  caption: {
    flexDirection: "row",
    gap: spacing.md,
    paddingHorizontal: spacing.xs,
  },
  index: {
    color: colors.muted,
    fontFamily: fonts.heading,
    fontSize: 20,
    fontWeight: "600",
    opacity: 0.5,
  },
  captionText: {
    flex: 1,
    gap: 2,
  },
  captionTop: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  cardTitle: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 26,
    fontWeight: "600",
    transitionDuration: "260ms",
    transitionProperty: "color",
    transitionTimingFunction: "ease",
  } as unknown as ViewStyle,
  cardTitleHovered: {
    color: colors.blue,
  },
  note: {
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    textTransform: "uppercase",
  },
  tagline: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
  },
});
