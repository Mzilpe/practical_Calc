import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
	const style = `${classes.buttons} ${props.className}`;
	return (
		<button onClick={props.onClick} className={style}>
			{props.children}
		</button>
	);
};

export default Button;
