import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { HomeScreen, SettingsScreen } from "./screens";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { registerRootComponent } from "expo";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name='Home' component={HomeScreen} />
					<Tab.Screen name='Settings' component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</QueryClientProvider>
	);
}

registerRootComponent(App);
