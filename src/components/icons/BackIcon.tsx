import React from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const BackIcon = ({ whiteContent }: { whiteContent?: boolean }) => {
	const { colors } = useTheme();
	return (
		<FontAwesome6
			name="chevron-left"
			size={20}
			color={whiteContent ? "white" : colors.text}
		></FontAwesome6>
	);
};

export default BackIcon;
