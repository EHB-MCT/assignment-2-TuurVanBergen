const SPOTIFY_TOKEN_URL = import.meta.env.VITE_SPOTIFY_TOKEN_URL;
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

/**
 * Spotify Token Service
 *
 * This utility function fetches an access token from the Spotify API.
 * The token is required to authenticate requests to other Spotify API endpoints.
 */

/**
 * Fetches an access token from the Spotify API.
 *
 * - Encodes the client credentials (client ID and secret) in Base64 format.
 * - Sends a POST request to the Spotify token endpoint with the required headers and body.
 * - Handles errors if the request fails or the response is invalid.
 *
 * @returns {Promise<string>} A promise that resolves to a Spotify API access token.
 * @throws {Error} If the request fails or no token is returned.
 */
export const fetchSpotifyToken = async () => {
	const credentials = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`); // Encode credentials in Base64

	try {
		// Encode client credentials in Base64 for the Authorization header
		const response = await fetch(SPOTIFY_TOKEN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${credentials}`,
			},
			body: "grant_type=client_credentials", // Request body required by Spotify API
		});

		// Check if the response is successful
		if (!response.ok) {
			throw new Error(`Failed to fetch Spotify token: ${response.statusText}`);
		}

		// Parse the response JSON
		const data = await response.json();
		return data.access_token;
	} catch (error) {
		// Log the error and rethrow for further handling
		console.error("Error fetching Spotify token:", error.message);
		throw error;
	}
};
