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
