import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import About from "../pages/AboutPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import VisualizationsPage from "../pages/VisualizationsPage.jsx";

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
