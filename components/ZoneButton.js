import { useCurrentZoneSetter } from "../context/CurrentZoneContext";
import { useTools } from "../context/ToolsContext";
import { Button } from "react-native-paper";
import { capitalize, getToolName } from "../utils/utilities";
import { Alert } from "react-native";

export const ZoneButton = ({ navigation, zone }) => {
	const tools = useTools();
	const onPress = useCurrentZoneSetter();
	const hasTools = tools[zone].filter((tool) => tool.type).length > 0;

	return (
		<Button
			style={{
				borderColor: "black",
				borderRadius: "100%",
				borderWidth: 1,
				height: 110,
				width: 110,
			}}
			contentStyle={{
				width: "100%",
				height: "100%",
			}}
			mode="elevated"
			buttonColor={
				zone === "blue" ? "#4185c2" : zone === "yellow" ? "#efcd17" : "#df2728"
			}
			labelStyle={{
				color: "black",
				fontSize: 20,
				fontWeight: 600,
				marginHorizontal: 0,
				marginVertical: 0,
			}}
			onPressIn={() => hasTools && onPress(zone)}
			onPressOut={() => {
				if (hasTools) {
					tools[zone].filter((tool) => tool.type).length > 0 &&
						navigation.navigate(getToolName(zone, tools[zone][0]));
				} else {
					Alert.alert(
						`Navigate to Toolbox to add ${capitalize(zone)} Zone tools`
					);
				}
			}}>
			{capitalize(zone)}
		</Button>
	);
};
