import { Button } from "react-native-paper";
import {
	capitalize,
	getNavAction,
	getSameTypeTools,
	getToolName,
	getToolTypeIndex,
} from "../utils/utilities";
import { useCurrentZone } from "../context/CurrentZoneContext";

export const NextToolButton = ({ navigation, tool, nextTool, tools }) => {
	const currentZone = useCurrentZone();

	return (
		<Button
			style={{ alignSelf: "center", margin: 10 }}
			mode="outlined"
			onPress={() =>
				navigation[getNavAction(tool, nextTool)](
					getToolName(currentZone, nextTool)
				)
			}>
			Continue
		</Button>
	);
};
