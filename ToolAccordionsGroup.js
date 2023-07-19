import { View } from "react-native";
import { List } from "react-native-paper";

export const ToolAccordionsGroup = ({ children }) => {
	return (
		<View>
			<List.AccordionGroup>{children}</List.AccordionGroup>
		</View>
	);
};
