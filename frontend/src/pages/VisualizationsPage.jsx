import "../styles/pages/visualizations-page.css";
import TrackDataContainer from "../components/TrackDataContainer.jsx";

/**
 * VisualizationsPage Component
 *
 * This component renders the "Visualizations" page of the application.
 *
 * Styling:
 * - The component uses styles from `visualizations-page.css` to define its layout and appearance.
 *
 * Child Components:
 * - `TrackDataContainer`: A container component responsible for providing track data for visualization.
 *
 * @returns {JSX.Element} The rendered VisualizationsPage component.
 *
 * @example
 * return <VisualizationsPage />;
 */
export default function VisualizationsPage() {
	return (
		<>
			<h2>Welcome to the visualisation page</h2>
			<TrackDataContainer>
				{(tracks) => (
					<ul>
						{tracks.map((track) => (
							<li key={track._id}>
								{track.trackTitle} by {track.artistName} - {track.duration}s,{" "}
								{track.albumName} - {track.releaseYear} - {track.genre} -{" "}
								{track.duration} - {track.rating}
							</li>
						))}
					</ul>
				)}
			</TrackDataContainer>
		</>
	);
}
