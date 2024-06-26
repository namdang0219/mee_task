import { View, Image } from "react-native";
import React, { useEffect } from "react";
import { ThemedText } from "components/themed";
import { SafeView } from "components/layouts";
import { Button } from "components/buttons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const WalkThrough = () => {
	const { navigate } = useNavigation<any>();
	return (
		<SafeView>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<View style={{ marginTop: -45 }}>
					<View style={{ alignItems: "center", marginBottom: 32 }}>
						<Image
							source={require("../../../assets/images/walkthrough.png")}
							style={{ width: 280, height: 280 }}
						></Image>
					</View>
					<ThemedText
						style={{
							textAlign: "center",
							fontSize: 24,
							lineHeight: 35,
						}}
					>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</ThemedText>
				</View>
			</View>
			<Button
				onPress={() => navigate("Register")}
				style={{ marginBottom: 16 }}
			>
				Getting Started
			</Button>
		</SafeView>
	);
};

export default WalkThrough;
