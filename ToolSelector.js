import { View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { useTools, useToolsDispatch } from "./ToolsContext";

export const ToolSelector = ({ zone, toolIndex }) => {
	const tools = useTools();
	const zoneTools = tools[zone];
	const dispatch = useToolsDispatch();

	return (
		<View style={{ width: "100%" }}>
			<SegmentedButtons
				style={{ width: "100%" }}
				value={zoneTools[toolIndex]["type"]}
				onValueChange={(e) =>
					dispatch({
						type: "changed_tool_type",
						zone: zone,
						toolIndex: toolIndex,
						nextToolType: e,
					})
				}
				buttons={[
					{
						value: "breathing",
						label: "Breathing",
					},
					{
						value: "instruction",
						label: "Instruction",
					},
					{
						value: "video",
						label: "Video",
					},
				]}
			/>
		</View>
	);
};
