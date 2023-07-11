import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { Breathing } from "./Breathing";
import { Instruction } from "./Instruction";
import { getSameTypeTools, getToolTypeIndex } from "./utilities";

const Stack = createStackNavigator();

export const ToolsStack = ({ tools }) => {
	// Need a way to get back to ZoneButtons Screen
	// Not sure if I need to make it the first Screen in the Stack or if I should do it another way

	const getComponent = (tool) => {
		const component =
			tool.type === "breathing" ? (
				Breathing
			) : tool.type === "instruction" ? (
				Instruction
			) : (
				<Text>Video</Text>
			);

		return component;
	};

	const getNextTool = (currentToolIndex, tools) =>
		tools.find((tool) => tool.index > currentToolIndex && tool.type);

	return tools.length > 0 && tools[0]["type"] !== "" ? (
		<Stack.Navigator>
			{tools.map((tool) => (
				<Stack.Screen
					key={tool.index}
					name={
						tool.type.slice(0, 1).toUpperCase() +
						tool.type.slice(1) +
						"-" +
						getToolTypeIndex(tool, getSameTypeTools(tool, tools))
					}
					component={getComponent(tool)}
					initialParams={{
						tool: tool,
						nextTool: getNextTool(tool.index, tools),
						tools: tools,
					}}
				/>
			))}
		</Stack.Navigator>
	) : (
		<Text>No tools</Text>
	);
};
