import { Text, View } from "react-native";

export const ZoneScreen = ({ route: { params } }) => {
	console.log(params);
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>{Object.values(params)[0]}</Text>
		</View>
	);
};
