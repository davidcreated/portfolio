import { Feather, FontAwesome } from "@expo/vector-icons";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { Animated, Linking, Pressable, StyleSheet, Text, View } from "react-native";

import { colors, fonts } from "../styles";
import { ContactItem } from "../types";

type DockProps = {
  isDark: boolean;
  items: ContactItem[];
  onToggleTheme: () => void;
};

export function Dock({ isDark, items, onToggleTheme }: DockProps) {
  return (
    <View pointerEvents="box-none" style={styles.wrapper}>
      <View style={styles.dock}>
        {items.map((item, index) => (
          <View key={item.label} style={styles.itemWrap}>
            {index === 1 ? <View style={styles.separator} /> : null}
            <DockButton label={item.label} onPress={() => void Linking.openURL(item.url)}>
              <DockIcon label={item.label} />
            </DockButton>
          </View>
        ))}
        <View style={styles.separator} />
        <DockButton label="Theme" onPress={onToggleTheme}>
          <Feather color={colors.muted} name={isDark ? "moon" : "sun"} size={25} />
        </DockButton>
      </View>
    </View>
  );
}

type DockButtonProps = PropsWithChildren<{
  label: string;
  onPress: () => void;
}>;

function DockButton({ children, label, onPress }: DockButtonProps) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(progress, {
      damping: 18,
      mass: 0.75,
      stiffness: 260,
      toValue: hovered ? 1 : 0,
      useNativeDriver: true,
    }).start();
  }, [hovered, progress]);

  const scale = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.22],
  });
  const translateY = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -8],
  });
  const tooltipOpacity = progress.interpolate({
    inputRange: [0, 0.55, 1],
    outputRange: [0, 0, 1],
  });
  const tooltipTranslate = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [8, 0],
  });

  return (
    <View style={styles.buttonShell}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.tooltip,
          {
            opacity: tooltipOpacity,
            transform: [{ translateY: tooltipTranslate }],
          },
        ]}
      >
        <Text style={styles.tooltipText}>{label}</Text>
        <View style={styles.tooltipArrow} />
      </Animated.View>
      <Animated.View
        style={{
          transform: [{ translateY }, { scale }],
          zIndex: hovered ? 5 : 1,
        }}
      >
        <Pressable
          accessibilityLabel={label}
          accessibilityRole="button"
          onHoverIn={() => setHovered(true)}
          onHoverOut={() => {
            setHovered(false);
            setPressed(false);
          }}
          onPress={onPress}
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={[styles.icon, pressed && styles.pressed]}
        >
          {children}
        </Pressable>
      </Animated.View>
    </View>
  );
}

type DockIconProps = {
  label: string;
};

function DockIcon({ label }: DockIconProps) {
  if (label === "Home") {
    return <Feather color={colors.muted} name="home" size={23} />;
  }

  if (label === "Blog") {
    return <Feather color={colors.muted} name="book-open" size={23} />;
  }

  if (label === "GitHub") {
    return <FontAwesome color={colors.muted} name="github" size={24} />;
  }

  if (label === "LinkedIn") {
    return <FontAwesome color={colors.muted} name="linkedin-square" size={24} />;
  }

  if (label === "X") {
    return <FontAwesome color={colors.muted} name="twitter" size={22} />;
  }

  if (label === "Twitter") {
    return <FontAwesome color={colors.muted} name="twitter" size={22} />;
  }

  if (label === "Email") {
    return <Feather color={colors.muted} name="mail" size={22} />;
  }

  return <Feather color={colors.muted} name="globe" size={22} />;
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    bottom: 14,
    left: 0,
    pointerEvents: "box-none",
    position: "absolute",
    right: 0,
    zIndex: 30,
  },
  dock: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    boxShadow: "0 10px 30px rgba(10, 10, 10, 0.12)",
    flexDirection: "row",
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 7,
  },
  itemWrap: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  buttonShell: {
    alignItems: "center",
    height: 46,
    justifyContent: "center",
    position: "relative",
    width: 46,
    zIndex: 1,
  },
  icon: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.03)",
    height: 46,
    justifyContent: "center",
    width: 46,
  },
  pressed: {
    opacity: 0.78,
    transform: [{ scale: 0.96 }],
  },
  separator: {
    backgroundColor: colors.border,
    height: 34,
    width: 1,
  },
  tooltip: {
    alignItems: "center",
    bottom: 62,
    position: "absolute",
    zIndex: 10,
  },
  tooltipText: {
    backgroundColor: colors.foreground,
    borderRadius: 14,
    color: colors.background,
    fontFamily: fonts.body,
    fontSize: 14,
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  tooltipArrow: {
    borderLeftColor: "transparent",
    borderLeftWidth: 8,
    borderRightColor: "transparent",
    borderRightWidth: 8,
    borderTopColor: colors.foreground,
    borderTopWidth: 8,
    height: 0,
    width: 0,
  },
});
