import { useState, useEffect } from "react";
import { trackService } from "../services/trackService.js";

/* eslint-disable react/prop-types */
/**
 * TrackDataContainer Component
 *
 * Fetches track data and provides it to child components via a render function.
 * Handles loading and error states during data fetching.
 *
 * @param {Function} children - A render function that receives the fetched tracks.
 * @returns {JSX.Element} Renders loading, error, or track data state.
 */
const TrackDataContainer = ({ children }) => {
	const [tracks, setTracks] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Fetches track data
		const fetchData = async () => {
			try {
				const fetchedTracks = await trackService.fetchAllTracks();
				console.log("Fetched tracks:", fetchedTracks);
				setTracks(fetchedTracks);
			} catch (err) {
				setError(err.message);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
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
