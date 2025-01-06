// Import core dependencies from React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

// Import global CSS styles
import "./index.css";

// Import the main App component
import App from "./App.jsx";

/**
 * Initialize and render the React application.
 *
 * - Wraps the app in `StrictMode` to highlight potential issues.
 * - Renders the `App` component inside the root DOM element.
 * @example
 * How this code works:
 * 1. Define a root element in your HTML file with id="root".
 * 2. Import this script to render the React application.
 *
 * HTML structure:
 * <div id="root"></div>
 */
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
