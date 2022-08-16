// /** @jsx jsx */
// import { jsx } from "theme-ui-native";
import { FlatList, SafeAreaView, StatusBar, Text, View } from "react-native";
import { SettingSwitch } from "../components/SettingSwitch";
import { NWS_ALERT_TYPES } from "../constants";

export const SettingsScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <View key={item} style={{ flexDirection: "row", alignItems: "center" }}>
        <Text>{item}</Text>
        <SettingSwitch settingName={item} />
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
