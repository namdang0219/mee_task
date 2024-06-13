import {
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import React from "react";
import { globalConstants } from "constants/constant";

const CustomTouchableOpacity = ({ children }: TouchableOpacityProps) => {
	return (
		<TouchableOpacity activeOpacity={globalConstants.activeOpacity}>
			{children}
		</TouchableOpacity>
	);
};

export default CustomTouchableOpacity;
