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
	const zoneTools = [...tools[action.zone]];

	switch (action.type) {
		case "added": {
			const indexedZoneTools = zoneTools.map((obj, newIndex) => ({
				...obj,
				index: newIndex,
			}));
			const updatedZoneTools = [
				...indexedZoneTools,
				{ index: indexedZoneTools.length, type: "", value: null },
			];
			console.log("ADDED", updatedZoneTools);

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		case "changed_tool_type": {
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					const toolValue =
						action.nextToolType === "breathing"
							? { inhale: 5, hold: 5, exhale: 5, rest: 5, sets: 5 }
							: null;
					// Still need to add initial toolValue for instruction & video
					return { ...tool, type: action.nextToolType, value: toolValue };
				} else {
					return tool;
				}
			});
			console.log("CHANGED_TOOL_TYPE", updatedZoneTools);

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		case "deleted": {
			const filteredTools = zoneTools.filter(
				(tool) => tool.index !== action.toolIndex
			);
			const updatedZoneTools = filteredTools.map((tool, newIndex) => ({
				...tool,
				index: newIndex,
			}));
			console.log("DELETED", updatedZoneTools);

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		case "changed_breathing_value": {
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					const newTool = { ...tool };
					const newValue = {
						...newTool.value,
						[action.label.toLowerCase()]: action.nextValue,
					};

					return { ...newTool, value: newValue };
				} else {
					return tool;
				}
			});
			console.log("CHANGED BREATHING VALUE", updatedZoneTools);

			return { ...tools, [action.zone]: updatedZoneTools };
		}
		default: {
			throw Error("Unknown action: " + action.type);
		}
	}
}

const initialTools = {
	blue: [],
	yellow: [],
	red: [],
};
