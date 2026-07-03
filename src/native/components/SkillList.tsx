import { StyleSheet, View } from "react-native";

import { spacing } from "../styles";
import { Chip } from "./Chip";

type SkillListProps = {
  items: string[];
};

export function SkillList({ items }: SkillListProps) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <Chip key={`${item}-${index}`} label={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
  },
});
