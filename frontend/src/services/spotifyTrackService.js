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
		const token = await fetchSpotifyToken();

		const response = await fetch(
			`${SPOTIFY_API_URL}/search?type=track&q=${encodeURIComponent(query)}`,
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
		console.log(data);
		// Map the response to match what the UI expects
		return data.tracks.items.map((track) => ({
			id: track.id,
			title: track.name,
			artist:
				track.artists?.map((artist) => artist.name).join(", ") ||
				"Unknown Artist",
			album: track.album.name,
			duration: Math.floor(track.duration_ms / 1000),
			popularity: track.popularity,
			previewUrl: track.preview_url,
			releaseYear: track.album.release_date.split("-")[0],
		}));
	} catch (error) {
		console.error("Error searching Spotify tracks:", error.message);
		throw error;
	}
};
