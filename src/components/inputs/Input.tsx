import { Text, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import { globalConstants } from "constants/constant";
import { useTheme } from "@react-navigation/native";
import { ThemedText } from "components/themed";

const Input = ({
	style,
	placeholder,
	error,
}: TextInputProps & { error?: string }) => {
	const { colors } = useTheme();
	return (
		<View style={{ position: "relative" }}>
			<TextInput
				placeholder={placeholder}
				style={[
					{
						backgroundColor: colors.inputBackground,
						paddingHorizontal: globalConstants.padding,
						paddingVertical: 18,
						borderRadius: globalConstants.borderRadius,
						color: colors.text,
					},
					style,
				]}
				autoComplete="off"
				autoCapitalize="none"
				onFocus={() => null}
			/>
			{error && (
				<Text
					style={{
						position: "absolute",
						bottom: 5,
						left: 20,
						fontSize: 12,
						color: "red",
					}}
				>
					An error has occur!
				</Text>
			)}
		</View>
	);
};

export default Input;
