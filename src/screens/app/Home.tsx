import React from "react";
import { ThemedText } from "components/themed";
import { SafeView } from "components/layouts";
import { Text } from "react-native";
import { HeaderContainer } from "components/header";
import { useTheme } from "@react-navigation/native";
import { useAuth } from "contexts/auth-context";

const Home = () => {
	const { colors } = useTheme();
	const { user } = useAuth();
	// console.log("🚀 ~ Home ~ user:", user);

	return (
		<SafeView style={{ paddingBottom: 0 }}>
			<HeaderContainer
				style={{ paddingHorizontal: 0 }}
				title={
					<ThemedText>
						Good morning{" "}
						<Text style={{ color: colors.primary }}>
							{user?.displayName ? user?.displayName : "Guest"}
						</Text>
					</ThemedText>
				}
			></HeaderContainer>
		</SafeView>
	);
};

export default Home;
