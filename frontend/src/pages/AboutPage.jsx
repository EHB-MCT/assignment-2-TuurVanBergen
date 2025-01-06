import "../styles/pages/about-page.css";
import React from "react";

/**
 * AboutPage Component
 *
 * This component renders the "About" page of the application.
 * It provides a brief introduction or description about the application.
 *
 * Styling:
 * - The component uses styles from `about-page.css` to define its appearance.
 *
 * @returns {JSX.Element} The rendered AboutPage component.
 *
 * @example
 * return <AboutPage />;
 */
export default function AboutPage() {
	return (
		<div className="about-container">
			<h1>About VibeView</h1>
			<p>
				VibeView is a music visualization tool that combines manual data input
				and Spotify integration to provide insights into music trends and
				preferences. Dive into interactive charts and discover how music shapes
				moods and activities.
			</p>
		</div>
	);
}
