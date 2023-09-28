import { Video } from "expo-av";
import { View } from "react-native";
import { NextToolButton } from "./NextToolButton";

export const VideoComp = ({
	route: {
		params: { tool, nextTool, tools },
	},
	navigation,
}) => {
	const toolValue = tool.value;

	return (
		<View
			style={{
				borderWidth: 1,
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}>
			{toolValue.video && (
				<>
					<Video
						style={{ width: 300, height: 300, margin: 20 }}
						source={{ uri: toolValue.video }}
						useNativeControls
					/>
				</>
			)}
			{nextTool && (
				<NextToolButton
					navigation={navigation}
					tool={tool}
					nextTool={nextTool}
					tools={tools}
				/>
			)}
		</View>
	);
};
