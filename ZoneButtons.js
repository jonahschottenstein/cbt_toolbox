import { Text, View } from "react-native";
import { ZoneButton } from "./ZoneButton";

/* export const ZoneButtons = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}>
			<Text style={{ fontSize: "24px", fontWeight: "500" }}>
				Which zone are you in?
			</Text>
			<View style={{ alignItems: "center", justifyContent: "center" }}>
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
		</View>
	);
}; */

export const ZoneButtons = ({ navigation }) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
			}}>
			<Text
				style={{
					fontSize: "24px",
					fontWeight: "500",
					textAlign: "center",
					marginVertical: 15,
				}}>
				Which zone are you in?
			</Text>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-evenly",
					marginVertical: 15,
				}}>
				<ZoneButton navigation={navigation} zone={"red"} />
				<ZoneButton navigation={navigation} zone={"yellow"} />
				<ZoneButton navigation={navigation} zone={"blue"} />
			</View>
		</View>
	);
};
