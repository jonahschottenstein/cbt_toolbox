import { ScrollView, Text, View } from "react-native";
// import { ToolAccordionsGroup } from "./ToolAccordionsGroup";
import { ToolAccordionsGroup } from "../components/ToolAccordionsGroup";
// import { useTools } from "./ToolsContext";
import { useTools } from "../context/ToolsContext";
import { ToolAccordion } from "../components/ToolAccordion";
import { AddTool } from "../components/AddTool";
import { capitalize } from "../utils/utilities";

/* export const ZoneScreen = ({ route: { params } }) => {
	const zone = params.zone;
	const tools = useTools();
	const zoneTools = tools[zone];

	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={{
				// flex: 1,
				justifyContent: "space-between",
			}}>
			<ToolAccordionsGroup>
				{zoneTools.map((tool, index) => (
					<ToolAccordion
						key={index}
						// Remember to change key value
						accordionProps={{
							title: tool.type
								? tool.index + 1 + ". " + capitalize(tool.type)
								: tool.index + 1 + ". " + "Select tool",
							id: tool.index,
						}}
						itemProps={{ zone, toolType: tool.type, toolIndex: tool.index }}
					/>
				))}
			</ToolAccordionsGroup>
			<AddTool zone={zone} zoneToolsCount={zoneTools.length} />
		</ScrollView>
	);
}; */

export const ZoneScreen = ({ route: { params } }) => {
	const zone = params.zone;
	const tools = useTools();
	const zoneTools = tools[zone];

	return (
		<View style={{ flex: 1 }}>
			<ScrollView
				style={{ flex: 1 }}
				contentContainerStyle={{
					justifyContent: "space-between",
				}}>
				<ToolAccordionsGroup>
					{zoneTools.map((tool, index) => (
						<ToolAccordion
							key={index}
							// Remember to change key value
							accordionProps={{
								title: tool.type
									? tool.index + 1 + ". " + capitalize(tool.type)
									: tool.index + 1 + ". " + "Select tool",
								id: tool.index,
							}}
							itemProps={{ zone, toolType: tool.type, toolIndex: tool.index }}
						/>
					))}
				</ToolAccordionsGroup>
			</ScrollView>
			<AddTool zone={zone} zoneToolsCount={zoneTools.length} />
		</View>
	);
};
