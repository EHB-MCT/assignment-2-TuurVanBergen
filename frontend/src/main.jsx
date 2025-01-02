// Import core dependencies from React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import global CSS styles
import "./index.css";

// Import the main App component
import App from "./App.jsx";

// Render the application
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
