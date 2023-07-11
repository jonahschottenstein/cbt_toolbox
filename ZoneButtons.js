import { View } from "react-native";
import { ZoneButton } from "./ZoneButton";

export const ZoneButtons = ({ navigation }) => {
	return (
		<View style={{ alignItems: "center" }}>
			<View>
				<ZoneButton navigation={navigation} zone={"red"} />
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					justifyContent: "space-between",
				}}>
				<ZoneButton navigation={navigation} zone={"yellow"} />
				<ZoneButton navigation={navigation} zone={"blue"} />
			</View>
		</View>
	);
};
