import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeScreen, SettingsScreen } from "./screens";

import { THEME } from "./theme";
import { ThemeProvider } from "theme-ui-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { registerRootComponent } from "expo";

import {
	NWS_ALERT_TYPES,
	NWS_STORAGE_KEY,
	NWS_DEFAULT_SETTINGS,
} from "./constants";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
	React.useEffect(() => {
		AsyncStorage.getItem(NWS_STORAGE_KEY).then((value) => {
			console.log(value);
		});
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={THEME}>
				<NavigationContainer>
					<Tab.Navigator>
						<Tab.Screen name='Home' component={HomeScreen} />
						<Tab.Screen name='Settings' component={SettingsScreen} />
					</Tab.Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</QueryClientProvider>
	);
}

registerRootComponent(App);
