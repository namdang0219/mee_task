import {
	Text,
	TextProps,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { globalConstants } from "constants/constant";

type ButtonProps = TouchableOpacityProps & {
	textStyle?: TextProps["style"];
};

const Button = ({
	children,
	style,
	textStyle = { fontSize: 18, fontWeight: "500" },
	...props
}: ButtonProps) => {
	const { colors } = useTheme();
	return (
		<TouchableOpacity
			activeOpacity={globalConstants.activeOpacity}
			style={[
				{
					backgroundColor: colors.primary,
					height: 60,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 10
				},
				style,
			]}
			{...props}
		>
			<Text style={[{ color: "white" }, textStyle]}>{children}</Text>
		</TouchableOpacity>
	);
};

export default Button;
