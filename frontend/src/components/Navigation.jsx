import "../styles/components/navigation.css";
import React from "react";

/**
 * Navigation Component
 *
 * Renders the navigation bar at the top of the application with links to:
 * - Home
 * - About
 * - Visualizations
 *
 * Styling:
 * - Uses styles from `navigation.css` for layout and appearance.
 *
 * @returns {JSX.Element} The navigation bar component.
 */

const Navigation = () => {
	return (
		<header className="header">
			<h1 className="header__title">VibeView</h1>
			<nav className="header__nav">
				<a href="/" className="header__link header__link--active">
					Home
				</a>
				<a href="/about" className="header__link">
					About
				</a>
				<a href="/visualization" className="header__link">
					Visualizations
				</a>
			</nav>
		</header>
	);
};

export default Navigation;
