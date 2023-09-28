import { View } from "react-native";
import { Button } from "react-native-paper";
import { useToolsDispatch } from "../context/ToolsContext";

export const AddTool = ({ zone, zoneToolsCount }) => {
	const dispatch = useToolsDispatch();

	return (
		<View
			style={{
				// alignItems: "center",
				// alignSelf: "center",
				margin: 10,
			}}>
			<Button
				style={{ borderRadius: 0 }}
				icon="plus-circle"
				mode="contained"
				disabled={zoneToolsCount >= 5 ? true : false}
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
