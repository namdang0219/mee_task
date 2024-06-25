import { View, Text, StyleSheet, TextProps } from "react-native";
import React, { ReactNode } from "react";
import { ThemedText } from "components/themed";
import { globalConstants } from "constants/constant";
import { CustomTouchableOpacity } from "components/customs";
import { BackIcon } from "components/icons";
import { useNavigation } from "@react-navigation/native";

const HeaderContainer = ({
	title,
	canGoBack,
	style,
	children,
}: TextProps & { title: string | ReactNode; canGoBack?: boolean }) => {
	const styles = StyleSheet.create({
		screenHeader: {
			paddingVertical: 5,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: globalConstants.padding,
		},
	});
	const {goBack} = useNavigation()
	return (
		<View style={[styles.screenHeader, style]}>
			{canGoBack ? (
				<CustomTouchableOpacity
					style={{
						flexDirection: "row",
						gap: 6,
						alignItems: "center",
					}}
					onPress={() => goBack()}
				>
					<BackIcon></BackIcon>
					<ThemedText style={{ fontSize: 24, fontWeight: "600" }}>
						{title}
					</ThemedText>
				</CustomTouchableOpacity>
			) : (
				<ThemedText style={{ fontSize: 24, fontWeight: "600" }}>
					{title}
				</ThemedText>
			)}
			{children}
		</View>
	);
};

export default HeaderContainer;
