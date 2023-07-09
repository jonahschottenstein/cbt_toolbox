import { BreathingInput } from "./BreathingInput";

export const BreathingInputsGroup = () => {
	const labels = ["Inhale", "Hold", "Exhale", "Rest", "Sets"];

	return labels.map((label, index) => (
		<BreathingInput
			key={label}
			label={label}
			value={5}
			onChange={() => console.log("ONCHANGE")}
		/>
	));
};
