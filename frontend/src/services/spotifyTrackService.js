import { SPOTIFY_API_CLIENT } from "./apiClients/spotifyApiClient.js";

/**
 * Spotify Search Service
 *
 * Provides functionality to search for tracks on Spotify using a query.
 * The results are formatted to match the UI's expectations.
 */

/**
 * @typedef {Object} Track
 * @property {string} id - The unique ID of the track.
 * @property {string} title - The name of the track.
 * @property {string} artist - The name(s) of the artist(s) associated with the track.
 * @property {string} album - The name of the album the track belongs to.
 * @property {number} duration - The duration of the track in seconds.
 * @property {number} popularity - The popularity score of the track (0-100).
 * @property {string|null} previewUrl - A URL to preview the track, or `null` if unavailable.
 * @property {string} releaseYear - The year the track was released.
 */

/**
 * Searches for tracks on Spotify using a query.
 *
 * @param {string} query - The search query (e.g., artist or track name).
 * @returns {Promise<Array<Track>>} - A promise that resolves to an array of formatted track objects.
 * @throws {Error} - If the search fails, an error is logged and rethrown.
 */
export const searchSpotifyTracks = async (query) => {
	try {
		// Encode the query to ensure special characters do not break the URL or cause API errors.
		const endpoint = `/search?type=track&q=${encodeURIComponent(query)}`;
		const data = await SPOTIFY_API_CLIENT.get(endpoint);

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
