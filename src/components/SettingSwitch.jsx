import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NWS_ALERT_TYPES, NWS_STORAGE_KEY } from "../constants";

export const SettingSwitch = ({ setting, enabled }) => {
	const [isOn, setIsOn] = React.useState(!!enabled);

	const handleSwitchToggle = async () => {
		setIsOn((prevState) => !prevState);

		await AsyncStorage.mergeItem(
			NWS_STORAGE_KEY,
			JSON.stringify({ [setting]: isOn })
		);

		const value = await AsyncStorage.getItem(NWS_STORAGE_KEY);
		const storage = await JSON.parse(value);
		console.log("NEW VALUE: ", storage[setting]);
	};

	return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
