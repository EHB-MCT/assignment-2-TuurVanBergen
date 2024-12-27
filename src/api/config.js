/**
 * Configuration object for the Rijksmuseum API.
 * This object defines the base URL, the API key, and default parameters
 * included in every API request.
 */
export const API_CONFIG = {
	/**
	 * Base URL for the Rijksmuseum API.
	 * This is the main endpoint used to fetch collection data.
	 */
	baseURL: "https://www.rijksmuseum.nl/api/en/collection",

	/**
	 * API Key for authenticating requests to the Rijksmuseum API.
	 * It is sourced from environment variables for security.
	 */
	apiKey: import.meta.env.VITE_API_KEY,

	/**
	 * Default parameters to include in each API request.
	 * These parameters refine and narrow the search results.
	 */
	defaultParams: {
		/**
		 * Object type filter (e.g., paintings, sculptures).
		 */
		type: "painting",

		/**
		 * Time period filter. Here it specifies 17th-century art.
		 */
		"f.dating.period": "17",

		/**
		 * Production location filter. Limits results to works from the Netherlands.
		 */
		productionPlaces: "Netherlands",

		/**
		 * Pagination setting. Specifies the number of results per page.
		 */
		ps: 100, // Default set to 100 results per page
	},
};
