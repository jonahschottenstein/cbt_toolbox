import { Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { useToolsDispatch } from "./ToolsContext";
import { useState } from "react";

export const ToolSelector = ({ zone, toolIndex, value, setValue }) => {
	const dispatch = useToolsDispatch();

	return (
		<View style={{ width: 340 }}>
			<SegmentedButtons
				value={value}
				onValueChange={setValue}
				buttons={[
					{
						value: "breathing",
						label: "Breathing",
						onPress: () =>
							dispatch({
								type: "changed_tool_type",
								zone: zone,
								toolIndex: toolIndex,
								nextToolType: "breathing",
							}),
					},
					{
						value: "instruction",
						label: "Instruction",
						onPress: () =>
							dispatch({
								type: "changed_tool_type",
								zone: zone,
								toolIndex: toolIndex,
								nextToolType: "instruction",
							}),
					},
					{
						value: "video",
						label: "Video",
						onPress: () =>
							dispatch({
								type: "changed_tool_type",
								zone: zone,
								toolIndex: toolIndex,
								nextToolType: "video",
							}),
					},
				]}
			/>
		</View>
	);
};
