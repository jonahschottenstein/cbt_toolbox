import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export const TopTabs = ({ tabScreens }) => {
	return (
		<Tab.Navigator>
			{tabScreens.map(({ name, component, componentProps }) => {
				return (
					<Tab.Screen
						key={name}
						name={name}
						component={component}
						initialParams={componentProps}
					/>
				);
			})}
		</Tab.Navigator>
	);
};
