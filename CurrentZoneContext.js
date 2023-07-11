import { createContext, useContext, useState } from "react";

export const CurrentZoneContext = createContext(null);
export const CurrentZoneSetterContext = createContext(null);

export function CurrentZoneProvider({ children }) {
	const [currentZone, setCurrentZone] = useState("");

	const handleZonePress = (zone) => {
		setCurrentZone(zone);
	};
	console.log("CURRENT ZONE", currentZone);

	return (
		<CurrentZoneContext.Provider value={currentZone}>
			<CurrentZoneSetterContext.Provider value={handleZonePress}>
				{children}
			</CurrentZoneSetterContext.Provider>
		</CurrentZoneContext.Provider>
	);
}

export function useCurrentZone() {
	return useContext(CurrentZoneContext);
}

export function useCurrentZoneSetter() {
	return useContext(CurrentZoneSetterContext);
}
