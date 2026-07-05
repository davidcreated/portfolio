import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {
  // Load the brand fonts without blocking first paint. The page renders
  // immediately in a system-font fallback and swaps to the custom faces when
  // they're ready, rather than showing a blank screen until fonts download.
  useFonts({
    CabinetGrotesk: require("../public/fonts/CabinetGrotesk-Medium.ttf"),
    ClashDisplay: require("../public/fonts/ClashDisplay-Semibold.ttf"),
  });

  return <Stack screenOptions={{ headerShown: false }} />;
}
