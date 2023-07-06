import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { ToolboxEditor } from "./ToolboxEditor";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Toolbox Editor" component={ToolboxEditor} />
		</Tab.Navigator>
	);
};
