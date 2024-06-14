import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";

const AboutIcon = () => {
  const {colors} = useTheme();
	return <Feather name="info" size={28} color={colors.text}/>;
};

export default AboutIcon;
