import { Text, View } from "react-native";
import { ToolAccordionsGroup } from "./ToolAccordionsGroup";
import { useTools } from "./ToolsContext";
import { ToolAccordion } from "./ToolAccordion";
import { AddTool } from "./AddTool";

export const ZoneScreen = ({ route: { params } }) => {
	const zone = params.zone;
	const tools = useTools();
	const zoneTools = tools[zone];

	return (
		<View style={{ flex: 1 }}>
			<ToolAccordionsGroup>
				{zoneTools.map((tool, index) => (
					<ToolAccordion
						key={index}
						// Remember to change key value
						accordionProps={{
							title: tool.type || "Select tool",
							id: tool.index,
						}}
						itemProps={{ zone, toolType: tool.type, toolIndex: tool.index }}
					/>
				))}
			</ToolAccordionsGroup>
			<AddTool zone={zone} />
		</View>
	);
};
