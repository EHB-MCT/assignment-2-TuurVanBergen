import { fetchSpotifyToken } from "../spotifyAuthService.js";

const SPOTIFY_API_URL = import.meta.env.VITE_SPOTIFY_API_URL;

/**
 * Spotify API Client
 *
 * This client provides methods for making authenticated HTTP requests to the Spotify API.
 * It abstracts the details of handling access tokens and ensures a consistent interface
 * for sending GET and POST requests to Spotify endpoints.
 */
export const SPOTIFY_API_CLIENT = {
	/**
	 * Performs a GET request to a Spotify API endpoint.
	 *
	 * - Fetches an access token via `fetchSpotifyToken` to authenticate the request.
	 * - Appends the provided endpoint to the Spotify base API URL.
	 * - Allows optional fetch configurations to extend or override default behavior.
	 * - Handles errors and ensures they are logged and rethrown for further handling.
	 *
	 * @param {string} endpoint - The Spotify API endpoint to send the GET request to (relative to SPOTIFY_API_URL).
	 * @param {Object} [options={}] - Optional configurations for the `fetch` request (e.g., additional headers).
	 * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from Spotify.
	 * @throws {Error} If the GET request fails or the response is not successful.
	 */
	get: async (endpoint, options = {}) => {
		try {
			const token = await fetchSpotifyToken();

			// Send the GET request to the Spotify API
			const response = await fetch(`${SPOTIFY_API_URL}${endpoint}`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
					...options.headers,
				},
				...options,
			});

			// Check if the response is successful
			if (!response.ok) {
				throw new Error(`GET request failed: ${response.statusText}`);
			}
			// return the JSON response
			return await response.json();

			// Log the error and rethrow it
		} catch (error) {
			console.error("Spotify API GET error:", error.message);
			throw error;
		}
	},

	/**
	 * Performs a POST request to a Spotify API endpoint with the provided data.
	 *
	 * - Fetches an access token via `fetchSpotifyToken` to authenticate the request.
	 * - Appends the provided endpoint to the Spotify base API URL.
	 * - Sends the data as JSON in the request body.
	 * - Allows optional fetch configurations to extend or override default behavior.
	 * - Handles errors and ensures they are logged and rethrown for further handling.
	 *
	 * @param {string} endpoint - The Spotify API endpoint to send the POST request to (relative to SPOTIFY_API_URL).
	 * @param {Object} data - The payload to include in the body of the POST request.
	 * @param {Object} [options={}] - Optional configurations for the `fetch` request (e.g., additional headers).
	 * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from Spotify.
	 * @throws {Error} If the POST request fails or the response is not successful.
	 */
	post: async (endpoint, data, options = {}) => {
		try {
			const token = await fetchSpotifyToken();

			// Send the POST request to the Spotify API
			const response = await fetch(`${SPOTIFY_API_URL}${endpoint}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${token}`,
					...options.headers,
				},
				body: JSON.stringify(data),
				...options,
			});

			// Check if the response is successful
			if (!response.ok) {
				throw new Error(`POST request failed: ${response.statusText}`);
			}

			// return the JSON response
			return await response.json();
		} catch (error) {
			// Log the error and rethrow it
			console.error("Spotify API POST error:", error.message);
			throw error;
		}
	},
};
