import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { TitleLarge } from "components/titles";
import { Button } from "components/buttons";
import { useNavigation, useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { CustomTouchableOpacity } from "components/customs";
import { useActionSheet } from "@expo/react-native-action-sheet";
import * as ImagePicker from "expo-image-picker";

const UploadAvatar = () => {
	const { navigate } = useNavigation<any>();
	const { colors } = useTheme();
	const { showActionSheetWithOptions } = useActionSheet();
	const [image, setImage] = React.useState<string>("");

	const handleSelectAvatar = () => {
		const options = ["Take a photo", "Choose from galerry", "Cancel"];
		const cancelButtonIndex = 2;
		showActionSheetWithOptions(
			{
				options,
				cancelButtonIndex,
			},
			(selectedIndex: number | undefined) => {
				switch (selectedIndex) {
					case 1:
						// Choose from galerry
						pickImage();
						break;
					case 0:
						// Take a photo
						takePhoto()
						break;
					case cancelButtonIndex:
					// Canceled
				}
			}
		);
	};

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [1, 1],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	const takePhoto = async () => {
		// Ask for camera permissions
		const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
			cameraType: ImagePicker.CameraType.front,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
				{image ? (
					<CustomTouchableOpacity onPress={handleSelectAvatar}>
						<Image
							source={{
								uri: image,
							}}
							style={styles.avatar}
						></Image>
					</CustomTouchableOpacity>
				) : (
					<CustomTouchableOpacity
						onPress={handleSelectAvatar}
						style={styles.avatar}
					>
						<AntDesign name="user" size={60} color="#8A8A8A" />
					</CustomTouchableOpacity>
				)}
			</View>
			<Text style={styles.userName}>Mai Ngoc</Text>
			<View style={{ marginTop: "auto", marginBottom: 16 }}>
				<CustomTouchableOpacity
					style={{ alignItems: "center", marginBottom: 18 }}
					onPress={() =>
						navigate("AppStack", { screen: "BottomTab" })
					}
				>
					<Text style={{ color: colors.primary, fontSize: 16 }}>
						Skip
					</Text>
				</CustomTouchableOpacity>
				<Button
					onPress={() =>
						navigate("AppStack", { screen: "BottomTab" })
					}
				>
					Save
				</Button>
			</View>
		</SafeView>
	);
};

export default UploadAvatar;
