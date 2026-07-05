import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Linking,
  LayoutChangeEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
          <ProjectCard isTwoColumn={isTwoColumn} item={item} key={item.title} />
        ))}
      </View>
    </View>
  );
}

type ProjectCardProps = {
  isTwoColumn: boolean;
  item: ProjectItem;
};

function ProjectCard({ isTwoColumn, item }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const reveal = useRef(new Animated.Value(0)).current;
  const pulse = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(reveal, {
      damping: 14,
      mass: 0.6,
      stiffness: 220,
      toValue: hovered ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [hovered, reveal]);

  useEffect(() => {
    if (!hovered) {
      pulse.stopAnimation();
      pulse.setValue(0);
      return;
    }

    pulse.setValue(0);
    const loop = Animated.loop(
      Animated.timing(pulse, {
        duration: 1100,
        easing: Easing.out(Easing.ease),
        toValue: 1,
        useNativeDriver: true,
      }),
    );
    loop.start();

    return () => loop.stop();
  }, [hovered, pulse]);

  const beaconScale = reveal.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] });
  const pulseScale = pulse.interpolate({ inputRange: [0, 1], outputRange: [1, 1.9] });
  const pulseOpacity = Animated.multiply(
    reveal,
    pulse.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [0, 0.4, 0],
    }),
  );

  return (
    <Pressable
      accessibilityRole={item.href ? "link" : undefined}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
      onPress={() => item.href && void Linking.openURL(item.href)}
      style={[
        styles.card,
        isTwoColumn ? styles.twoColumnCard : styles.fullCard,
        hovered && styles.cardHovered,
      ]}
    >
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
        <View pointerEvents="none" style={styles.beaconWrapper}>
          <Animated.View
            style={[
              styles.beaconPulse,
              { opacity: pulseOpacity, transform: [{ scale: pulseScale }] },
            ]}
          />
          <Animated.View
            style={[styles.beacon, { opacity: reveal, transform: [{ scale: beaconScale }] }]}
          >
            <Feather color={colors.background} name="arrow-up-right" size={28} />
          </Animated.View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.cardHeader}>
          <View style={styles.cardTitleGroup}>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
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
    </Pressable>
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
    backgroundColor: colors.blue,
    borderColor: colors.blue,
    borderRadius: radii.md,
    borderWidth: 1,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  eyebrowText: {
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
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
  cardHovered: {
    borderColor: colors.blue,
    boxShadow: "0 16px 40px rgba(0, 0, 0, 0.35)",
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
    position: "relative",
  },
  beaconWrapper: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
  },
  beaconPulse: {
    backgroundColor: colors.blue,
    borderRadius: 999,
    height: 64,
    position: "absolute",
    width: 64,
  },
  beacon: {
    alignItems: "center",
    backgroundColor: colors.blue,
    borderRadius: 999,
    boxShadow: `0 0 30px ${colors.blue}`,
    height: 64,
    justifyContent: "center",
    width: 64,
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
    backgroundColor: colors.accentSoft,
    borderColor: colors.blue,
    borderRadius: radii.sm,
    borderWidth: 1,
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
});
