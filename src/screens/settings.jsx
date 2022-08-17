import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import {
	FlatList,
	Pressable,
	SafeAreaView,
	StatusBar,
	Text,
	View,
} from "react-native";
import { SettingSwitch } from "../components/SettingSwitch";
import { NWS_DEFAULT_SETTINGS, NWS_STORAGE_KEY } from "../constants";

export const SettingsScreen = () => {
	const defaultStorage = Object.entries({
		["911 Telephone Outage Emergency"]: false,
		["Administrative Message"]: false,
		["Air Quality Alert"]: false,
	});
	const [btnData, setBtnData] = React.useState(defaultStorage);

	const handleResetAll = async () => {
		await AsyncStorage.setItem(NWS_STORAGE_KEY, JSON.stringify(defaultStorage));
	};

	const renderItem = ({ item }) => {
		const [alertType, isEnabled] = item;
		console.log("RENDER ITEM: ", alertType, " | ", isEnabled);

		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text>{alertType}</Text>
				<SettingSwitch setting={alertType} enabled={isEnabled} />
			</View>
		);
	};
	// TODO: create SettingSwitchFlatlist component and type-check w prop-types
	// TODO: add 'Remove Async Storage' button
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ResetBtn onPress={handleResetAll} />
			<FlatList
				data={btnData}
				keyExtractor={([key, value]) => key}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};

function ResetBtn(onPress) {
	return (
		<Pressable
			onPress={onPress}
			style={{
				width: "25%",
				backgroundColor: "royalblue",
				alignItems: "center",
				paddingVertical: 5,
			}}
		>
			<Text style={{ color: "white" }}>Reset All</Text>
		</Pressable>
	);
}
