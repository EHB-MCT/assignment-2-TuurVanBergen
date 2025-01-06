import "../styles/pages/visualizations-page.css";
import MoodEnergyScatter from "../components/MoodEnergyScatter";
import MoodActivityChart from "../components/MoodActivityChart.jsx";
import TrackDataContainer from "../components/TrackDataContainer.jsx";
import React from "react";

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
		<div className="visualizations-page">
			<h1>Visualizations</h1>
			<p className="visualizations-description">
				This page features two interactive charts that provide insights into how
				music is experienced.
				<br />
				The <strong>Mood-Activity Chart</strong> showcases how moods like
				"Happy," "Sad," "Motivated," and "Relaxed" are distributed across
				activities such as "Studying," "Driving," and "Relaxing." This chart
				helps you identify trends, such as which moods are more common for
				specific activities.
				<br />
				The <strong>Mood-Energy Scatter Chart</strong> explores the relationship
				between energy level, duration, and track rating. Each circle represents
				a track, with its size reflecting the rating and its color indicating
				the mood. This makes it easy to spot patterns, such as how energy levels
				relate to mood and ratings.
			</p>
			<TrackDataContainer>
				{(tracks) => (
					<>
						<MoodActivityChart data={tracks} />
						<MoodEnergyScatter data={tracks} />
					</>
				)}
			</TrackDataContainer>
		</div>
	);
};

export default VisualizationsPage;
