import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
	try {
		const jsonValue = JSON.stringify(value);
		await AsyncStorage.setItem("toolsData", jsonValue);
	} catch (e) {
		// saving error
		console.log("storeData error", e);
	}
};
