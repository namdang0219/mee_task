import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "navigation/RootNavigation";
import { useColorScheme } from "react-native";
import { CustomDarkTheme, CustomLightTheme } from "constants/color";

const App = () => {
	const scheme = useColorScheme();

	return (
		<NavigationContainer
			theme={scheme === "dark" ? CustomDarkTheme : CustomLightTheme}
		>
			<RootNavigation />
		</NavigationContainer>
	);
};

export default App;
