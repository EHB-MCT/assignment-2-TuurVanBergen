const SPOTIFY_TOKEN_URL = import.meta.env.VITE_SPOTIFY_TOKEN_URL;
const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

/**
 * Fetches an access token from Spotify API.
 *
 * @returns {Promise<string>} A promise that resolves to a Spotify API access token.
 * @throws {Error} If the request fails or no token is returned.
 */
export const fetchSpotifyToken = async () => {
	const credentials = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`); // Encode credentials in Base64

	try {
		const response = await fetch(SPOTIFY_TOKEN_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Basic ${credentials}`,
			},
			body: "grant_type=client_credentials",
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch Spotify token: ${response.statusText}`);
		}

		const data = await response.json();
		return data.access_token;
	} catch (error) {
		console.error("Error fetching Spotify token:", error.message);
		throw error;
	}
};
