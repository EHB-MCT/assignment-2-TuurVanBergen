// Importing global styles and routing components
import "./App.css";
import AppRouter from "./routes/AppRouter";

/**
 * Root component of the application.
 * This serves as the main entry point for rendering the application and setting up routing.
 */
function App() {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

// Exporting the App component to be used in other files (e.g., main.jsx)
export default App;
