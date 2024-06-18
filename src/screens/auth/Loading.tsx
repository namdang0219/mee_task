import { ActivityIndicator, StyleSheet } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { useTheme } from "@react-navigation/native";

const Loading = () => {
	const { colors } = useTheme();
	return (
		<SafeView style={styles.container}>
			<ActivityIndicator
				size="large"
				color={colors.primary}
				style={styles.loading}
			></ActivityIndicator>
		</SafeView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	loading: { transform: [{ scale: 0.65 }] },
});

export default Loading;
