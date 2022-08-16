import React from "react";
import { Switch } from "react-native";
import RNAS from "@react-native-async-storage/async-storage";

export const SettingSwitch = (settingName) => {
	const [isOn, setIsOn] = React.useState(false);

	const handleSwitchToggle = async () => {
		setIsOn((prevState) => !prevState);
		try {
			// get current settings in AsyncStorage
			const jsonSettings = await RNAS.getItem("@settings");
			const settings = await JSON.parse(jsonSettings);
			// update (merge) current setting in AsyncStorage
			RNAS.setItem("@settings", () => {
				return {
					...settings,
				};
			});
		} catch (error) {
			console.log(error);
		}
	};

	return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
