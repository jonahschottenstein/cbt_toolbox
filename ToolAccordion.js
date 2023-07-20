import { Text } from "react-native";
import { List, Button, Divider } from "react-native-paper";
import { BreathingInputsGroup } from "./BreathingInputsGroup";
import { ToolSelector } from "./ToolSelector";
import { InstructionInputsGroup } from "./InstructionInputsGroup";
import { useToolsDispatch } from "./ToolsContext";
import { VideoInputsGroup } from "./VideoInputsGroup";

export const ToolAccordion = ({ accordionProps, itemProps }) => {
	const dispatch = useToolsDispatch();

	return (
		<>
			<List.Accordion title={accordionProps.title} id={accordionProps.id}>
				<List.Item
					style={{ width: "100%" }}
					titleStyle={{ width: "100%" }}
					title={
						<ToolSelector
							zone={itemProps.zone}
							toolIndex={itemProps.toolIndex}
						/>
					}
				/>
				<List.Item
					title={() =>
						itemProps.toolType === "breathing" ? (
							<BreathingInputsGroup
								zone={itemProps.zone}
								toolIndex={itemProps.toolIndex}
							/>
						) : itemProps.toolType === "instruction" ? (
							<InstructionInputsGroup
								zone={itemProps.zone}
								toolIndex={itemProps.toolIndex}
							/>
						) : itemProps.toolType === "video" ? (
							<VideoInputsGroup
								zone={itemProps.zone}
								toolIndex={itemProps.toolIndex}
							/>
						) : (
							<Text>Select tool</Text>
						)
					}
				/>
				<List.Item
					title={() => (
						<Button
							mode="contained-tonal"
							icon="delete"
							onPress={() =>
								dispatch({
									type: "deleted",
									incompleteTools: { [itemProps.zone]: [itemProps.toolIndex] },
								})
							}>
							Delete
						</Button>
					)}
				/>
			</List.Accordion>
			<Divider />
		</>
	);
};
