import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAsyncStorageObj = async (key) => {
	try {
		const value = await AsyncStorage.getItem("@storage_Key");
		if (value !== null) {
			// value previously stored
		}
	} catch (e) {
		// error reading value
	}
};

export const setAsyncStorage = async ({ storageKey, currentKeyValue }) => {
	try {
		const value = await AsyncStorage.getItem("@storage_Key");
		if (value !== null) {
			// value previously stored
		}
	} catch (e) {
		// error reading value
	}
};
