import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import React from "react";
import { globalConstants } from "constants/constant";
import { useTheme } from "@react-navigation/native";

const Input = ({
	style,
	placeholder,
	error,
	onBlur,
	onChangeText,
	value,
}: TextInputProps & { error?: string | undefined }) => {
	const { colors } = useTheme();

	// Input styles
	const styles = StyleSheet.create({
		input: {
			backgroundColor: colors.inputBackground,
			paddingHorizontal: globalConstants.padding,
			paddingVertical: 18,
			borderRadius: globalConstants.borderRadius,
			color: colors.text,
		},
		error: {
			position: "absolute",
			bottom: 5,
			left: 20,
			fontSize: 12,
			color: "red",
		},
	});

	return (
		<View style={{ position: "relative" }}>
			<TextInput
				placeholder={placeholder}
				style={[styles.input, style]}
				onBlur={onBlur}
				onChangeText={onChangeText}
				autoComplete="off"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>
	);
};

export default Input;
