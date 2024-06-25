import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const BackIcon = () => {
	const { colors } = useTheme();
	return (
		<FontAwesome6
			name="chevron-left"
			size={20}
			color={colors.text}
		></FontAwesome6>
	);
};

export default BackIcon;
