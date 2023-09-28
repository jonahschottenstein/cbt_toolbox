import { StyleSheet, Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopTabs } from "../navigation/TopTabs";
import { ZoneScreen } from "../screens/ZoneScreen";

const Tab = createMaterialTopTabNavigator();

const tabScreens = [
	{
		name: "blue zone",
		component: ZoneScreen,
		componentProps: { zone: "blue" },
	},
	{
		name: "yellow zone",
		component: ZoneScreen,
		componentProps: { zone: "yellow" },
	},
	{ name: "red zone", component: ZoneScreen, componentProps: { zone: "red" } },
];

export const Toolbox = () => {
	return <TopTabs tabScreens={tabScreens} />;
};
