import { API_CONFIG } from "./config.js";

/**
 * Holds the data fetched from the API. This variable is populated after initialization.
 * @type {Object|null}
 */
export let fetchedData = null;

/**
 * Initializes the application data by fetching it from the Rijksmuseum API.
 * This function constructs the API request, includes necessary parameters,
 * and assigns the retrieved data to `fetchedData`.
 *
 * @returns {Promise<void>} Resolves when data fetching is complete.
 * @throws {Error} Propagates any errors encountered during the fetch process.
 */
export async function initializeRijksmuseumData() {
	try {
		/**
		 * API key used for authentication.
		 */
		fetchedData = await fetchRijksmuseumCollectionData(API_CONFIG, {
			key: API_CONFIG.apiKey,
			/**
			 * Example dynamic parameter. Filters results for artworks using the 'paint' technique.
			 */
			technique: "paint",
		});
	} catch (error) {
		// Log any errors encountered during the fetch process
		console.error("Fetch Error:", error);
		// Rethrow the error to propagate it to the calling code
		throw error;
	}
}
/**
 * Fetches data from the Rijksmuseum API.
 * Constructs the full URL by combining the base URL, default parameters,
 * and additional dynamic parameters. Returns the parsed JSON response.
 *
 * @param {Object} config - Configuration object containing the API base URL and default parameters.
 * @param {Object} params - Dynamic parameters to include in the API request.
 * @returns {Promise<Object>} The parsed JSON response from the API.
 * @throws {Error} Throws an error if the API request fails.
 */
async function fetchRijksmuseumCollectionData(config, params) {
	// Construct the full API URL
	const url = new URL(config.baseURL);

	// Add default parameters to the URL
	Object.entries(config.defaultParams).forEach(([key, value]) =>
		url.searchParams.append(key, value)
	);

	// Add dynamic parameters to the URL
	Object.entries(params).forEach(([key, value]) =>
		url.searchParams.append(key, value)
	);

	// Execute the API request
	const response = await fetch(url);

	// Validate response
	if (!response.ok) {
		throw new Error(`API Error: ${response.statusText} (${response.status})`);
	}

	// Parse and return the response data
	return response.json();
}
// Initialize the data by calling the `initializeRijksmuseumData` function
await initializeRijksmuseumData();
