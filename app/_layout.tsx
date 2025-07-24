import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootNavigator() {
  const [termuat, gagalMuat] = useFonts({
    merriweather: require("../assets/fonts/variable/Merriweather-VariableFont_opsz,wdth,wght.ttf"),
    oswald: require("../assets/fonts/variable/Oswald-VariableFont_wght.ttf"),
    raleway: require("../assets/fonts/variable/Raleway-VariableFont_wght.ttf"),
    roboto: require("../assets/fonts/variable/RobotoMono-VariableFont_wght.ttf"),
    tiktoksans: require("../assets/fonts/variable/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf"),
    ubuntu: require("../assets/fonts/static/Ubuntu-Italic.ttf"),
    barlowCondensed: require("../assets/fonts/static/BarlowCondensed-Regular.ttf"),
    ptsans: require("../assets/fonts/static/PTSans-Regular.ttf"),
    rubik: require("../assets/fonts/static/Rubik-Regular.ttf"),
    tilitium: require("../assets/fonts/static/TitilliumWeb-Regular.ttf"),
  });

  useEffect(() => {
    if (termuat || gagalMuat) {
      SplashScreen.hideAsync();
    }
  }, [termuat, gagalMuat]);

  if (!termuat && !gagalMuat) return null;

  return <Stack />;
}
