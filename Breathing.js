import { useEffect, useRef, useState } from "react";
import { BreathingDisplay } from "./BreathingDisplay";

export const Breathing = ({
	route: {
		params: { toolValue },
	},
}) => {
	// Still need to factor in sets
	const [isRunning, setIsRunning] = useState(false);
	const [command, setCommand] = useState("inhale");
	const [startTime, setStartTime] = useState(null);
	const [now, setNow] = useState(null);
	const intervalRef = useRef(null);
	const secondsPassedRef = useRef(toolValue.inhale);

	const currentCommandSeconds = toolValue && command && toolValue[command];

	useEffect(() => {
		if (startTime != null && now != null) {
			secondsPassedRef.current =
				currentCommandSeconds - (now - startTime) / 1000;
		}
		if (secondsPassedRef.current < 1.01) {
			setStartTime(Date.now());
			setNow(Date.now());
			handleCommand();
			clearInterval(intervalRef.current);
			intervalRef.current = setInterval(() => {
				setNow(Date.now());
			}, 10);
		}
	}, [now, startTime, currentCommandSeconds]);

	function handleStart() {
		console.log("HANDLE START");
		setStartTime(Date.now());
		setNow(Date.now());
		setIsRunning((prevState) => (prevState === false ? true : false));

		if (!isRunning && command === "") {
			setCommand("inhale");
		}

		clearInterval(intervalRef.current);
		intervalRef.current = setInterval(() => {
			setNow(Date.now());
		}, 10);
	}

	function handleReset() {
		clearInterval(intervalRef.current);
		secondsPassedRef.current = toolValue["inhale"];
		setStartTime(null);
		setNow(null);
		setIsRunning(false);
		setCommand("inhale");
	}

	function handleCommand() {
		// Can use switch statement
		setCommand((prevState) => {
			if (prevState === "inhale") {
				return "hold";
			} else if (prevState === "hold") {
				return "exhale";
			} else if (prevState === "exhale") {
				return "rest";
			} else {
				return "inhale";
			}
		});
	}

	return (
		<BreathingDisplay
			isRunning={isRunning}
			secondsPassed={secondsPassedRef.current}
			command={command}
			onStartClick={handleStart}
			onResetClick={handleReset}
		/>
	);
};
