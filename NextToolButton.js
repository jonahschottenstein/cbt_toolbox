import { Button } from "react-native-paper";
import {
	capitalize,
	getNavAction,
	getSameTypeTools,
	getToolTypeIndex,
} from "./utilities";

export const NextToolButton = ({ navigation, tool, nextTool, tools }) => {
	return (
		<Button
			style={{ alignSelf: "center", margin: 10 }}
			mode="outlined"
			onPress={() =>
				navigation[getNavAction(tool, nextTool)](
					capitalize(nextTool.type) +
						"-" +
						getToolTypeIndex(nextTool, getSameTypeTools(nextTool, tools))
				)
			}>
			Continue
		</Button>
	);
};
