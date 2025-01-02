import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<header className="App-header">
				<h1>Welcome to Vite + React!</h1>
				<p>
					<button onClick={() => setCount((count) => count + 1)}>
						Count is {count}
					</button>
				</p>
				<p>
					Edit <code>App.jsx</code> and save to test HMR updates.
				</p>
				<p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					{" | "}
					<a
						className="App-link"
						href="https://vitejs.dev/guide/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vite Docs
					</a>
				</p>
			</header>
		</div>
	);
}

export default App;
