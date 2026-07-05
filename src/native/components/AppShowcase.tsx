import { useRef, useState } from "react";
import {
  Animated,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { ShowcaseItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";

const FRAME_HEIGHT = 440;

type AppShowcaseProps = {
  items: ShowcaseItem[];
};

export function AppShowcase({ items }: AppShowcaseProps) {
  return (
    <View style={styles.wrapper}>
      {items.map((item) => (
        <View key={item.title} style={styles.app}>
          <View style={styles.header}>
            <View style={styles.headerCopy}>
              <View style={styles.titleRow}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.taglinePill}>
                  <Text style={styles.taglineText}>{item.tagline}</Text>
                </View>
                {item.note ? (
                  <View style={styles.notePill}>
                    <Text style={styles.noteText}>{item.note}</Text>
                  </View>
                ) : null}
              </View>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            {item.href ? (
              <ExternalPressable url={item.href}>
                <Text style={styles.viewLink}>View app →</Text>
              </ExternalPressable>
            ) : null}
          </View>

          <ScrollView
            contentContainerStyle={styles.shotRow}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {item.screenshots.map((shot, index) => (
              <Shot
                aspectRatio={item.aspectRatio}
                href={item.href}
                key={shot}
                label={`${item.title} screenshot ${index + 1}`}
                uri={shot}
              />
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
}

type ShotProps = {
  aspectRatio: number;
  href: string;
  label: string;
  uri: string;
};

function Shot({ aspectRatio, href, label, uri }: ShotProps) {
  const [hovered, setHovered] = useState(false);
  const lift = useRef(new Animated.Value(0)).current;

  const animate = (toValue: number) => {
    Animated.spring(lift, {
      damping: 16,
      mass: 0.7,
      stiffness: 220,
      toValue,
      useNativeDriver: true,
    }).start();
  };

  const translateY = lift.interpolate({ inputRange: [0, 1], outputRange: [0, -8] });
  const scale = lift.interpolate({ inputRange: [0, 1], outputRange: [1, 1.02] });

  return (
    <Animated.View style={{ transform: [{ translateY }, { scale }] }}>
      <Pressable
        accessibilityLabel={label}
        accessibilityRole="imagebutton"
        onHoverIn={() => {
          setHovered(true);
          animate(1);
        }}
        onHoverOut={() => {
          setHovered(false);
          animate(0);
        }}
        onPress={() => href && void Linking.openURL(href)}
        style={[styles.frame, { aspectRatio }, hovered && styles.frameHovered]}
      >
        <Image
          accessibilityIgnoresInvertColors
          resizeMode="cover"
          source={{ uri }}
          style={styles.image}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: spacing.xxl,
  },
  app: {
    gap: spacing.lg,
  },
  header: {
    alignItems: "flex-end",
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "space-between",
  },
  headerCopy: {
    flex: 1,
    gap: spacing.sm,
  },
  titleRow: {
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 24,
    fontWeight: "700",
  },
  taglinePill: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.blue,
    borderRadius: radii.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  taglineText: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "700",
  },
  notePill: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
  },
  noteText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
  },
  description: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 15,
    lineHeight: 23,
    maxWidth: 620,
  },
  viewLink: {
    color: colors.blue,
    fontFamily: fonts.body,
    fontSize: 14,
    fontWeight: "700",
  },
  shotRow: {
    gap: spacing.md,
    paddingBottom: spacing.sm,
    paddingRight: spacing.md,
  },
  frame: {
    backgroundColor: colors.card,
    borderColor: "#050505",
    borderRadius: 30,
    borderWidth: 6,
    height: FRAME_HEIGHT,
    overflow: "hidden",
  },
  frameHovered: {
    borderColor: colors.blue,
    boxShadow: "0 20px 45px rgba(0, 0, 0, 0.45)",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
