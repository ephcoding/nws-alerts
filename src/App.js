import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ThemeProvider } from "theme-ui-native";
import { registerRootComponent } from "expo";
import { THEME } from "./theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, SettingsScreen } from "./screens";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<ThemeProvider theme={THEME}>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen name='Home' component={HomeScreen} />
					<Tab.Screen name='Settings' component={SettingsScreen} />
				</Tab.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	);
}

registerRootComponent(App);
