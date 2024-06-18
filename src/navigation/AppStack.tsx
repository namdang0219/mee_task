import React from "react";
import BottomTab from "./BottomTab";
import CreateUserInfo from "screens/app/CreateUserInfo";
import UploadAvatar from "screens/app/UploadAvatar";
import Profile from "screens/app/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AppStack = () => {
	return (
		<Stack.Navigator
			// initialRouteName="BottomTab"
			screenOptions={{
				headerShown: false,
			}}
		>
			{/* <Stack.Screen name="CreateUserInfo" component={CreateUserInfo} /> */}
			<Stack.Screen name="UploadAvatar" component={UploadAvatar} />
			<Stack.Screen name="BottomTab" component={BottomTab}></Stack.Screen>
			<Stack.Screen name="Profile" component={Profile}></Stack.Screen>
		</Stack.Navigator>
	);
};

export default AppStack;
