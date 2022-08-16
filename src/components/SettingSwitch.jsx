import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NWS_ALERT_TYPES } from "../constants";

export const SettingSwitch = (settingName) => {
  const [isOn, setIsOn] = React.useState(false);

  const handleSwitchToggle = async () => {
    setIsOn((prevState) => !prevState);
    let activeAsyncStorageKeys;

    console.log(">> SETTING >>\n", settingName);
    (async () => {
      activeAsyncStorageKeys = await AsyncStorage.getAllKeys();
      console.log(">> ACTIVE ASYNC STORAGE KEYS >>\n", activeAsyncStorageKeys);
    })();

    try {
      console.log("ACTIVE SYNC STORAGE KEYS\n", activeAsyncStorageKeys);
      let currentValue, settingsObj;

      // if (activeAsyncStorageKeys.length > 0) {
      //   const jsonSettings = await AsyncStorage.getItem("@nws-settings");
      //   const settings = await JSON.parse(jsonSettings);
      //   currentValue = settings[settingName];
      //   const updatedSettings = {
      //     ...settings,
      //     [settingName]: !currentValue,
      //   };
      //   AsyncStorage.setItem("@nws-settings", JSON.stringify(updatedSettings));
      // } else {
      //   NWS_ALERT_TYPES.forEach((alertType) => {
      //     settingsObj[alertType] = alertType;
      //   });

      //   settingsObj[settingName] = true;

      //   AsyncStorage.setItem("@nws-settings", JSON.stringify(settingsObj));
      // }

      // update (merge) current setting in AsyncStorage
    } catch (error) {
      console.log("ERROR >>\n", error);
    }
  };

  return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
