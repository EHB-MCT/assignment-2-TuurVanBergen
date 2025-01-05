// Importing the router component that manages all application routes
import AppRouter from "./routes/AppRouter";

/**
 * Root component of the application.
 *
 * This component:
 * - Serves as the main entry point for rendering the application.
 * - Sets up the base structure of the app, including global styles and routing.
 *
 * Children:
 * - AppRouter: Handles application routes and navigation.
 *
 * @returns {JSX.Element} The root structure of the application.
 */
function App() {
	return (
		<div className="App">
			<AppRouter />
		</div>
	);
}

// Exporting the App component to be used as the root of the application in main entry points (e.g., main.jsx).
export default App;
