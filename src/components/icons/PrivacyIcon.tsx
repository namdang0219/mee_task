import React from "react";
import { Octicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const PrivacyIcon = () => {
	const { colors } = useTheme();
	return <Octicons name="shield-lock" size={26} color={colors.text} />;
};

export default PrivacyIcon;
