import { View } from "react-native";
import { ZoneButtons } from "./ZoneButtons";
import { useState } from "react";
import { useTools } from "./ToolsContext";
import { ToolsStack } from "./ToolsStack";
import { CurrentZoneProvider } from "./CurrentZoneContext";

export const HomeScreen = () => {
	return (
		<CurrentZoneProvider>
			<View style={{ flex: 1, justifyContent: "center" }}>
				<ToolsStack />
			</View>
		</CurrentZoneProvider>
	);
};
