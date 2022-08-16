import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ThemeProvider } from "theme-ui-native";
import { registerRootComponent } from "expo";
import { THEME } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "./screens";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NWS_ALERT_TYPES, NWS_SETTINGS } from "./constants";
import {
  getAsyncStorageKeys,
  getAsyncStorageObject,
} from "./services/async-storage";

const Tab = createBottomTabNavigator();

export default function App() {
  React.useEffect(() => {
    const getAsyncStorageValues = async () => {
      let asyncStorageKeys = await getAsyncStorageKeys();
      console.log(asyncStorageKeys);

      if (asyncStorageKeys.length === 0) {
        let settings = {};

        NWS_ALERT_TYPES.forEach((alertType) => {
          settings[alertType] = false;
        });

        await AsyncStorage.setItem(NWS_SETTINGS, JSON.stringify(settings));

        const updatedAsyncStorageKeys = await getAsyncStorageKeys();
        const asyncStorage = await getAsyncStorageObject(NWS_SETTINGS);

        console.log("***************************");
        console.log("NWS_SETTINGS KEY: ", NWS_SETTINGS);
        console.log("ASYNC STORAGE KEYS: ", updatedAsyncStorageKeys);
        console.log("ASYNC STORAGE: ", asyncStorage);
        console.log("***************************");
      } else {
        const asyncStorage = await getAsyncStorageObject(NWS_SETTINGS);
        console.log("ASYNC STORAGE: ", asyncStorage);
      }
    };

    getAsyncStorageValues();
  }, []);

  return (
    <ThemeProvider theme={THEME}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

registerRootComponent(App);
