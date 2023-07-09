import { Button, Text, View } from "react-native";
import { List } from "react-native-paper";
import { BreathingInputsGroup } from "./BreathingInputsGroup";
import { ToolSelector } from "./ToolSelector";
import { useState } from "react";
import { InstructionInputsGroup } from "./InstructionInputsGroup";

export const ToolAccordion = ({ accordionProps, itemProps }) => {
	const [value, setValue] = useState("");

	return (
		<List.Accordion title={accordionProps.title} id={accordionProps.id}>
			<List.Item
				style={{ width: "100%" }}
				titleStyle={{ width: "100%" }}
				title={
					<ToolSelector
						zone={itemProps.zone}
						toolIndex={0}
						value={value}
						setValue={setValue}
					/>
				}
			/>
			<List.Item
				title={() =>
					itemProps.toolType === "breathing" ? (
						<BreathingInputsGroup />
					) : itemProps.toolType === "instruction" ? (
						<InstructionInputsGroup />
					) : (
						<Text>Select tool</Text>
					)
				}
			/>
			<List.Item title={() => <Button title="Delete" />} />
		</List.Accordion>
	);
};
