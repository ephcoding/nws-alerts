// /** @jsx jsx */
// import { jsx } from "theme-ui-native";
import React from "react";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";
import { SettingSwitch } from "../components/SettingSwitch";
import { NWS_ALERT_TYPES, NWS_ASYNC_STORAGE_KEY } from "../constants";
import { getAsyncStorageObject } from "../services/async-storage";

export const SettingsScreen = () => {
	// set all setting values to what's set in AsyncStorage

	const renderItem = ({ item }) => {
		return (
			<View
				key={item}
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Text>{item}</Text>
				<SettingSwitch settingName={item} currentValue={item[1]} />
			</View>
		);
	};

	return (
		<SafeAreaView
			style={{ flex: 1, marginTop: StatusBar.currentHeight || 0, padding: 2 }}
		>
			<FlatList data={NWS_ALERT_TYPES} renderItem={renderItem} />
		</SafeAreaView>
	);
};
