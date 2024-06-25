import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SafeView } from "components/layouts";
import { HeaderContainer } from "components/header";
import { NotificationItem } from "components/items";

const Notification = () => {
	return (
		<SafeView style={{ paddingHorizontal: 0, paddingBottom: 0 }}>
			<HeaderContainer title="Notification" canGoBack></HeaderContainer>
			<ScrollView style={{paddingTop: 10}}>
				{Array(10)
					.fill(null)
					.map((item, index) => (
						<NotificationItem key={index}></NotificationItem>
					))}
			</ScrollView>
		</SafeView>
	);
};

export default Notification;
