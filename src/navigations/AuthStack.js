import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Page1 from "../screens/page1";
import Page0 from "../screens/page0";
import spLogin from "../screens/spLogin";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);
  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch == true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Page1"
        component={Page1}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Page0"
        component={Page0}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="spLogin"
        component={spLogin}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
