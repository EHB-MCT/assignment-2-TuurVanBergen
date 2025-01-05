import { useState } from "react";
import { searchSpotifyTracks } from "../services/spotifyTrackService.js";

/**
 * useSpotifySearch Hook
 *
 * Manages Spotify track search functionality, including state for results, loading status,
 * errors, and the currently selected track.
 *
 * @returns {Object} Contains:
 * - `results` {Array}: Tracks returned from Spotify.
 * - `isLoading` {boolean}: Indicates whether a search is in progress.
 * - `error` {string|null}: Error message if the search fails.
 * - `searchTracks` {Function}: Performs a search using a query.
 * - `selectTrack` {Function}: Sets the selected track from results.
 * - `selectedTrack` {Object|null}: The currently selected track.
 */
export const useSpotifySearch = () => {
	const [results, setResults] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const [selectedTrack, setSelectedTrack] = useState(null);

	/**
	 * Searches for tracks using the Spotify API.
	 *
	 * @param {string} query - The search query (e.g., artist or track name).
	 */
	const searchTracks = async (query) => {
		setIsLoading(true);
		setError(null);
		setResults([]);

		try {
			const tracks = await searchSpotifyTracks(query);
			setResults(tracks);
		} catch (err) {
			setError(err.message);
		} finally {
			setIsLoading(false);
		}
	};

	/**
	 * Sets the selected track from search results.
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
