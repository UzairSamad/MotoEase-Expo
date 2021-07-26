import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

import Services from "../screens/services";
import MyProfile from "../screens/myProfile";
import UserInfo from "../screens/UserInfo";
import MyServices from "../screens/MyServices";
import MyVehicle from "../screens/MyVehicle";
import Emergency from "../screens/emergency";
import ssubServices from "../screens/ssubServices";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const ServiceStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Services"
      component={Services}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="ssubServices"
      component={ssubServices}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="emergency"
      component={Emergency}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const UserProfile = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={UserInfo}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MyVehicle"
      component={MyVehicle}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MyProfile"
      component={MyProfile}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="MyServices"
      component={MyServices}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
const AppStack = () => {
  const getTabBarVisibility = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index].name
      : "";
    if (routeName === "MyVehicle") {
      return false;
    }
    return true;
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#2e64e5",
      }}
    >
      <Tab.Screen
        name="Service"
        component={ServiceStack}
        options={({ route }) => ({
          tabBarLabel: "Services",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="miscellaneous-services"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={UserProfile}
        options={({ route }) => ({
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
