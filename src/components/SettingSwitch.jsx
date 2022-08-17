import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	getAsyncStorageObject,
	setAsyncStorageObject,
} from "../services/async-storage";
import { NWS_ALERT_TYPES, NWS_ASYNC_STORAGE_KEY } from "../constants";

export const SettingSwitch = ({ setting, value }) => {
	// QUESTION: why is reg setting prop = {"setting": <setting value>}
	const [isOn, setIsOn] = React.useState(!!value);

	const handleSwitchToggle = async () => {
		setIsOn((prevState) => !prevState);
		currentSettings = await getAsyncStorageObject(NWS_ASYNC_STORAGE_KEY);
		console.log("SETTINGS KEY: ", NWS_ASYNC_STORAGE_KEY);

		try {
			let settings = await getAsyncStorageObject(NWS_ASYNC_STORAGE_KEY);

			const updatedSettingsAsJSON = JSON.stringify({
				...settings,
				[setting]: !settings[setting],
			});

			await setAsyncStorageObject(NWS_ASYNC_STORAGE_KEY, updatedSettingsAsJSON);

			const updatedSettingsInAsyncStorage = await getAsyncStorageObject(
				NWS_ASYNC_STORAGE_KEY
			);

			console.log("SETTING UPDATED: ", updatedSettingsInAsyncStorage);
		} catch (error) {
			console.log("SET STORAGE VALUE ERROR: ", error);
		}
	};

	return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
