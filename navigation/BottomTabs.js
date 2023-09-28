import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { Toolbox } from "./Toolbox";
import { useState } from "react";
import { useTools, useToolsDispatch } from "./ToolsContext";
import { Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	const tools = useTools();
	const dispatch = useToolsDispatch();

	const [focusedScreen, setFocusedScreen] = useState("Home");

	const getIncompleteTools = (tools) => {
		const incompleteToolsArr =
			tools &&
			Object.entries(tools)
				.map(([zone, zoneTools]) => {
					const incompleteZoneTools = zoneTools.filter((zoneTool) => {
						const incompleteType = !zoneTool.type;
						const incompleteValue =
							zoneTool.type &&
							Object.values(zoneTool.value).some((val) => !val);

						return incompleteType || incompleteValue;
					});

					const incompleteZoneToolIndexes = incompleteZoneTools.map(
						(zoneTool) => zoneTool.index
					);

					const hasIncompleteZoneTools = incompleteZoneTools?.length > 0;

					if (hasIncompleteZoneTools) {
						return { [zone]: incompleteZoneToolIndexes };
					} else {
						return "complete";
					}
				})
				.filter((result) => result !== "complete");

		const incompleteTools = incompleteToolsArr.reduce((acc, cv) => {
			return Object.assign(acc, cv);
		}, {});

		return incompleteTools;
	};
	console.log("GET INCOMPLETE", getIncompleteTools(tools));

	const getIncompleteToolsMessage = (tools) => {
		const incompleteTools = getIncompleteTools(tools);
		let message = "";
		for (const [zone, indexes] of Object.entries(incompleteTools)) {
			const toolNumbers = indexes.map((index) => `\nTool ${index + 1}`);
			message = message.concat(
				`\nIncomplete ${zone} zone tools:${toolNumbers}`
			);
		}

		return message;
	};

	const hasIncompleteToolsBool = (tools) => {
		const incompleteTools = getIncompleteTools(tools);
		const incompleteToolBools =
			incompleteTools &&
			Object.values(incompleteTools).map((value) => {
				if (value?.length > 0) {
					return true;
				} else {
					return false;
				}
			});
		const hasIncompleteTools = incompleteToolBools.some(
			(bool) => bool === true
		);

		return hasIncompleteTools;
	};

	return (
		<Tab.Navigator>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				listeners={({ navigation }) => ({
					tabPress: (e) => {
						console.log("HOME TAB PRESS", e);
						if (focusedScreen === "Home") return;
						console.log("TAB PRESS INCOM", getIncompleteTools(tools));
						if (hasIncompleteToolsBool(tools)) {
							e.preventDefault();

							Alert.alert(
								"Discard incomplete tools?",
								"You have incomplete tools in your toolbox. Are you sure you want to discard them and leave the screen?\n" +
									" " +
									getIncompleteToolsMessage(tools),
								[
									{ text: "Don't leave", style: "cancel", onPress: () => {} },
									{
										text: "Discard",
										style: "destructive",
										onPress: () => {
											dispatch({
												type: "deleted",
												incompleteTools: getIncompleteTools(tools),
											});
											// navigation.navigate("Home");
											navigation.navigate("ZoneButtons");
											// Need this to happen earlier/quicker
										},
									},
								]
							);
						} else {
							setFocusedScreen("Home");
							// navigation.navigate("Home");
							navigation.navigate("ZoneButtons");
							// Need this to happen earlier/quicker
						}
					},
				})}
				options={{
					headerShown: false,
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="home"
							size={24}
							color={focusedScreen === "Home" ? "rgb(0, 122, 255)" : "#8E8E8F"}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Toolbox"
				component={Toolbox}
				listeners={{
					tabPress: (e) => {
						if (focusedScreen === "Toolbox") return;
						setFocusedScreen("Toolbox");
					},
				}}
				options={{
					tabBarIcon: () => (
						<MaterialCommunityIcons
							name="toolbox"
							size={24}
							color={
								focusedScreen === "Toolbox" ? "rgb(0, 122, 255)" : "#8E8E8F"
							}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};
