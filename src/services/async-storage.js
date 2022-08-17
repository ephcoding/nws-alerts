import AsyncStorage from "@react-native-async-storage/async-storage";
// -- NOTE:
// JSON in -->
// <-- JSON out
export const getAsyncStorageKeys = async ({ setValue, setError }) => {
	try {
		const allKeys = await AsyncStorage.getAllKeys();
		setValue(allKeys);
	} catch (error) {
		setError(error);
	}
};

export const getAsyncStorage = async ({ key, setValue, setError }) => {
	try {
		const value = await AsyncStorage.getItem(key);
		setValue(value);
	} catch (error) {
		setError(error);
	}
};

// -- for use with SINGLE STRING VALUES
export const saveToAsyncStorage = async ({ key, value, setError }) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		setError(error);
	}
};

// -- for use with OBJECTS
export const mergeWithAsyncStorage = async ({ key, value, setError }) => {
	try {
		await AsyncStorage.mergeItem(key, value);
	} catch (error) {
		setError(value);
	}
};

export const isInAsyncStorage = async ({ key, setBool, setError }) => {
	try {
		const allKeys = await AsyncStorage.getAllKeys();
		setBool(allKeys.includes(`${key}`));
	} catch (error) {
		setError(error);
	}
};

export const setAsyncStorageDefault = async ({
	key,
	defaultValue,
	setError,
}) => {
	try {
		await AsyncStorage.setItem(key, defaultValue);
	} catch (error) {
		setError(error);
	}
};

export const removeAsyncStorage = async ({ key, setError }) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (error) {
		setError(error);
	}
};
