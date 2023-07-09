import * as ImagePicker from "expo-image-picker";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { Image, View } from "react-native";

export const InstructionInputsGroup = () => {
	const [image, setImage] = useState(null);
	const [text, setText] = useState("");

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.canceled) {
			setImage(result.assets[0].uri);
		}
	};

	return (
		<View
			style={{ alignItems: "center", borderWidth: 1, padding: 10, rowGap: 10 }}>
			<TextInput
				style={{ width: 300 }}
				mode="outlined"
				label="Message"
				value={text}
				onChangeText={(text) => setText(text)}
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
