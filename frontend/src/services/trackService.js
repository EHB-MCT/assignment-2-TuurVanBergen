const BASE_URL = import.meta.env.VITE_BASE_URL;

/**
 * Fetch all tracks from the backend.
 * @returns {Promise<Array>} A promise that resolves to an array of tracks.
 * @throws Will throw an error if the fetch fails.
 */
export const fetchAllTracks = async () => {
	try {
		const response = await fetch(BASE_URL);
		if (!response.ok) {
			throw new Error(`Failed to fetch tracks: ${response.statusText}`);
		}
		const data = await response.json();
		return data.tracks;
	} catch (error) {
		console.error("Error fetching tracks:", error.message);
		throw error;
	}
};
