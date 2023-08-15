import { View } from "react-native";
import { Button } from "react-native-paper";
import { useToolsDispatch } from "./ToolsContext";

export const AddTool = ({ zone, zoneToolsCount }) => {
	const dispatch = useToolsDispatch();

	return (
		<View
			style={{
				// alignItems: "center",
				// alignSelf: "center",
				margin: 10,
				backgroundColor: "rgba(103, 80, 164, 1)",
			}}>
			<Button
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
