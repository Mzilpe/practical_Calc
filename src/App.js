import Calculator from "./components/Calculator";
import History from "./components/History";
import "./App.css";
import { useState } from "react";

function App() {
	const [currentInput, setCurrentInput] = useState("0");
	const [historyData, setHistoryData] = useState([]);

	return (
		<div className='App'>
			<Calculator
				currentInput={currentInput}
				setCurrentInput={setCurrentInput}
				setHistoryData={setHistoryData}
			/>
			<History historyData={historyData} />
		</div>
	);
}

export default App;
