import { Image, Text, View } from "react-native";

export const Instruction = ({
	route: {
		params: { toolValue },
	},
}) => {
	return (
		<View
			style={{
				borderWidth: 1,
				flex: 1,
				alignItems: "center",
			}}>
			{toolValue.image && (
				<Image
					style={{ width: 300, height: 300, margin: 20 }}
					source={{ uri: toolValue.image }}
				/>
			)}
			<Text
				style={{ borderWidth: 1, fontSize: 20, padding: 10, width: "100%" }}>
				{toolValue.message}
			</Text>
		</View>
	);
};
