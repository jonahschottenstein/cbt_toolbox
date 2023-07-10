import { BreathingInput } from "./BreathingInput";
import { useTools } from "./ToolsContext";

export const BreathingInputsGroup = ({ zone, toolIndex }) => {
	const tools = useTools();
	const zoneTools = tools[zone];
	const labels = ["Inhale", "Hold", "Exhale", "Rest", "Sets"];

	return labels.map((label, index) => (
		<BreathingInput
			key={label}
			label={label}
			value={zoneTools[toolIndex]["value"][label.toLowerCase()]}
			zone={zone}
			toolIndex={toolIndex}
		/>
	));
};
