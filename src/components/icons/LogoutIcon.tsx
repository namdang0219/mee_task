import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const LogoutIcon = () => {
	const { colors } = useTheme();
	return <MaterialIcons name="logout" size={28} color={colors.text} />;
};

export default LogoutIcon;
