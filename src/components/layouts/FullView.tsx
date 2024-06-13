import { TouchableWithoutFeedback, ViewProps, Keyboard } from "react-native";
import React, { ReactNode } from "react";
import { ThemedView } from "components/themed";

const FullView = ({ children, style, ...props }: ViewProps) => {
	return (
		<ThemedView style={[{ flex: 1 }, style]} {...props}>
			<TouchableWithoutFeedback
				style={{ flex: 1 }}
				onPress={() => Keyboard.dismiss()}
			>
				{children}
			</TouchableWithoutFeedback>
		</ThemedView>
	);
};

export default FullView;
