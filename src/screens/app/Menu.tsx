import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { globalConstants } from "constants/constant";
import { ThemedText } from "components/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/customs";
import { AboutIcon, HelpIcon, LanguageIcon, LogoutIcon, NotificationIcon, PrivacyIcon, SettingIcon } from "components/icons";

const Menu = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();

	// Menu styles
	const styles = StyleSheet.create({
		screenHeader: {
			paddingHorizontal: globalConstants.padding,
			paddingVertical: 5,
		},
		bottomSpacing: {
			borderBottomWidth: 5,
			borderBottomColor: colors.inputBackground,
		},
		profileContainer: {
			paddingHorizontal: globalConstants.padding,
			paddingVertical: 10,
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "space-between",
		},
	});

	const ArrowIconRight = () => {
		return <Entypo name="chevron-thin-right" color={"gray"} size={20} />;
	};

	return (
		<SafeView style={{ paddingBottom: 0, paddingHorizontal: 0 }}>
			<View style={styles.screenHeader}>
				<ThemedText style={{ fontSize: 28, fontWeight: "500" }}>
					Menu
				</ThemedText>
			</View>
			<ScrollView style={{ padding: 0 }}>
				<CustomTouchableOpacity
					onPress={() => navigate("Profile")}
					style={[styles.profileContainer, styles.bottomSpacing]}
				>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							gap: 16,
						}}
					>
						<Image
							source={{
								uri: "https://plus.unsplash.com/premium_photo-1682095831819-df014ef95cc9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
							}}
							style={{
								width: 60,
								height: 60,
								borderRadius: 1000,
							}}
						></Image>
						<View>
							<ThemedText
								style={{
									fontSize: 24,
									fontWeight: "500",
									marginBottom: 4,
								}}
							>
								Mai Ngoc
							</ThemedText>
							<ThemedText
								style={{
									fontSize: 16,
									fontWeight: "300",
								}}
								numberOfLines={1}
							>
								meetask.admin@gmail.com
							</ThemedText>
						</View>
					</View>
					<ArrowIconRight></ArrowIconRight>
				</CustomTouchableOpacity>
				<View style={styles.bottomSpacing}>
					{userFeatures.map((item) => (
						<CustomTouchableOpacity
							key={item.id}
							style={{
								paddingHorizontal: globalConstants.padding,
								paddingVertical: 10,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									gap: 12,
								}}
							>
								<View
									style={{
										width: 34,
										height: 34,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{item.icon}
								</View>
								<ThemedText
									style={{ fontSize: 18, fontWeight: "500" }}
								>
									{item.navigateTo}
								</ThemedText>
							</View>
							<ArrowIconRight></ArrowIconRight>
						</CustomTouchableOpacity>
					))}
				</View>
				<View>
					{appFeatures.map((item) => (
						<CustomTouchableOpacity
							key={item.id}
							style={{
								paddingHorizontal: globalConstants.padding,
								paddingVertical: 10,
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-between",
							}}
						>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "center",
									gap: 12,
								}}
							>
								<View
									style={{
										width: 34,
										height: 34,
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{item.icon}
								</View>
								<ThemedText
									style={{ fontSize: 18, fontWeight: "500" }}
								>
									{item.navigateTo}
								</ThemedText>
							</View>
							<ArrowIconRight></ArrowIconRight>
						</CustomTouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeView>
	);
};

const userFeatures = [
	{
		id: 1,
		navigateTo: "Notification",
		icon: <NotificationIcon></NotificationIcon>,
	},
	{
		id: 2,
		navigateTo: "Language",
		icon: <LanguageIcon></LanguageIcon>,
	},
	{
		id: 3,
		navigateTo: "Setting",
		icon: <SettingIcon></SettingIcon>,
	},
];

const appFeatures = [
	{
		id: 1,
		navigateTo: "About us",
		icon: <AboutIcon></AboutIcon>,
	},
	{
		id: 2,
		navigateTo: "Privacy",
		icon: <PrivacyIcon></PrivacyIcon>,
	},
	{
		id: 3,
		navigateTo: "Help",
		icon: <HelpIcon></HelpIcon>,
	},
	{
		id: 4,
		navigateTo: "Logout",
		icon: <LogoutIcon></LogoutIcon>,
	},
];

export default Menu;
