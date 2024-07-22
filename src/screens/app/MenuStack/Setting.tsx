import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import {
	BottomSheetModal,
	BottomSheetView,
	BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

const Setting = () => {
	// ref
	const bottomSheetModalRef = useRef<BottomSheetModal>(null);

	// variables
	const snapPoints = useMemo(() => ["25%", "50%"], []);

	// callbacks
	const handlePresentModalPress = useCallback(() => {
		bottomSheetModalRef.current?.present();
	}, []);
	const handleSheetChanges = useCallback((index: number) => {
		console.log("handleSheetChanges", index);
	}, []);

	// renders
	return (
		<BottomSheetModalProvider>
			<View
				style={{
					flex: 1,
					padding: 24,
					justifyContent: "center",
					backgroundColor: "gray",
				}}
			>
				<Button
					onPress={handlePresentModalPress}
					title="Present Modal"
					color="black"
				/>
				<BottomSheetModal
					ref={bottomSheetModalRef}
					index={1}
					// snapPoints={snapPoints}
					snapPoints={[200, 500]}
					onChange={handleSheetChanges}
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
			</View>
		</BottomSheetModalProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		justifyContent: "center",
		backgroundColor: "gray",
	},
	contentContainer: {
		flex: 1,
		alignItems: "center",
	},
});

export default Setting;
