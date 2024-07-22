import React, { useCallback, useRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "screens/app/Home";
import Calendar from "screens/app/Calendar";
import NewTask from "screens/app/NewTask";
import Analytic from "screens/app/Analytic";
import { primaryColor } from "constants/color";
import {
	AnalyticIcon,
	CalendarIcon,
	HomeIcon,
	MenuIcon,
	NewTaskIcon,
} from "components/icons";
import { useTheme } from "@react-navigation/native";
import MenuStack from "./Stacks/MenuStack";
import { Button, Text, TouchableWithoutFeedback, View } from "react-native";
import { FullView } from "components/layouts";
import BottomSheet, {
	BottomSheetModal,
	BottomSheetModalProvider,
	BottomSheetView,
} from "@gorhom/bottom-sheet";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
	const { colors } = useTheme();
	const bottomSheetRef = useRef<BottomSheet>(null);
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);
	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);
	return (
		<FullView>
			<Tab.Navigator
				screenOptions={({ route }) => {
					return {
						animation: "shift",
						tabBarStyle: { paddingHorizontal: 15, height: 85 },
						tabBarShowLabel: true,
						tabBarLabelStyle: { fontSize: 10 },
						headerShown: false,
						tabBarActiveTintColor: primaryColor,
						tabBarIconStyle: {
							marginBottom: 6,
							transform: [{ scale: 0.8 }],
						},
						tabBarIcon: ({ focused }) => {
							function iconColor(): string {
								if (focused) {
									return colors.primary;
								} else {
									return colors.bottomIconDefault;
								}
							}
							return (
								<>
									{
										<>
											{route.name === "Home" ? (
												<HomeIcon color={iconColor()} />
											) : route.name === "Calendar" ? (
												<CalendarIcon
													color={iconColor()}
												/>
											) : route.name === "NewTask" ? (
												<NewTaskIcon
													onPress={
														handlePresentModalPress
													}
												/>
											) : route.name === "Analytic" ? (
												<AnalyticIcon
													color={iconColor()}
												/>
											) : route.name === "MenuStack" ? (
												<MenuIcon color={iconColor()} />
											) : (
												<></>
											)}
										</>
									}
								</>
							);
						},
					};
				}}
			>
				<Tab.Screen name="Home" component={Home} />
				<Tab.Screen name="Calendar" component={Calendar} />
				<Tab.Screen
					name="NewTask"
					options={{
						tabBarLabel: () => null,
						tabBarIconStyle: { marginBottom: 13 },
					}}
					component={NewTask}
				/>
				<Tab.Screen name="Analytic" component={Analytic} />
				<Tab.Screen name="MenuStack" component={MenuStack} />
			</Tab.Navigator>
			<BottomSheetModalProvider>
				<BottomSheetModal
					ref={bottomSheetModalRef}
					index={1}
					// snapPoints={snapPoints}
					snapPoints={[200, 500]}
					onChange={handleSheetChanges}
					// enableDismissOnClose
					containerStyle={{
						backgroundColor: "rgba(0,0,0,0.1)",
					}}
					// containerComponent={Home}
				>
					<BottomSheetView
						style={{
							flex: 1,
							alignItems: "center",
						}}
					>
						<Text>Awesome 🎉</Text>
					</BottomSheetView>
				</BottomSheetModal>
			</BottomSheetModalProvider>
		</FullView>
	);
};

export default BottomTab;
