import { useCurrentZoneSetter } from "./CurrentZoneContext";
import { useTools } from "./ToolsContext";
import { Button } from "react-native-paper";
import { capitalize } from "./utilities";
import { Alert } from "react-native";

export const ZoneButton = ({ navigation, zone }) => {
	const tools = useTools();
	const onPress = useCurrentZoneSetter();

	return (
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
			buttonColor={zone}
			onPressIn={() => onPress(zone)}
			onPressOut={() => {
				const hasTools = tools[zone].filter((tool) => tool.type).length > 0;

				if (hasTools) {
					tools[zone].filter((tool) => tool.type).length > 0 &&
						navigation.navigate(
							capitalize(tools[zone][0]["type"]) + "-" + tools[zone][0]["index"]
						);
				} else {
					Alert.alert(
						`Navigate to Toolbox Editor to add ${capitalize(zone)} Zone tools`
					);
				}
			}}
		/>
	);
};
