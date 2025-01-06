import "../styles/pages/home-page.css";
import MusicForm from "../components/MusicForm.jsx";
import React from "react";

/**
 * HomePage Component
 *
 * This component renders the homepage of the application.
 * It serves as the main entry point and includes the `MusicForm` component,
 *
 * Styling:
 * - The component uses styles from `home-page.css` to define its layout and appearance.
 *
 * Child Components:
 * - `MusicForm`: A form for user input related to the application's functionality.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 *
 * @example
 * return <HomePage />;
 */
export default function HomePage() {
	return (
		<main className="homepage">
			<MusicForm />
		</main>
	);
}
