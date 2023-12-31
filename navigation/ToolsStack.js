import { createStackNavigator } from "@react-navigation/stack";
// import { Breathing } from "./Breathing";
import { Breathing } from "../components/Breathing";
// import { Instruction } from "./Instruction";
import { Instruction } from "../components/Instruction";
// import {
// 	capitalize,
// 	getSameTypeTools,
// 	getToolName,
// 	getToolTypeIndex,
// } from "./utilities";
import {
	capitalize,
	getSameTypeTools,
	getToolName,
	getToolTypeIndex,
} from "../utils/utilities";
import { useTools } from "../context/ToolsContext";
import { useCurrentZone } from "../context/CurrentZoneContext";
import { ZoneButtons } from "../components/ZoneButtons";
import { VideoComp } from "../components/Video";

const Stack = createStackNavigator();

// if tool doesn't have type (or value), don't include in ToolsStack

export const ToolsStack = () => {
	const tools = useTools();
	const currentZone = useCurrentZone();
	const zoneTools = tools[currentZone];

	const getComponent = (tool) => {
		switch (tool.type) {
			case "breathing": {
				return Breathing;
			}
			case "instruction": {
				return Instruction;
			}
			case "video": {
				return VideoComp;
			}
			default: {
				throw Error("Unknown tool type: " + tool.type);
			}
		}
	};

	const getNextTool = (currentToolIndex, tools) =>
		tools.find((tool) => tool.index > currentToolIndex && tool.type);

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="ZoneButtons"
				component={ZoneButtons}
				options={{ title: "Home" }}
			/>
			{zoneTools &&
				zoneTools.length > 0 &&
				zoneTools[0]["type"] !== "" &&
				zoneTools
					.filter((tool) => tool.type)
					.map((tool) => {
						return (
							<Stack.Screen
								key={tool.index}
								name={getToolName(currentZone, tool)}
								component={getComponent(tool)}
								initialParams={{
									tool: tool,
									nextTool: getNextTool(tool.index, zoneTools),
									tools: zoneTools,
									zone: currentZone,
								}}
							/>
						);
					})}
		</Stack.Navigator>
	);
};
