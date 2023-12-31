export const capitalize = (text) =>
	text.slice(0, 1).toUpperCase() + text.slice(1);

export const getSameTypeTools = (currentTool, tools) => {
	const sameTypeTools = tools.filter((tool) => tool.type === currentTool.type);

	return sameTypeTools;
};

export const getToolTypeIndex = (tool, sameTypeTools) => {
	const toolTypeIndex = sameTypeTools.findIndex(
		(sameTypeTool) => sameTypeTool.index === tool.index
	);

	return toolTypeIndex;
};

export const getNavAction = (tool, nextTool) => {
	const isSameComponent = tool.type === nextTool.type;
	const navAction = isSameComponent ? "push" : "navigate";

	return navAction;
};

export const getToolName = (zone, tool) =>
	`${capitalize(zone)} (${tool.index + 1})`;

export const handleNextToolNav = (zone, tool, nextTool, navigation) => {
	navigation[getNavAction(tool, nextTool)](getToolName(zone, nextTool));
};
