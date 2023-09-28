import "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabs } from "../navigation/BottomTabs";
import { ToolsProvider } from "../context/ToolsContext";

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<ToolsProvider>
					<BottomTabs />
				</ToolsProvider>
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
