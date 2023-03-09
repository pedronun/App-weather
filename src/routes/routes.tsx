import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "../screens/Home/Home";
import React from "react";
import { ImageBackground, Text, Pressable, Image } from "react-native";
import Search from "../screens/Search/Search";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Map from "../screens/Map/Map";

const Tab = createBottomTabNavigator();

import { HomeIcon, ListIcon, MapIcon, } from "../components/Icon";

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomBar {...props} />}
        tabBarOptions={{
          showLabel: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function BottomBar({ state: { routes }, navigation }: BottomTabBarProps) {
  const { bottom } = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require("../assets/img/bottom-bar-background.png")}
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
