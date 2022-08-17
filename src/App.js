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
import {
	NWS_ALERT_TYPES,
	NWS_STORAGE_KEY,
	NWS_DEFAULT_SETTINGS,
} from "./constants";
import {
	getAsyncStorageKeys,
	getAsyncStorage,
	setAsyncStorageDefault,
} from "./services/async-storage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
	const [asyncStorage, setAsyncStorage] = React.useState(null);
	const [asyncStorageError, setAsyncStorageError] = React.useState(null);
	const [defaultStorageError, setDefaultStorageError] = React.useState(null);

	React.useEffect(() => {
		const initAsyncStorage = async () => {
			let asyncStorage = await getAsyncStorage(
				NWS_STORAGE_KEY,
				setAsyncStorage,
				setAsyncStorageError
			);

			// if (!asyncStorage) {
			// 	await setAsyncStorageDefault(
			// 		NWS_STORAGE_KEY,
			// 		NWS_DEFAULT_SETTINGS,
			// 		setDefaultStorageError
			// 	);
			// }
		};

		initAsyncStorage();
	}, [asyncStorage]);

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
