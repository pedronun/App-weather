import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, Text } from "react-native";

const Map = () => {
  return (
    <LinearGradient colors={["#2E335A", "#1C1B33"]} style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", textTransform: "uppercase", fontWeight: 'bold' }}>
          Google Maps must be paid to work
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Map;
