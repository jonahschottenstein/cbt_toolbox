import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { Breathing } from "./Breathing";
import { Instruction } from "./Instruction";

const Stack = createStackNavigator();

export const ToolsStack = ({ tools }) => {
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

	const getToolValue = (tool) => tool?.value || null;
	// if no tools, AddTool

	return tools.length > 0 && tools[0]["type"] !== "" ? (
		<Stack.Navigator
			screenOptions={{
				headerStyle: { borderWidth: 1, flex: 1 },
			}}>
			{tools.map((tool) => (
				<Stack.Screen
					key={tool.index}
					name={tool.type}
					component={getComponent(tool)}
					initialParams={{ toolValue: getToolValue(tool) }}
				/>
			))}
		</Stack.Navigator>
	) : (
		<Text>No tools</Text>
	);
};
