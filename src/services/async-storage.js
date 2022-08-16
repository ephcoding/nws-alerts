import AsyncStorage from "@react-native-async-storage/async-storage";

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

export const setAsyncStorageObject = async ({ key, settingsObject }) => {
  try {
    const jsonSettingsObject = JSON.stringify(settingsObject);
    await AsyncStorage.setItem(key, jsonSettingsObject);
  } catch (error) {
    console.log("ERROR SETTING ASYNC STORAGE OBJECT: ", error);
  }
};
