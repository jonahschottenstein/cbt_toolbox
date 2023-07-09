import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";

export const BreathingInput = ({ label, value, onChange }) => {
	return (
		<View
			style={{
				alignItems: "center",
				flexDirection: "row",
				justifyContent: "space-between",
				margin: 10,
			}}>
			<Text>{label}</Text>
			<InputSpinner
				max={10}
				min={1}
				step={1}
				colorMax={"#f04048"}
				colorMin={"#40c5f4"}
				skin="modern"
				value={value}
				onChange={onChange}
			/>
		</View>
	);
};
