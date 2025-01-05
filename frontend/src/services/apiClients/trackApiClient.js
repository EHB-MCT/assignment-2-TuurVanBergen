const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Track API Client
 *
 * This client provides methods for making HTTP requests to the track-related endpoints
 * of the backend API. It handles common operations such as GET and POST requests.
 */
export const TRACK_API_CLIENT = {
	/**
	 * Performs a GET request to the specified API endpoint.
	 *
	 * - Constructs the full URL using the base URL and the endpoint.
	 * - Fetches data from the server and parses the response as JSON.
	 * - Handles errors and ensures they are logged and rethrown for further handling.
	 *
	 * @param {string} endpoint - The API endpoint to send the GET request to.
	 * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from the server.
	 * @throws {Error} If the GET request fails or the response is not successful.
	 */
	get: async (endpoint) => {
		try {
			const response = await fetch(`${BASE_URL}${endpoint}`);

			// Check if the response is successful
			if (!response.ok) {
				throw new Error(`GET request failed: ${response.statusText}`);
			}

			// Parse and return the response JSON
			return await response.json();
		} catch (error) {
			// Log the error and rethrow it
			console.error("API GET error:", error.message);
			throw error;
		}
	},

	/**
	 * Performs a POST request to the specified API endpoint with the provided data.
	 *
	 * - Constructs the full URL using the base URL and the endpoint.
	 * - Sends data as JSON in the request body to the server.
	 * - Parses the response as JSON and handles any errors encountered.
	 *
	 * @param {string} endpoint - The API endpoint to send the POST request to (relative to BASE_URL).
	 * @param {Object} data - The payload to include in the body of the POST request.
	 * @returns {Promise<Object>} A promise that resolves to the parsed JSON response from the server.
	 * @throws {Error} If the POST request fails or the response is not successful.
	 */
	post: async (endpoint, data) => {
		try {
			const response = await fetch(`${BASE_URL}${endpoint}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			// Check if the response is successful
			if (!response.ok) {
				throw new Error(`POST request failed: ${response.statusText}`);
			}

			// Parse and return the response JSON
			return await response.json();
		} catch (error) {
			// Log the error and rethrow it
			console.error("API POST error:", error.message);
			throw error;
		}
	},
};
