import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable } from "react-native";
import { ImageBackground } from "react-native";
import { HomeIcon, ListIcon, MapIcon } from "../Icon";

function CustomTabBar({ state: { routes }, navigation }: BottomTabBarProps) {
  return (
    <ImageBackground
      source={require("../../assets/img/bottom-bar-background.png")}
      style={{
        width: "100%",
        height: 88,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
      }}
    >
      {routes.map((route, index) => {
        return (
          <Pressable
            key={index}
            style={{
              paddingHorizontal: 32,
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate(route.name);
            }}
          >
            {route.name === "Home" ? (
              <HomeIcon />
            ) : route.name === "Search" ? (
              <ListIcon />
              ) : (
              <MapIcon />
            )}
          </Pressable>
        );
      })}
    </ImageBackground>
  );
}

export default CustomTabBar;