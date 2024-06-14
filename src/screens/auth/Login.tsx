import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import { SafeView } from "components/layouts";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { LoginMethod } from "modules";
import { CustomTouchableOpacity } from "components/customs";
import { ThemedText } from "components/themed";

const Login = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();

	// Register styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
	});

	return (
		<SafeView>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Login
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>Hi, Welcome back!</SubTitle>
			<View>
				<Input style={styles.input} placeholder="Email"></Input>
				<Input style={styles.input} placeholder="Password"></Input>
			</View>
			<CustomTouchableOpacity style={{ marginBottom: 16 }}>
				<ThemedText style={{ textAlign: "right" }}>
					Forgot Password?
				</ThemedText>
			</CustomTouchableOpacity>
			<Button onPress={() => navigate("BottomTab")}>Login</Button>
			<Text style={{ textAlign: "center", marginTop: 20 }}>
				<ThemedText>
					Don't have an account?<Text> </Text>
				</ThemedText>
				<Text
					style={{
						color: colors.primary,
						fontWeight: "500",
					}}
					onPress={() => navigate("Register")}
				>
					Register
				</Text>
			</Text>
			<LoginMethod></LoginMethod>
		</SafeView>
	);
};

export default Login;
