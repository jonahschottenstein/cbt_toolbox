import { View } from "react-native";
import { Button } from "react-native-paper";

export const ZoneButtons = ({ onPress }) => {
	return (
		<View style={{ alignItems: "center" }}>
			<View>
				<Button
					style={{
						borderColor: "black",
						borderRadius: "50%",
						borderWidth: 1,
						height: 100,
						width: 100,
					}}
					contentStyle={{
						width: "100%",
						height: "100%",
					}}
					mode="elevated"
					buttonColor="red"
					zone={"red"}
					onPress={() => onPress("red")}></Button>
			</View>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					justifyContent: "space-between",
				}}>
				<Button
					style={{
						borderColor: "black",
						borderRadius: "50%",
						borderWidth: 1,
						height: 100,
						width: 100,
					}}
					contentStyle={{
						width: "100%",
						height: "100%",
					}}
					mode="elevated"
					buttonColor="yellow"
					onPress={() => onPress("yellow")}
				/>
				<Button
					style={{
						borderColor: "black",
						borderRadius: "50%",
						borderWidth: 1,
						height: 100,
						width: 100,
					}}
					contentStyle={{
						width: "100%",
						height: "100%",
					}}
					mode="elevated"
					buttonColor="blue"
					onPress={() => onPress("blue")}
				/>
			</View>
		</View>
	);
};
