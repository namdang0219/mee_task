import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const HelpIcon = () => {
	const { colors } = useTheme();
	return <Ionicons name="help-circle-outline" size={32} color={colors.text} />;
};

export default HelpIcon;
