import { useState } from "react";
import { searchSpotifyTracks } from "../services/spotifyTrackService.js";
import { fetchSpotifyToken } from "../services/spotifyAuthService.js";

/**
 * Custom hook to manage Spotify track search.
 *
 * @returns {Object} Contains the following:
 * - `results`: Array of tracks returned from Spotify.
 * - `isLoading`: Boolean indicating whether the search is in progress.
 * - `error`: Error message if the search fails.
 * - `searchTracks`: Function to perform a search based on a query.
 * - `selectTrack`: Function to select a track from the results.
 * - `selectedTrack`: The currently selected track, if any.
 */
export const useSpotifySearch = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedTrack, setSelectedTrack] = useState(null);

	/**
	 * Performs a search for tracks using the Spotify API.
	 *
	 * @param {string} query - The search query (e.g., artist or track name).
	 */
	const searchTracks = async (query) => {
		setIsLoading(true);
		setError(null);
		setResults([]);

		try {
			const token = await fetchSpotifyToken(); // Fetch the access token
			const tracks = await searchSpotifyTracks(query, token); // Search for tracks
			setResults(tracks);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Selects a track from the search results.
	 *
	 * @param {Object} track - The track to select.
	 */
	const selectTrack = (track) => {
		setSelectedTrack(track);
	};

	return {
		results,
		isLoading,
		error,
		searchTracks,
		selectTrack,
		selectedTrack,
	};
};
