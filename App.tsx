import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "navigation/RootNavigation";
import { useColorScheme } from "react-native";
import { CustomDarkTheme, CustomLightTheme } from "constants/color";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { StatusBar } from "expo-status-bar";
import { AuthProvider } from "contexts/auth-context";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = () => {
	const scheme = useColorScheme();

	return (
		<>
			<StatusBar style={scheme === "dark" ? "light" : "dark"} />
			<SafeAreaProvider>
				<ActionSheetProvider>
					<AuthProvider>
						<NavigationContainer
							theme={
								scheme === "dark"
									? CustomDarkTheme
									: CustomLightTheme
							}
						>
							<RootNavigation />
						</NavigationContainer>
					</AuthProvider>
				</ActionSheetProvider>
			</SafeAreaProvider>
		</>
	);
};

export default App;
