import { View } from "react-native";
import { ZoneButtons } from "../components/ZoneButtons";
import { useState } from "react";
import { useTools } from "../context/ToolsContext";
import { ToolsStack } from "../navigation/ToolsStack";
import { CurrentZoneProvider } from "../context/CurrentZoneContext";

export const HomeScreen = () => {
	return (
		<CurrentZoneProvider>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ToolsStack />
			</View>
		</CurrentZoneProvider>
	);
};
