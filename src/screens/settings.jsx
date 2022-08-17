// /** @jsx jsx */
// import { jsx } from "theme-ui-native";
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
import {
	NWS_DEFAULT_ALERT_SETTINGS,
	NWS_ASYNC_STORAGE_KEY,
} from "../constants";
import { getAsyncStorageObject } from "../services/async-storage";

const handleResetAll = async () => {
	await AsyncStorage.setItem(
		NWS_ASYNC_STORAGE_KEY,
		JSON.stringify(NWS_DEFAULT_ALERT_SETTINGS)
	);
};

export const SettingsScreen = () => {
	const renderItem = ({ item }) => {
		const [alertType, isEnabled] = item;
		console.log("RENDER ITEM: ", alertType, " | ", isEnabled);

		return (
			<View
				key={item[0]}
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
	return (
		<SafeAreaView
			style={{ flex: 1, marginTop: StatusBar.currentHeight || 0, padding: 2 }}
		>
			<ResetBtn />
			<FlatList
				data={Object.entries({
					["911 Telephone Outage Emergency"]: false,
					["Administrative Message"]: false,
					["Air Quality Alert"]: false,
				})}
				keyExtractor={([key, value]) => key}
				renderItem={renderItem}
			/>
		</SafeAreaView>
	);
};

function ResetBtn() {
	return (
		<Pressable
			onPress={handleResetAll}
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
