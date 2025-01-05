import { TRACK_API_CLIENT } from "./apiClients/trackApiClient.js";

/**
 * Track Service
 *
 * Provides an abstraction layer for track-related API operations.
 * Handles data processing and ensures consistent communication with the backend.
 * This service is used in components and modules that require track data.
 */
export const trackService = {
	/**
	 * Fetch all tracks from the backend.
	 * Processes the data to ensure consistent output.
	 * @returns {Promise<Array>} A promise that resolves to an array of tracks.
	 * @throws Will throw an error if the data format is unexpected.
	 */
	fetchAllTracks: async () => {
		const data = await TRACK_API_CLIENT.get("/");

		// Process data to ensure it's always an array of tracks
		if (data.tracks && Array.isArray(data.tracks)) {
			return data.tracks;
		}
		if (Array.isArray(data)) {
			return data;
		}
		throw new Error("Unexpected data format");
	},

	/**
	 * Add a new track to the backend.
	 * @param {Object} trackData - The track data to be added.
	 * @returns {Promise<Object>} A promise that resolves to the added track.
	 */
	addTrack: (trackData) => TRACK_API_CLIENT.post("/tracks", trackData),
};
