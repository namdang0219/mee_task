import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			// initialRouteName="AuthStack"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="AuthStack" component={AuthStack} />
			<Stack.Screen name="AppStack" component={AppStack} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
