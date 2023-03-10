import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import CustomTabBar from "../components/CustomTabBar/CustomTabBar";
import Home from "../screens/Home/Home";
import Map from "../screens/Map/Map";
import Search from "../screens/Search/Search";

const Tab = createBottomTabNavigator();


export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
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
