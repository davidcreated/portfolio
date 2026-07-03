import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    CabinetGrotesk: require("../public/fonts/CabinetGrotesk-Medium.ttf"),
    ClashDisplay: require("../public/fonts/ClashDisplay-Semibold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
