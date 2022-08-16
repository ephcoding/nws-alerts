import React from "react";
import { Switch } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAsyncStorageObject } from "../services/async-storage";
import { NWS_ALERT_TYPES, NWS_SETTINGS } from "../constants";

export const SettingSwitch = ({ settingName }) => {
  // QUESTION: why is reg settingName prop = {"settingName": <settingName value>}
  const [isOn, setIsOn] = React.useState(false);

  const handleSwitchToggle = async () => {
    setIsOn((prevState) => !prevState);
    let asyncStorageKeys = await getAsyncStorageObject(NWS_SETTINGS);

    console.log("******************************");
    console.log("SETTING NAME: ", settingName);
    console.log("ASYNC STORAGE KEYS: ", asyncStorageKeys);
    console.log("******************************");

    try {
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
      console.log("***** ERROR *****\n", error);
    }
  };

  return <Switch value={isOn} onValueChange={handleSwitchToggle} />;
};
