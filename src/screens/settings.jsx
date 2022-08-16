/** @jsx jsx */
import { jsx } from "theme-ui-native";
import { Text, View } from "react-native";
import { SettingSwitch } from "../components/SettingSwitch";
import { NWS_ALERT_TYPES } from "../constants";
import AsyncStorage as RNAS from "@react-native-async-storage/async-storage";



export const SettingsScreen = () => {
  const Switch = (settingName) => {
    <View>
      <SettingSwitch settingName={} value={}/>
      <Text>{settingName}</Text>
    </View>
  }
  
	return (
		<View>
			{NWS_ALERT_TYPES.map(alertName => <Switch />)}ex
		</View>
	);
};

const Setting
