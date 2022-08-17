import AsyncStorage from "@react-native-async-storage/async-storage";
import { NWS_ASYNC_STORAGE_KEY } from "../constants";

export const getAsyncStorageKeys = async () => {
	return await AsyncStorage.getAllKeys();
};

export const getAsyncStorageObject = async (key) => {
	try {
		const jsonStorage = await AsyncStorage.getItem(key);
		return jsonStorage != null ? JSON.parse(jsonStorage) : null;
	} catch (error) {
		console.log("ERROR CHECKING ASYNC STORAGE: ", error);
	}
};

export const setAsyncStorageObject = async (key, settingsObjectAsJSON) => {
	try {
		await AsyncStorage.setItem(key, settingsObjectAsJSON);
	} catch (error) {
		console.log("ERROR SETTING ASYNC STORAGE OBJECT: ", error);
	}
};

export const updateAsyncStorageObject = async (valueObject) => {
	try {
		await AsyncStorage.mergeItem(
			NWS_ASYNC_STORAGE_KEY,
			JSON.stringify(valueObject)
		);
	} catch (error) {
		console.log("ERROR UPDATING ASYNC STORAGE: ");
	}
};
