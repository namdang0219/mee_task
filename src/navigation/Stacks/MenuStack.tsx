import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notification from "screens/app/MenuStack/Notification";
import Language from "screens/app/MenuStack/Language";
import Setting from "screens/app/MenuStack/Setting";
import AboutUs from "screens/app/MenuStack/AboutUs";
import Privacy from "screens/app/MenuStack/Privacy";
import Help from "screens/app/MenuStack/Help";
import Profile from "screens/app/MenuStack/Profile";
import Menu from "screens/app/Menu";

const Stack = createNativeStackNavigator();

const MenuStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Menu">
			<Stack.Screen name="Menu" component={Menu}></Stack.Screen>
			<Stack.Screen
				name="Notification"
				component={Notification}
			></Stack.Screen>
			<Stack.Screen name="Language" component={Language}></Stack.Screen>
			<Stack.Screen name="Setting" component={Setting}></Stack.Screen>
			<Stack.Screen name="AboutUs" component={AboutUs}></Stack.Screen>
			<Stack.Screen name="Privacy" component={Privacy}></Stack.Screen>
			<Stack.Screen name="Help" component={Help}></Stack.Screen>
			<Stack.Screen name="Profile" component={Profile}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default MenuStack;
