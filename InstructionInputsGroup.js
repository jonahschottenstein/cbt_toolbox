import * as ImagePicker from "expo-image-picker";
import { Button, TextInput } from "react-native-paper";
import { Image, View } from "react-native";
import { useTools, useToolsDispatch } from "./ToolsContext";

export const InstructionInputsGroup = ({ zone, toolIndex }) => {
	const tools = useTools();
	const zoneTools = tools[zone];
	const dispatch = useToolsDispatch();

	const image = zoneTools[toolIndex]["value"]["image"];

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.canceled) {
			dispatch({
				type: "changed_instruction_value",
				zone: zone,
				toolIndex: toolIndex,
				label: "image",
				nextValue: result.assets[0].uri,
			});
		}
	};

	return (
		<View
			style={{ alignItems: "center", borderWidth: 1, padding: 10, rowGap: 10 }}>
			<TextInput
				style={{ width: 300 }}
				mode="outlined"
				label="Message"
				value={zoneTools[toolIndex]["value"]["message"]}
				onChangeText={(text) =>
					dispatch({
						type: "changed_instruction_value",
						zone: zone,
						toolIndex: toolIndex,
						label: "message",
						nextValue: text,
					})
				}
			/>
			{image && (
				<Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
			)}
			<Button
				style={{ width: 200 }}
				icon="camera"
				mode="outlined"
				onPress={pickImage}>
				{image ? "Replace image" : "Add image"}
			</Button>
		</View>
	);
};
