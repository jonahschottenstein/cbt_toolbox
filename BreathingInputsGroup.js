import { BreathingInput } from "./BreathingInput";

export const BreathingInputsGroup = ({ zone, toolIndex }) => {
	const labels = ["Inhale", "Hold", "Exhale", "Rest", "Sets"];

	return labels.map((label, index) => (
		<BreathingInput
			key={label}
			label={label}
			value={5}
			zone={zone}
			toolIndex={toolIndex}
			onChange={() => console.log("ONCHANGE")}
		/>
	));
};
