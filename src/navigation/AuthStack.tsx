import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WalkThrough from "screens/auth/WalkThrough";
import Login from "screens/auth/Login";
import Register from "screens/auth/Register";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="WalkThrough" component={WalkThrough} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Register" component={Register} />
		</Stack.Navigator>
	);
};

export default AuthStack;
