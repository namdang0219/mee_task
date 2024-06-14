import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { TitleLarge } from "components/titles";
import { Button } from "components/buttons";
import { useNavigation, useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CustomTouchableOpacity } from "components/customs";

const UploadAvatar = () => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();

	const avatar = "";

	// CreateUserInfo styles
	const styles = StyleSheet.create({
		avatarContainer: {
			alignItems: "center",
			marginBottom: 18,
		},
		avatar: {
			backgroundColor: colors.inputBackground,
			width: 120,
			height: 120,
			borderRadius: 1000,
			justifyContent: "center",
			alignItems: "center",
		},
		userName: {
			fontSize: 24,
			fontWeight: "500",
			textAlign: "center",
			color: "#8A8A8A",
		},
	});

	return (
		<SafeView>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Upload your avatar
			</TitleLarge>
			<View style={styles.avatarContainer}>
				{avatar ? (
					<CustomTouchableOpacity>
						<Image
							source={{
								uri: "https://images.unsplash.com/photo-1534299898413-786c624f93eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
							}}
							style={styles.avatar}
						></Image>
					</CustomTouchableOpacity>
				) : (
					<CustomTouchableOpacity style={styles.avatar}>
						<AntDesign name="user" size={60} color="#8A8A8A" />
					</CustomTouchableOpacity>
				)}
			</View>
			<Text style={styles.userName}>Mai Ngoc</Text>
			<View style={{ marginTop: "auto", marginBottom: 16 }}>
				<CustomTouchableOpacity
					style={{ alignItems: "center", marginBottom: 18 }}
					onPress={() => navigate('App', { screen: "BottomTab" })}
				>
					<Text style={{ color: colors.primary, fontSize: 16 }}>
						Skip
					</Text>
				</CustomTouchableOpacity>
				<Button onPress={() => navigate("AppStack", {screen: 'BottomTab'})}>Save</Button>
			</View>
		</SafeView>
	);
};

export default UploadAvatar;
