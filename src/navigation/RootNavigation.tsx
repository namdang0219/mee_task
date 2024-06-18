import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { useAuth } from "contexts/auth-context";
import Loading from "screens/auth/Loading";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
	const { user } = useAuth();
	if (!user) return <Loading></Loading>;
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			{!user ? (
				<Stack.Screen name="AuthStack" component={AuthStack} />
			) : (
				<Stack.Screen name="AppStack" component={AppStack} />
			)}
		</Stack.Navigator>
	);
};

export default RootNavigation;
