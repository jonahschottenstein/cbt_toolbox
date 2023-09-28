import * as ImagePicker from "expo-image-picker";
import { Video } from "expo-av";
import { Button } from "react-native-paper";
import { useTools, useToolsDispatch } from "./ToolsContext";
import { View } from "react-native";

export const VideoInputsGroup = ({ zone, toolIndex }) => {
	const tools = useTools();
	const zoneTools = tools[zone];
	const dispatch = useToolsDispatch();

	const video = zoneTools[toolIndex]["value"]["video"];

	const pickVideo = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Videos,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			dispatch({
				type: "changed_video_value",
				zone: zone,
				toolIndex: toolIndex,
				label: "video",
				nextValue: result.assets[0].uri,
			});
		}
	};

	return (
		<View style={{ alignItems: "center" }}>
			{video && (
				<Video
					source={{
						uri: video,
					}}
					style={{ width: 200, height: 200, borderWidth: 1 }}
				/>
			)}
			<Button
				style={{ width: 200 }}
				icon="camera"
				mode="outlined"
				onPress={pickVideo}>
				{video ? "Replace video" : "Add video"}
			</Button>
		</View>
	);
};
