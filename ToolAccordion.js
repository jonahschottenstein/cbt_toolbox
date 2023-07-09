import { Button, Text, View } from "react-native";
import { List } from "react-native-paper";
import { BreathingInputsGroup } from "./BreathingInputsGroup";
import { ToolSelector } from "./ToolSelector";

export const ToolAccordion = ({ accordionProps, itemProps }) => {
	return (
		<List.Accordion title={accordionProps.title} id={accordionProps.id}>
			<List.Item title={<ToolSelector zone={itemProps.zone} toolIndex={0} />} />
			<List.Item
				title={() =>
					itemProps.toolType === "breathing" ? (
						<BreathingInputsGroup />
					) : (
						<Text>Select tool</Text>
					)
				}
			/>
			<List.Item title={() => <Button title="Delete" />} />
		</List.Accordion>
	);
};
