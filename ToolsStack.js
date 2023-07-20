import { createStackNavigator } from "@react-navigation/stack";
import { Breathing } from "./Breathing";
import { Instruction } from "./Instruction";
import { capitalize, getSameTypeTools, getToolTypeIndex } from "./utilities";
import { useTools } from "./ToolsContext";
import { useCurrentZone } from "./CurrentZoneContext";
import { ZoneButtons } from "./ZoneButtons";
import { VideoComp } from "./Video";

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
				VideoComp;
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
			<Stack.Screen name="ZoneButtons" component={ZoneButtons} />
			{zoneTools &&
				zoneTools.length > 0 &&
				zoneTools[0]["type"] !== "" &&
				zoneTools
					.filter((tool) => tool.type)
					.map((tool) => {
						return (
							<Stack.Screen
								key={tool.index}
								name={
									capitalize(tool.type) +
									"-" +
									getToolTypeIndex(tool, getSameTypeTools(tool, zoneTools))
								}
								component={getComponent(tool)}
								initialParams={{
									tool: tool,
									nextTool: getNextTool(tool.index, zoneTools),
									tools: zoneTools,
								}}
							/>
						);
					})}
		</Stack.Navigator>
	);
};
