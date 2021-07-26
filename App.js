import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Services from "./src/screens/services";
// import MyProfile from "./src/screens/myProfile";
// import UserInfo from "./src/screens/UserInfo";
// import Page1 from "./src/screens/page1";
// import Page0 from "./src/screens/page0";
// import MyServices from "./src/screens/MyServices";
// import MyVehicle from "./src/screens/MyVehicle";
// import SpMyProfile from "./src/screens/spMyProfile";
// import spCompletedServices from "./src/screens/spCompletedServices";
// import SpPayments from "./src/screens/spPayments";
// import Emergency from "./src/screens/emergency";
// import sp1 from "./src/screens/sp1";
// import spPendingServ from "./src/screens/spPendingServ";
// import spLogin from "./src/screens/spLogin";
// import sp2 from "./src/screens/sp2";
// import spMyProfile from "./src/screens/spMyProfile";
// import spHS from "./src/screens/spHS";
// import spMyServices from "./src/screens/spMyServices";
// import subServices from "./src/screens/subServices";
// import spCarType from "./src/screens/spCarType";
// import ssubServices from "./src/screens/ssubServices";
// import OnboardingScreen from "./src/screens/OnboardingScreen";
// import TestFile from "./src/screens/TestFile";
import 'react-native-gesture-handler';
import RootStack from "./src/navigations";
const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <RootStack />
    // </NavigationContainer>
  );
}
