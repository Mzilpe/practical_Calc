import React, { useState } from "react";
import classes from "./Calculator.module.css";
import Button from "./Customs/Button";
const BTN = [
	"CE",
	"C",
	"X",
	"/",
	7,
	8,
	9,
	"*",
	4,
	5,
	6,
	"-",
	1,
	2,
	3,
	"+",
	" ",
	0,
	".",
	"=",
];

const CHECK = "*/-+";

const Calculator = (props) => {
	const [result, setResult] = useState("");
	const { currentInput, setCurrentInput, setHistoryData } = props;

	const onClickHandler = (val) => {
		if (val === "C") {
			setCurrentInput("0");
		} else if (val === "X") {
			setCurrentInput((prevVal) =>
				prevVal.length === 1 ? "0" : prevVal.substring(0, prevVal.length - 1)
			);
		} else if (val === "=") {
			const lastVal = currentInput
				.toString()
				.trim()
				.substring(currentInput.length - 1);
			console.log(lastVal);
			if (CHECK.includes(lastVal)) {
				alert("Please enter valid equation");
			} else {
				const res = eval(currentInput);
				setResult(res);

				setHistoryData((prevVal) => [...prevVal, `${currentInput} = ${res}`]);
			}
		} else {
			let stringVal = String(val);
			if (CHECK.includes(val)) {
				stringVal = " " + stringVal + " ";
			}
			setCurrentInput((prevVal) =>
				prevVal === "0" ? val : prevVal + stringVal
			);
		}
	};

	return (
		<aside className={classes.container}>
			<h1>
				<button>=</button>Standard
			</h1>
			<h1 className={classes.display}>{currentInput}</h1>
			<h1 className={classes.display}>{result}</h1>
			<main className={classes.buttonsSection}>
				{BTN.map((val, i) => (
					<Button key={i} onClick={() => onClickHandler(val)}>
						{val}
					</Button>
				))}
			</main>
		</aside>
	);
};

export default Calculator;
