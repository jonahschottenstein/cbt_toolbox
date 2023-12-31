import { Text, View } from "react-native";
import InputSpinner from "react-native-input-spinner";
import { useToolsDispatch } from "../context/ToolsContext";

export const BreathingInput = ({ label, value, zone, toolIndex }) => {
	const dispatch = useToolsDispatch();

	return (
		<View
			style={{
				alignItems: "center",
				flexDirection: "row",
				justifyContent: "space-between",
				margin: 10,
			}}>
			<Text style={{ fontSize: 20 }}>{label}</Text>
			<InputSpinner
				max={10}
				min={1}
				step={1}
				colorMax={"#f04048"}
				colorMin={"#40c5f4"}
				skin="modern"
				value={value}
				onChange={(value) =>
					dispatch({
						type: "changed_breathing_value",
						zone: zone,
						toolIndex: toolIndex,
						label: label,
						nextValue: label === "Sets" ? value : value + 0.99,
					})
				}
			/>
		</View>
	);
};
