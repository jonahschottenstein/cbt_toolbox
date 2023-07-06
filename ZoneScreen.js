import { View } from "react-native";

export const ZoneScreen = ({ zone }) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>{zone}</Text>
		</View>
	);
};
