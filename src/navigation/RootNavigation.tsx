import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import BottomTab from "./BottomTab";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			initialRouteName="BottomTab"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="AuthStack" component={AuthStack} />
			{/* <Stack.Screen name="AppStack" component={AppStack} />
			<Stack.Screen name="BottomTab" component={BottomTab} /> */}
		</Stack.Navigator>
	);
};

export default RootNavigation;
