import { createContext, useContext, useEffect, useReducer } from "react";
import { getData, storeData } from "../utils/storage";

export const ToolsContext = createContext(null);
export const ToolsDispatchContext = createContext(null);

export function ToolsProvider({ children }) {
	const [tools, dispatch] = useReducer(toolsReducer, initialTools);

	useEffect(() => {
		getData(dispatch);
	}, []);

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
	const zoneTools = action?.zone && [...tools[action.zone]];

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
			const updatedTools = { ...tools, [action.zone]: updatedZoneTools };
			storeData(updatedTools);

			console.log("ADDED", updatedZoneTools);
			return updatedTools;
		}
		case "changed_tool_type": {
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					const toolValue =
						action.nextToolType === "breathing"
							? { inhale: 5.99, hold: 5.99, exhale: 5.99, rest: 5.99, sets: 5 }
							: action.nextToolType === "instruction"
							? { message: "", image: null }
							: action.nextToolType === "video"
							? { video: null }
							: null;

					return { ...tool, type: action.nextToolType, value: toolValue };
				} else {
					return tool;
				}
			});
			const updatedTools = { ...tools, [action.zone]: updatedZoneTools };
			storeData(updatedTools);

			console.log("CHANGED_TOOL_TYPE", updatedZoneTools);
			return updatedTools;
		}
		case "deleted": {
			const updatedTools = { ...tools };
			const incompleteTools = action.incompleteTools;

			for (const [zone, zoneTools] of Object.entries(tools)) {
				const incompleteZoneIndexes = incompleteTools?.[zone];

				if (!incompleteZoneIndexes || incompleteZoneIndexes.length < 1) {
					continue;
				} else {
					const filteredZoneTools = zoneTools.filter(
						(zoneTool) => !incompleteZoneIndexes.includes(zoneTool.index)
					);
					const updatedZoneTools = filteredZoneTools.map(
						(zoneTool, newIndex) => ({
							...zoneTool,
							index: newIndex,
						})
					);

					updatedTools[zone] = updatedZoneTools;
				}
			}
			storeData(updatedTools);

			console.log("DELETED UPDATED TOOLS", updatedTools);
			return updatedTools;
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
			const updatedTools = { ...tools, [action.zone]: updatedZoneTools };
			storeData(updatedTools);

			console.log("CHANGED BREATHING VALUE", updatedZoneTools);
			return updatedTools;
		}
		case "changed_instruction_value": {
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					return {
						...tool,
						value: {
							...tool.value,
							[action.label.toLowerCase()]: action.nextValue,
						},
					};
				} else {
					return tool;
				}
			});
			const updatedTools = { ...tools, [action.zone]: updatedZoneTools };
			storeData(updatedTools);

			console.log("CHANGED_INSTRUCTION_VALUE", updatedZoneTools);
			return updatedTools;
		}
		case "changed_video_value": {
			const updatedZoneTools = zoneTools.map((tool) => {
				if (tool.index === action.toolIndex) {
					return {
						...tool,
						value: {
							...tool.value,
							[action.label.toLowerCase()]: action.nextValue,
						},
					};
				} else {
					return tool;
				}
			});
			const updatedTools = { ...tools, [action.zone]: updatedZoneTools };
			storeData(updatedTools);

			console.log("CHANGED_VIDEO_VALUE", updatedZoneTools);
			return updatedTools;
		}
		case "retrieved": {
			const initialTools = {
				blue: [],
				yellow: [],
				red: [],
			};
			const toolsData = action.toolsData;

			console.log("RETRIEVED", toolsData);
			return toolsData ? { ...toolsData } : initialTools;
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
