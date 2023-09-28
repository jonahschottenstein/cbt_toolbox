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

export const getData = async (dispatch) => {
	try {
		const jsonValue = await AsyncStorage.getItem("toolsData");
		console.log("JSON VALUE", jsonValue);
		const data = jsonValue != null ? JSON.parse(jsonValue) : null;
		console.log("DATA", data);
		dispatch({
			type: "retrieved",
			toolsData: data,
		});
	} catch (e) {
		// error reading value
		console.log("getData error", e);
	}
};
