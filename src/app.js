import { fetchedData } from "./api/fetchRijksmuseumData.js";
import { initializeRijksmuseumData } from "./api/fetchRijksmuseumData.js";

/**
 * Initializes the application by fetching data from the Rijksmuseum API.
 * Logs the retrieved data to the console for debugging and verification purposes.
 *
 * @returns {Promise<void>} Resolves when initialization is complete.
 * @throws {Error} Propagates errors encountered during initialization.
 */
async function initApp() {
	try {
		// Fetch the data from the API
		await initializeRijksmuseumData();

		// Log the fetched data
		console.log("Fetched Data:", fetchedData);
	} catch (error) {
		console.error("App Initialization Error:", error);
	}
}

// Start the application
initApp();
