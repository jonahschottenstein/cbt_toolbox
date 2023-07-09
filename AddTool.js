import { View } from "react-native";
import { Button } from "react-native-paper";
import { useToolsDispatch } from "./ToolsContext";

export const AddTool = ({ zone }) => {
	const dispatch = useToolsDispatch();

	return (
		<View style={{ alignItems: "center", margin: 10 }}>
			<Button
				icon="plus-circle"
				mode="contained"
				onPress={() =>
					dispatch({
						type: "added",
						zone: zone,
					})
				}>
				Add Tool
			</Button>
		</View>
	);
};
