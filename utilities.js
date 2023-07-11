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
