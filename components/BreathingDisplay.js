import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export const BreathingDisplay = ({
	isRunning,
	secondsPassed,
	command,
	onStartClick,
	onResetClick,
}) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={styles.secondsPassed}>{Math.floor(secondsPassed)}</Text>
			<Text style={styles.command}>
				{command.slice(0, 1).toUpperCase() + command.slice(1)}
			</Text>
			{isRunning ? (
				<Button style={styles.button} mode="contained" onPress={onResetClick}>
					Reset
				</Button>
			) : (
				<Button style={styles.button} mode="contained" onPress={onStartClick}>
					Start
				</Button>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	secondsPassed: {
		fontSize: 100,
	},
	command: {
		fontSize: 100,
	},
	button: {
		borderWidth: 1,
		marginTop: 30,
	},
});
