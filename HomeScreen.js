import { View } from "react-native";
import { ZoneButtons } from "./ZoneButtons";
import { useState } from "react";
import { useTools } from "./ToolsContext";
import { ToolsStack } from "./ToolsStack";

export const HomeScreen = () => {
	const tools = useTools();

	const [currentZone, setCurrentZone] = useState("");

	const handleZonePress = (zone) => {
		setCurrentZone(zone);
	};

	return (
		<View style={{ flex: 1, justifyContent: "center" }}>
			{tools && currentZone ? (
				<ToolsStack tools={tools[currentZone]} />
			) : (
				<ZoneButtons onPress={handleZonePress} />
			)}
		</View>
	);
};
