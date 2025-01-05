import "../styles/pages/visualizations-page.css";
import MoodEnergyScatter from "../components/MoodEnergyScatter";
import MoodActivityChart from "../components/MoodActivityChart.jsx";
import TrackDataContainer from "../components/TrackDataContainer.jsx";

/**
 * VisualizationsPage Component
 *
 * Renders the "Visualizations" page with two charts:
 * - `MoodEnergyScatter`: A scatter plot for mood, energy, duration, and rating.
 * - `MoodActivityChart`: A stacked bar chart for mood distribution by activity.
 *
 * Uses `TrackDataContainer` to fetch track data and provide it to the charts.
 *
 * @returns {JSX.Element} The rendered page.
 */

const VisualizationsPage = () => {
	return (
		<div>
			<h1>Visualizations</h1>
			<TrackDataContainer>
				{(tracks) => (
					<>
						<MoodEnergyScatter data={tracks} />
						<MoodActivityChart data={tracks} />
					</>
				)}
			</TrackDataContainer>
		</div>
	);
};

export default VisualizationsPage;
