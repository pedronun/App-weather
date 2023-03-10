import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { LocationContextProvider } from "./src/contexts/LocationContext";
import { colorTheme } from "./src/global/colorTheme";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFPro-Light": require("./src/assets/fonts/SF-Pro-Display-Light.otf"),
    "SFPro-Regular": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFProDisplay-Regular": require("./src/assets/fonts/SF-Pro-Display-Regular.otf"),
    "SFPro-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFProDisplay-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFPro-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LocationContextProvider>
      <ThemeProvider theme={colorTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </ThemeProvider>
    </LocationContextProvider>
  );
}
