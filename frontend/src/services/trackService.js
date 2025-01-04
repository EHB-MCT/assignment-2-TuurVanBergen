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
/**
 * Add a new track to the backend.
 * @param {Object} trackData - The track data to be added.
 * @returns {Promise<Object>} A promise that resolves to the added track.
 * @throws Will throw an error if the post fails.
 */
export const addTrack = async (trackData) => {
	try {
		const response = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(trackData),
		});

		if (!response.ok) {
			throw new Error(`Failed to add track: ${response.statusText}`);
		}

		return response.json();
	} catch (error) {
		console.error("Error adding track:", error.message);
		throw error;
	}
};
