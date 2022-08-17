import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	getAsyncStorageObject,
	saveToAsyncStorage,
	mergeWithAsyncStorage,
} from "../services/async-storage";
import { NWS_ALERT_TYPES, NWS_STORAGE_KEY } from "../constants";

export const SettingSwitch = ({ setting, enabled }) => {
	// QUESTION: why is reg setting prop = {"setting": <setting value>}
	const [isOn, setIsOn] = React.useState(!!enabled);

	const handleSwitchToggle = async () => {
		setIsOn((prevState) => !prevState);

		await mergeWithAsyncStorage({ [setting]: isOn });

		const asyncStorage = await getAsyncStorageObject(NWS_STORAGE_KEY);
		console.log("NEW VALUE: ", asyncStorage[setting]);
	};

	return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
