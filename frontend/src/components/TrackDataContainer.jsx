import { useState, useEffect } from "react";
import { fetchAllTracks } from "../services/trackService";

/* eslint-disable react/prop-types */
/**
 * TrackDataContainer Component
 *
 * This component fetches track data and passes it to child components for visualization.
 * It ensures data is only fetched when the component is mounted (e.g., when navigating to the visualization page).
 *
 * @returns {JSX.Element} A container for fetching and managing track data.
 */
const TrackDataContainer = ({ children }) => {
	const [tracks, setTracks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await fetchAllTracks();
				setTracks(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData(); // Fetch data when the component mounts
	}, []);

	// Pass loading, error, and data state to children
	return (
		<>
			{isLoading && <p>Loading tracks...</p>}
			{error && <p>Error loading tracks: {error}</p>}
			{!isLoading && !error && children(tracks)}
		</>
	);
};

export default TrackDataContainer;
