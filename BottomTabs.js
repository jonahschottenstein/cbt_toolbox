import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./HomeScreen";
import { ToolboxEditor } from "./ToolboxEditor";
import { useState } from "react";
import { useTools, useToolsDispatch } from "./ToolsContext";
import { Alert } from "react-native";

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
	const tools = useTools();
	const dispatch = useToolsDispatch();

	const [focusedScreen, setFocusedScreen] = useState();

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

	const getIncompleteToolsMessages = (tools) => {
		// NEED TO FIX
		const data = getIncompleteTools(tools).map((obj) => ({
			[Object.keys(obj)[0]]: JSON.stringify(
				Object.values(obj).map((zoneTools) =>
					zoneTools.map((zoneTool) => zoneTool.index + 1)
				)[0]
			),
		}));
		const messages = data.map((obj) => {
			const zone = Object.keys(obj)[0];
			const indexes = Object.values(obj)[0];

			return `Incomplete ${zone} tools: ${indexes}`;
		});

		return messages;
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
								"You have incomplete tools in your toolbox. Are you sure you want to discard them and leave the screen?",
								//  +
								// 	" " +
								// 	getIncompleteToolsMessages(tools)
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
											navigation.navigate("Home");
										},
									},
								]
							);
						} else {
							setFocusedScreen("Home");
						}
					},
				})}
			/>
			<Tab.Screen
				name="Toolbox Editor"
				component={ToolboxEditor}
				listeners={{
					tabPress: (e) => {
						if (focusedScreen === "Toolbox Editor") return;
						setFocusedScreen("Toolbox Editor");
					},
				}}
			/>
		</Tab.Navigator>
	);
};
