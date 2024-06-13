import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { CheckBox } from "@rneui/themed";
import { LoginMethod } from "modules";
import { ThemedText } from "components/themed";

const Register = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();
	const [checked, setChecked] = React.useState(false);

	// Register styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
		checkboxText: {
			color: colors.text,
			fontSize: 14,
			fontWeight: "300",
			marginHorizontal: 0,
		},
		checkboxContainer: {
			marginTop: 0,
			paddingTop: 0,
			backgroundColor: "transparent",
		},
	});

	return (
		<SafeView>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Register
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>Welcome to MeeTask</SubTitle>
			<View>
				<Input style={styles.input} placeholder="Email"></Input>
				<Input style={styles.input} placeholder="Password"></Input>
				<Input
					style={styles.input}
					placeholder="Confirm Password"
				></Input>
			</View>
			<CheckBox
				title="Accept all terms and privacy "
				checked={checked}
				onPress={() => setChecked(!checked)}
				textStyle={styles.checkboxText}
				containerStyle={styles.checkboxContainer}
				checkedColor={colors.primary}
			/>
			<Button onPress={() => navigate("Login")}>Register</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					Already have an account?<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Register")}
				>
					Login
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Register;
