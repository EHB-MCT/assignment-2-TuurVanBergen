/**
 * AppRouter Component
 *
 * This component defines the routing structure of the application using `react-router-dom`.
 * It handles navigation, renders pages based on the current route, and displays the
 * `NotFoundPage` for undefined routes.
 *
 * Included components:
 * - `Navigation`: The top navigation bar.
 * - `Footer`: The footer displayed on all pages.
 * - Routes for the following pages:
 *   - `HomePage` (`/`)
 *   - `AboutPage` (`/about`)
 *   - `VisualizationsPage` (`/visualization`)
 *   - `NotFoundPage` (for undefined routes).
 *
 * @returns {JSX.Element} The rendered AppRouter component.
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import About from "../pages/AboutPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import VisualizationsPage from "../pages/VisualizationsPage.jsx";

/**
 * AppRouter Functional Component
 *
 * Handles:
 * - Navigation across the application.
 * - Rendering the correct page based on the current route.
 * - Displaying the `NotFoundPage` for undefined routes.
 *
 * @example
 * return (
 *   <AppRouter />
 * )
 */
const AppRouter = () => {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<About />} />
				<Route path="/visualization" element={<VisualizationsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default AppRouter;
