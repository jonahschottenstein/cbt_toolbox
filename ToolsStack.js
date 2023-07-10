import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { Breathing } from "./Breathing";

const Stack = createStackNavigator();

export const ToolsStack = ({ tools }) => {
	const getComponent = (tool) => {
		const component =
			tool.type === "breathing" ? (
				Breathing
			) : tool.type === "instruction" ? (
				<Text>Instruction</Text>
			) : (
				<Text>Video</Text>
			);

		return component;
	};

	const breathingOptions = tools[0] ? tools[0]["value"] : null;
	console.log("BREATHING OPTIONS", breathingOptions);
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
					// component={Breathing}
					component={getComponent(tool)}
					initialParams={{ breathingData: breathingOptions }}
				/>
			))}
		</Stack.Navigator>
	) : (
		<Text>No tools</Text>
	);
};
