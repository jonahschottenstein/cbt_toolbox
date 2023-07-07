import { Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";

export const ToolSelector = ({ value }) => {
	return (
		<View>
			<Text>Select tool:</Text>
			<SegmentedButtons
				value={value}
				buttons={[
					{ value: "breathing", label: "Breathing" },
					{ value: "instruction", label: "Instruction" },
					{ value: "video", label: "Video" },
				]}
			/>
		</View>
	);
};
