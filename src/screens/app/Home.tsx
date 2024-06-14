import React from "react";
import { ThemedText } from "components/themed";
import { SafeView } from "components/layouts";
import { StyleSheet } from "react-native";

const Home = () => {
	const styles = StyleSheet.create({
		container: {
			paddingBottom: 0,
		},
	});

	return (
		<SafeView style={styles.container}>
			<ThemedText style={{ marginTop: "auto" }}>Nam</ThemedText>
		</SafeView>
	);
};

export default Home;
