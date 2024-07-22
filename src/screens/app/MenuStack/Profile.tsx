import {
	View,
	Text,
	ScrollView,
	Image,
	StatusBar,
	ImageBackground,
} from "react-native";
import React from "react";
import { ThemedView } from "components/themed";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useAuth } from "contexts/auth-context";
import { AntDesign } from "@expo/vector-icons";
import { HeaderContainer } from "components/header";

const Profile = () => {
	const insets = useSafeAreaInsets();
	const { colors } = useTheme();
	const { user } = useAuth();
	return (
		<ThemedView style={{ paddingBottom: 0, paddingHorizontal: 0 }}>
			<StatusBar barStyle={"light-content"}></StatusBar>
			<HeaderContainer
				style={{ position: "absolute", zIndex: 100, top: insets.top }}
				title="Profile"
				canGoBack
				whiteContent
			></HeaderContainer>
			<ScrollView>
				<ImageBackground
					source={{
						uri: "https://images.unsplash.com/photo-1718762538704-9698cd001106?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					}}
					resizeMode="cover"
					style={{
						width: "100%",
						height: 260,
					}}
				></ImageBackground>
				<View style={{alignItems: 'center', marginTop: -80}}>
          {user?.photoUrl ? (
            <Image
              source={{
                uri: user?.photoUrl,
              }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 1000,
              }}
            ></Image>
          ) : (
            <View
              style={[
                {
                  width: 120,
                  height: 120,
                  borderRadius: 1000,
                  backgroundColor: colors.inputBackground,
                },
                {
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <AntDesign name="user" size={50} color="#8A8A8A" />
            </View>
          )}
        </View>
			</ScrollView>
		</ThemedView>
	);
};

export default Profile;
