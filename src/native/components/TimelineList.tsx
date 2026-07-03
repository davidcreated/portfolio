import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, fonts, spacing } from "../styles";
import { WorkItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";
import { LogoMark } from "./LogoMark";

type TimelineListProps = {
  items: WorkItem[];
};

export function TimelineList({ items }: TimelineListProps) {
  return <WorkList items={items} />;
}

type WorkListProps = {
  items: WorkItem[];
};

function WorkList({ items }: WorkListProps) {
  const [openCompany, setOpenCompany] = useState<string | null>(null);

  return (
    <View style={styles.list}>
      {items.map((item) => (
        <WorkRow
          isOpen={openCompany === item.company}
          item={item}
          key={item.company}
          onToggle={() =>
            setOpenCompany(openCompany === item.company ? null : item.company)
          }
        />
      ))}
    </View>
  );
}

type WorkRowProps = {
  isOpen: boolean;
  item: WorkItem;
  onToggle: () => void;
};

function WorkRow({ isOpen, item, onToggle }: WorkRowProps) {
  const progress = useRef(new Animated.Value(isOpen ? 1 : 0)).current;
  const details = `${item.location} (${item.locationType})`;

  useEffect(() => {
    Animated.timing(progress, {
      duration: 260,
      easing: Easing.out(Easing.cubic),
      toValue: isOpen ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [isOpen, progress]);

  const chevronRotation = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });
  const descriptionOpacity = progress.interpolate({
    inputRange: [0, 0.35, 1],
    outputRange: [0, 0, 1],
  });
  const descriptionHeight = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 62],
  });
  const descriptionTranslateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [-4, 0],
  });

  return (
    <View style={styles.workItem}>
      <Pressable
        accessibilityRole="button"
        onPress={onToggle}
        style={({ pressed }) => [styles.workButton, pressed && styles.pressed]}
      >
        <LogoMark label={item.logoText} source={item.logo} size={28} />
        <View style={styles.workCopy}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.company}</Text>
            <Animated.View style={{ transform: [{ rotate: chevronRotation }] }}>
              <Feather color={colors.muted} name="chevron-down" size={14} />
            </Animated.View>
          </View>
          <Text style={styles.muted}>{item.role}</Text>
        </View>
        <Text style={styles.date}>{details}</Text>
      </Pressable>
      <Animated.View
        style={[
          styles.descriptionPanel,
          {
            height: descriptionHeight,
            opacity: descriptionOpacity,
            transform: [{ translateY: descriptionTranslateY }],
          },
        ]}
      >
        <ExternalPressable url={item.url}>
          <Text style={styles.workDescription}>{item.description}</Text>
        </ExternalPressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: spacing.lg,
  },
  workItem: {
    gap: spacing.sm,
  },
  workButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
  },
  pressed: {
    opacity: 0.72,
  },
  workCopy: {
    flex: 1,
    gap: 3,
    minWidth: 0,
  },
  titleRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 20,
  },
  muted: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  date: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 12,
    fontVariant: ["tabular-nums"],
    textAlign: "right",
    width: 150,
  },
  workDescription: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
  },
  descriptionPanel: {
    marginLeft: 56,
    overflow: "hidden",
  },
});
