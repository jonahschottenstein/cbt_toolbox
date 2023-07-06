import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopTabs } from "./TopTabs";
import { ZoneScreen } from "./ZoneScreen";

const Tab = createMaterialTopTabNavigator();

const tabScreens = [
	{
		name: "blue zone",
		component: ZoneScreen,
		componentProps: { zone: "BLUE" },
	},
	{
		name: "yellow zone",
		component: ZoneScreen,
		componentProps: { zone: "YELLOW" },
	},
	{ name: "red zone", component: ZoneScreen, componentProps: { zone: "RED" } },
];

export const ToolboxEditor = () => {
	return <TopTabs tabScreens={tabScreens} />;
};
