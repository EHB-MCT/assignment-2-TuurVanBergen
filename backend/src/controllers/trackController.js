import Track from "../models/track.js";

/**
 * @module TrackController
 * @description Provides CRUD operations for managing `Track` resources in the database.
 * Each function interacts with the `Track` model to handle requests and send appropriate responses.
 *
 * @functions
 * - `getAllTracks`: Fetches all tracks from the database.
 * - `getTrackById`: Fetches a single track by its ID.
 * - `createTrack`: Creates a new track and saves it to the database.
 * - `updateTrackById`: Updates an existing track by its ID.
 * - `deleteTrackById`: Deletes a track by its ID.
 */

/**
 * Fetch all tracks from the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getAllTracks = async (req, res) => {
	try {
		const tracks = await Track.find();
		res.status(200).json({ message: "Tracks fetched successfully", tracks });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch tracks", error: error.message });
	}
};

/**
 * Fetch a single track by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const getTrackById = async (req, res) => {
	try {
		const { id } = req.params;
		const track = await Track.findById(id);
		if (!track) {
			return res.status(404).json({ message: "Track not found" });
		}
		res.status(200).json({ message: "Track fetched successfully", track });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch track", error: error.message });
	}
};

/**
 * Create a new track and save it to the database.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const createTrack = async (req, res) => {
	try {
		const newTrack = new Track(req.body);
		await newTrack.save();
		res
			.status(201)
			.json({ message: "Track created successfully", track: newTrack });
	} catch (error) {
		res
			.status(400)
			.json({ message: "Failed to create track", error: error.message });
	}
};

/**
 * Update a track by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const updateTrackById = async (req, res) => {
	try {
		const { id } = req.params;
		const updatedTrack = await Track.findByIdAndUpdate(id, req.body, {
			new: true,
			runValidators: true,
		});
		if (!updatedTrack) {
			return res.status(404).json({ message: "Track not found" });
		}
		res.status(200).json({
			message: "Track updated successfully",
			track: updatedTrack,
		});
	} catch (error) {
		res
			.status(400)
			.json({ message: "Failed to update track", error: error.message });
	}
};

/**
 * Delete a track by its ID.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export const deleteTrackById = async (req, res) => {
	try {
		const { id } = req.params;
		const deletedTrack = await Track.findByIdAndDelete(id);
		if (!deletedTrack) {
			return res.status(404).json({ message: "Track not found" });
		}
		res
			.status(200)
			.json({ message: "Track deleted successfully", track: deletedTrack });
	} catch (error) {
		res
			.status(400)
			.json({ message: "Failed to delete track", error: error.message });
	}
};
