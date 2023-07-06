import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BottomTabs } from "./BottomTabs";

const App = () => {
	return (
		<NavigationContainer>
			<BottomTabs />
		</NavigationContainer>
	);
};

export default App;
