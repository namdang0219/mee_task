import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { globalConstants } from "constants/constant";
import { ThemedText } from "components/themed";
import { useNavigation, useTheme } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { CustomTouchableOpacity } from "components/customs";
import {
	AboutIcon,
	ArrowRight,
	HelpIcon,
	LanguageIcon,
	LogoutIcon,
	NotificationIcon,
	PrivacyIcon,
	SettingIcon,
} from "components/icons";
import { useAuth } from "contexts/auth-context";
import { HeaderContainer } from "components/header";
import { MenuItemProps } from "types/mixTypes";
import { MenuItem } from "components/items";
import { auth } from "../../../firebaseConfig";
import { signOut } from "firebase/auth";

const Menu = () => {
	const { colors } = useTheme();
	const { navigate } = useNavigation<any>();
	const { user, setUser } = useAuth();
	const avatar = user?.photoURL;

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

	const userFeatures: MenuItemProps[] = [
		{
			id: 1,
			title: "Notification",
			to: "Notification",
			icon: <NotificationIcon></NotificationIcon>,
		},
		{
			id: 2,
			title: "Language",
			to: "Language",
			icon: <LanguageIcon></LanguageIcon>,
		},
		{
			id: 3,
			title: "Setting",
			to: "Setting",
			icon: <SettingIcon></SettingIcon>,
		},
	];

	const appFeatures = [
		{
			id: 1,
			title: "About us",
			to: "About us",
			icon: <AboutIcon></AboutIcon>,
		},
		{
			id: 2,
			title: "Privacy",
			to: "Privacy",
			icon: <PrivacyIcon></PrivacyIcon>,
		},
		{
			id: 3,
			title: "Help",
			to: "Help",
			icon: <HelpIcon></HelpIcon>,
		},
		{
			id: 4,
			title: "Logout",
			to: async () => {
				await signOut(auth);
				setUser(null);
				navigate("AuthStack", { screen: "WalkThrought" });
			},
			icon: <LogoutIcon></LogoutIcon>,
		},
	];

	return (
		<SafeView style={{ paddingBottom: 0, paddingHorizontal: 0 }}>
			<HeaderContainer
				title="Menu"
				style={{ paddingHorizontal: globalConstants.padding }}
			></HeaderContainer>
			<ScrollView style={{ padding: 0 }}>
				<MenuProfile avatar={avatar} navigate={navigate}></MenuProfile>
				<View style={styles.bottomSpacing}>
					{userFeatures.map((item) => (
						<MenuItem key={item.id} item={item}></MenuItem>
					))}
				</View>
				<View>
					{appFeatures.map((item) => (
						<MenuItem key={item.id} item={item}></MenuItem>
					))}
				</View>
			</ScrollView>
		</SafeView>
	);
};

function MenuProfile({ navigate, avatar }: { navigate: any; avatar: string }) {
	const { colors } = useTheme();
	const { user } = useAuth();
	const styles = StyleSheet.create({
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
	return (
		<CustomTouchableOpacity
			onPress={() => navigate("Profile")}
			style={[styles.profileContainer, styles.bottomSpacing]}
		>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					gap: 12,
				}}
			>
				{avatar ? (
					<Image
						source={{
							uri: avatar,
						}}
						style={{
							width: 60,
							height: 60,
							borderRadius: 1000,
						}}
					></Image>
				) : (
					<View
						style={[
							{
								width: 60,
								height: 60,
								borderRadius: 1000,
								backgroundColor: colors.inputBackground,
							},
							{ alignItems: "center", justifyContent: "center" },
						]}
					>
						<AntDesign name="user" size={30} color="#8A8A8A" />
					</View>
				)}

				<View>
					<ThemedText
						style={{
							fontSize: 24,
							fontWeight: "500",
							marginBottom: 4,
						}}
					>
						{user.displayName}
					</ThemedText>
					<ThemedText
						style={{
							fontSize: 16,
							fontWeight: "300",
						}}
						numberOfLines={1}
					>
						{user.email}
					</ThemedText>
				</View>
			</View>
			<ArrowRight></ArrowRight>
		</CustomTouchableOpacity>
	);
}

export default Menu;
