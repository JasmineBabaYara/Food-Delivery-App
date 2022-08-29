import React from "react";

//importing navigation components
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../Screens/Welcome";
import Home from "../Screens/Home";
import Order from "../Screens/Order";
import Delivery from "../Screens/Delivery";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={Home}
      screenOptions={{ headerShown: false }}
    >
      {/* <Stack.Screen name="Welcome " component={Welcome} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Delivery" component={Delivery} />
    </Stack.Navigator>
  );
}
