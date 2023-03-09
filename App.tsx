import { StyleSheet, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { Routes } from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    "SFPro-Regular": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
    "SFPro-Semibold": require("./src/assets/fonts/SF-Pro-Text-Semibold.otf"),
    "SFPro-Bold": require("./src/assets/fonts/SF-Pro-Text-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
