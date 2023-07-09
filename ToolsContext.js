import { createContext, useContext, useReducer } from "react";

export const ToolsContext = createContext(null);
export const ToolsDispatchContext = createContext(null);

export function ToolsProvider({ children }) {
	const [tools, dispatch] = useReducer(toolsReducer, initialTools);

	return (
		<ToolsContext.Provider value={tools}>
			<ToolsDispatchContext.Provider value={dispatch}>
				{children}
			</ToolsDispatchContext.Provider>
		</ToolsContext.Provider>
	);
}

export function useTools() {
	return useContext(ToolsContext);
}

export function useToolsDispatch() {
	return useContext(ToolsDispatchContext);
}

function toolsReducer(tools, action) {
	switch (action.type) {
		case "added": {
			const zoneTools = [...tools[action.zone]];
			const indexedZoneTools = zoneTools.map((obj, newIndex) => ({
				...obj,
				index: newIndex,
			}));
			const updatedZoneTools = [
				...indexedZoneTools,
				{ index: indexedZoneTools.length, type: "", value: null },
			];

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		case "changed_tool_type": {
			const zoneTools = [...tools[action.zone]];
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					return { ...tool, type: action.nextToolType };
				} else {
					return tool;
				}
			});

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

const initialTools = {
	blue: [{ index: 0, type: "", value: null }],
	yellow: [],
	red: [],
};
