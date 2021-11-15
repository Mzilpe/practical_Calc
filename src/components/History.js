import React from "react";
import classes from "./History.module.css";

const History = (props) => {
	const { historyData } = props;
	return (
		<aside>
			<header className={classes.header}>
				<h2>History</h2>
				<h2>Memory</h2>
			</header>
			<main className={classes.display}>
				{historyData.length > 0 ? (
					historyData.map((data) => (
						<>
							{" "}
							<p>{data.split("=")[0]}</p>
							<h3>= {data.split("=")[1]}</h3>
						</>
					))
				) : (
					<h4>There is no history yet</h4>
				)}
			</main>
		</aside>
	);
};

export default History;
