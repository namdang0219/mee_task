import { View, StyleSheet } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { TitleLarge } from "components/titles";
import { SubTitle } from "components/subTitle";
import { Input } from "components/inputs";
import { Button } from "components/buttons";
import { useNavigation } from "@react-navigation/native";

const CreateUserInfo = () => {
	const { navigate } = useNavigation<any>();

	// CreateUserInfo styles
	const styles = StyleSheet.create({
		input: { marginBottom: 22, paddingVertical: 22 },
	});

	return (
		<SafeView>
			<TitleLarge style={{ marginTop: 54, marginBottom: 40 }}>
				Create Your Info
			</TitleLarge>
			<SubTitle style={{ marginBottom: 40 }}>
				Let's us known about you
			</SubTitle>
			<View>
				<Input style={styles.input} placeholder="First Name"></Input>
				<Input style={styles.input} placeholder="Last Name"></Input>
			</View>
			<View style={{marginTop: 'auto', marginBottom: 16}}>
				<Button onPress={() => navigate("UploadAvatar")}>Save</Button>
			</View>
		</SafeView>
	);
};

export default CreateUserInfo;
