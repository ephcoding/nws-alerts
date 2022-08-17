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
import { NWS_ALERT_TYPES, NWS_ASYNC_STORAGE_KEY } from "./constants";
import {
	getAsyncStorageKeys,
	getAsyncStorageObject,
} from "./services/async-storage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
	React.useEffect(() => {
		// IF "Settings" AsyncStorage object doesn't exist yet
		// THEN create it & set all alert values to [false]
		const getAsyncStorageValues = async () => {
			let asyncStorage = await getAsyncStorageObject(NWS_ASYNC_STORAGE_KEY);

			if (!asyncStorage) {
				let settings = {};

				NWS_ALERT_TYPES.forEach((alertType) => {
					settings[alertType] = false;
				});

				await AsyncStorage.setItem(
					NWS_ASYNC_STORAGE_KEY,
					JSON.stringify(settings)
				);
			} else {
				const asyncStorage = await getAsyncStorageObject(NWS_ASYNC_STORAGE_KEY);
			}
		};

		getAsyncStorageValues();
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
