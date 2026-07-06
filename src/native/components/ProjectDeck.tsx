import { Feather } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  LayoutChangeEvent,
  PanResponder,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

import { colors, fonts, radii, spacing } from "../styles";
import { ProjectItem } from "../types";
import { ExternalPressable } from "./ExternalPressable";

const CARD_HEIGHT = 460;
const MAX_CARD_WIDTH = 460;
const DEPTH = 3;

type ProjectDeckProps = {
  items: ProjectItem[];
  onSelect: (item: ProjectItem) => void;
};

/**
 * Swipeable stacked-card deck, mirroring the MotoBites "signature combos"
 * swiper: drag the top card left/right past ~30% (or flick) to fling it away
 * and advance to the next; spring back otherwise. Arrows and dots included.
 */
export function ProjectDeck({ items, onSelect }: ProjectDeckProps) {
  const n = items.length;
  const [top, setTop] = useState(0);
  const [cardW, setCardW] = useState(0);
  const dragX = useRef(new Animated.Value(0)).current;

  // Refs so the (once-created) PanResponder always sees current values.
  const cardWRef = useRef(0);
  const animatingRef = useRef(false);
  const nRef = useRef(n);
  const itemsRef = useRef(items);
  const topRef = useRef(0);
  const onSelectRef = useRef(onSelect);
  useEffect(() => {
    nRef.current = n;
    itemsRef.current = items;
    onSelectRef.current = onSelect;
  }, [items, n, onSelect]);
  useEffect(() => {
    topRef.current = top;
  }, [top]);

  const advance = (dir: number) => {
    if (animatingRef.current || nRef.current < 2) {
      return;
    }
    animatingRef.current = true;
    Animated.timing(dragX, {
      toValue: dir * (cardWRef.current * 1.25 + 120),
      duration: 300,
      easing: Easing.in(Easing.cubic),
      useNativeDriver: true,
    }).start(() => {
      dragX.setValue(0);
      setTop((t) => (t + 1) % nRef.current);
      animatingRef.current = false;
    });
  };

  const previous = () => {
    if (animatingRef.current || nRef.current < 2) {
      return;
    }
    animatingRef.current = true;
    setTop((t) => (t - 1 + nRef.current) % nRef.current);
    dragX.setValue(-(cardWRef.current * 1.25 + 120));
    Animated.spring(dragX, {
      toValue: 0,
      bounciness: 6,
      speed: 12,
      useNativeDriver: true,
    }).start(() => {
      animatingRef.current = false;
    });
  };

  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, g) => Math.abs(g.dx) > 6 && Math.abs(g.dx) > Math.abs(g.dy),
      // Capture phase so the deck wrests the gesture from the card's Pressable
      // once a real horizontal drag starts (taps still reach the Pressable).
      onMoveShouldSetPanResponderCapture: (_, g) =>
        Math.abs(g.dx) > 8 && Math.abs(g.dx) > Math.abs(g.dy),
      onPanResponderMove: (_, g) => {
        if (!animatingRef.current) {
          dragX.setValue(g.dx);
        }
      },
      onPanResponderRelease: (_, g) => {
        if (animatingRef.current) {
          return;
        }
        const w = cardWRef.current || 320;
        // A near-zero drag is a tap — handled by the card's Pressable, so just
        // settle back and let the tap open the modal.
        if (Math.abs(g.dx) < 6 && Math.abs(g.dy) < 6) {
          dragX.setValue(0);
          return;
        }
        const past = Math.abs(g.dx) >= w * 0.3 || Math.abs(g.vx) >= 0.45;
        if (past) {
          advance(g.dx < 0 ? -1 : 1);
        } else {
          Animated.spring(dragX, {
            bounciness: 8,
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const onLayout = (e: LayoutChangeEvent) => {
    const w = Math.min(e.nativeEvent.layout.width, MAX_CARD_WIDTH);
    cardWRef.current = w;
    setCardW(w);
  };

  const rotate = dragX.interpolate({
    inputRange: [-320, 0, 320],
    outputRange: ["-8deg", "0deg", "8deg"],
    extrapolate: "clamp",
  });

  // Build the visible stack: deepest first, top card last (rendered on top).
  const depth = Math.min(DEPTH, n);
  const stack = [];
  for (let pos = depth - 1; pos >= 0; pos--) {
    const item = items[(top + pos) % n];
    const isTop = pos === 0;
    const behindStyle: ViewStyle = {
      opacity: 1 - pos * 0.18,
      transform: [{ translateY: pos * 16 }, { scale: 1 - pos * 0.05 }],
    };
    stack.push(
      <Animated.View
        key={`${item.title}-${pos}`}
        style={[
          styles.cardWrap,
          { width: cardW || "100%" },
          isTop
            ? { transform: [{ translateX: dragX }, { rotate }], zIndex: 3 }
            : behindStyle,
        ]}
        {...(isTop ? pan.panHandlers : {})}
      >
        {isTop ? (
          <Pressable
            accessibilityRole="button"
            onPress={() => onSelect(item)}
            style={styles.cardPress}
          >
            <DeckCard item={item} />
          </Pressable>
        ) : (
          <DeckCard item={item} />
        )}
      </Animated.View>,
    );
  }

  return (
    <View style={styles.wrapper}>
      <View onLayout={onLayout} style={styles.stageRow}>
        <Pressable
          accessibilityLabel="Previous project"
          onPress={previous}
          style={[styles.arrow, styles.arrowLeft]}
        >
          <Feather color={colors.foreground} name="arrow-left" size={18} />
        </Pressable>

        <View style={styles.stage}>{stack}</View>

        <Pressable
          accessibilityLabel="Next project"
          onPress={() => advance(-1)}
          style={[styles.arrow, styles.arrowRight]}
        >
          <Feather color={colors.foreground} name="arrow-right" size={18} />
        </Pressable>
      </View>

      <View style={styles.dots}>
        {items.map((item, i) => (
          <View key={item.title} style={[styles.dot, i === top && styles.dotActive]} />
        ))}
      </View>
    </View>
  );
}

function DeckCard({ item }: { item: ProjectItem }) {
  return (
    <View style={styles.card}>
      <View style={styles.media}>
        {item.media ? (
          <Image
            accessibilityIgnoresInvertColors
            alt={`${item.title}: ${item.description}`}
            resizeMode="cover"
            source={{ uri: item.media }}
            style={styles.mediaImage}
          />
        ) : (
          <Text style={styles.mediaText}>{item.title}</Text>
        )}
      </View>
      <View style={styles.body}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.title}</Text>
          {item.kind === "first-party" ? (
            <View style={styles.kindPill}>
              <Text style={styles.kindText}>Built</Text>
            </View>
          ) : null}
        </View>
        <Text numberOfLines={3} style={styles.description}>
          {item.description}
        </Text>
        <View style={styles.links}>
          {item.links.map((link) => (
            <ExternalPressable key={`${item.title}-${link.label}`} url={link.url}>
              <Text style={styles.link}>{link.label}</Text>
            </ExternalPressable>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    gap: spacing.lg,
  },
  stageRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.md,
    justifyContent: "center",
    width: "100%",
  },
  stage: {
    alignItems: "center",
    flex: 1,
    height: CARD_HEIGHT + 48,
    justifyContent: "flex-start",
    paddingTop: 8,
  },
  cardWrap: {
    maxWidth: MAX_CARD_WIDTH,
    position: "absolute",
    top: 8,
    ...(Platform_select_cursor() as object),
  },
  cardPress: {
    cursor: "grab",
  } as unknown as ViewStyle,
  card: {
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: radii.lg,
    borderWidth: 1,
    boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
    height: CARD_HEIGHT,
    overflow: "hidden",
  },
  media: {
    alignItems: "center",
    backgroundColor: colors.accentSoft,
    height: 240,
    justifyContent: "center",
  },
  mediaImage: {
    height: "100%",
    width: "100%",
  },
  mediaText: {
    color: colors.muted,
    fontFamily: fonts.heading,
    fontSize: 22,
  },
  body: {
    flex: 1,
    gap: spacing.sm,
    padding: spacing.lg,
  },
  titleRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: spacing.sm,
  },
  title: {
    color: colors.foreground,
    fontFamily: fonts.heading,
    fontSize: 30,
    fontWeight: "600",
  },
  kindPill: {
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  kindText: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 10,
    fontWeight: "600",
    letterSpacing: 0.4,
    textTransform: "uppercase",
  },
  description: {
    color: colors.muted,
    fontFamily: fonts.body,
    fontSize: 14,
    lineHeight: 22,
  },
  links: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginTop: "auto",
  },
  link: {
    backgroundColor: colors.accentSoft,
    borderColor: colors.border,
    borderRadius: radii.sm,
    borderWidth: 1,
    color: colors.foreground,
    fontFamily: fonts.body,
    fontSize: 12,
    fontWeight: "600",
    overflow: "hidden",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  arrow: {
    alignItems: "center",
    backgroundColor: colors.card,
    borderColor: colors.border,
    borderRadius: 999,
    borderWidth: 1,
    height: 44,
    justifyContent: "center",
    width: 44,
    zIndex: 5,
  },
  arrowLeft: {},
  arrowRight: {},
  dots: {
    flexDirection: "row",
    gap: 6,
  },
  dot: {
    backgroundColor: colors.border,
    borderRadius: 3,
    height: 6,
    width: 6,
  },
  dotActive: {
    backgroundColor: colors.blue,
    width: 18,
  },
});

// Web: show a grab cursor on the draggable card.
function Platform_select_cursor() {
  return { cursor: "grab" };
}
