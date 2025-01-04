import { fetchSpotifyToken } from "./spotifyAuthService.js";

const SPOTIFY_API_URL = import.meta.env.VITE_SPOTIFY_API_URL;

/**
 * Searches for tracks on Spotify using a query.
 *
 * @param {string} query - The search query (e.g., artist or track name).
 * @returns {Promise<Array>} A promise that resolves to an array of tracks.
 * @throws {Error} If the search fails.
 */
export const searchSpotifyTracks = async (query) => {
	try {
		const token = await fetchSpotifyToken(); // Fetch the access token

		const response = await fetch(
			`${SPOTIFY_API_URL}/search?type=track&q=${query}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);

		if (!response.ok) {
			throw new Error(`Failed to search tracks: ${response.statusText}`);
		}

		const data = await response.json();

		// Map the response to extract relevant track details
		return data.tracks.items.map((track) => ({
			_id: track.id,
			trackTitle: track.name,
			artistName: track.artists,
			albumName: track.album.name,
			duration: Math.floor(track.duration_ms / 1000),
			releaseYear: track.album.release_date,
		}));
	} catch (error) {
		console.error("Error searching Spotify tracks:", error.message);
		throw error;
	}
};
