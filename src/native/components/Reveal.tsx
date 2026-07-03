import { PropsWithChildren, useEffect, useRef } from "react";
import { Animated, StyleSheet } from "react-native";

type RevealProps = PropsWithChildren<{
  delay?: number;
}>;

export function Reveal({ children, delay = 0 }: RevealProps) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        delay,
        duration: 420,
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        delay,
        duration: 420,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, opacity, translateY]);

  return (
    <Animated.View
      style={[
        styles.reveal,
        {
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  reveal: {
    width: "100%",
  },
});
