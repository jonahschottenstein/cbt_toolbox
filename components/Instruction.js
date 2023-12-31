import { Image, Text, View } from "react-native";
import { NextToolButton } from "./NextToolButton";

export const Instruction = ({
	route: {
		params: { tool, nextTool, tools },
	},
	navigation,
}) => {
	const toolValue = tool.value;

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
			}}>
			{toolValue.image && (
				<Image
					style={{ width: 300, height: 300, margin: 20 }}
					source={{ uri: toolValue.image }}
				/>
			)}
			<Text
				style={{
					fontSize: 24,
					fontWeight: 700,
					textAlign: "center",
					width: "100%",
					flex: 1,
				}}>
				{toolValue.message}
			</Text>
			{nextTool && (
				<NextToolButton
					navigation={navigation}
					tool={tool}
					nextTool={nextTool}
					tools={tools}
				/>
			)}
		</View>
	);
};
