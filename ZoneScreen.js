import { ScrollView, Text, View } from "react-native";
import { ToolAccordionsGroup } from "./ToolAccordionsGroup";
import { useTools } from "./ToolsContext";
import { ToolAccordion } from "./ToolAccordion";
import { AddTool } from "./AddTool";

export const ZoneScreen = ({ route: { params } }) => {
	const zone = params.zone;
	const tools = useTools();
	const zoneTools = tools[zone];

	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{ flex: 1, justifyContent: "space-between" }}>
			<ToolAccordionsGroup>
				{zoneTools.map((tool, index) => (
					<ToolAccordion
						key={index}
						// Remember to change key value
						accordionProps={{
							title:
								tool.index +
									1 +
									". " +
									tool.type.slice(0, 1).toUpperCase() +
									tool.type.slice(1) || "Select tool",
							id: tool.index,
						}}
						itemProps={{ zone, toolType: tool.type, toolIndex: tool.index }}
					/>
				))}
			</ToolAccordionsGroup>
			<AddTool zone={zone} />
		</ScrollView>
	);
};
