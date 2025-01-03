import express from "express";
import Track from "../../models/track.js";

const router = express.Router();

/**
 * Fetch all tracks from the database.
 * @route GET /api/tracks
 * @returns {Object} JSON response with all tracks or an error message.
 */
router.get("/", async (req, res) => {
	try {
		const tracks = await Track.find(); // Fetch all tracks
		res.status(200).json({ message: "Tracks fetched successfully", tracks });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch tracks", error: error.message });
	}
});
/**
 * Fetch a single track by its ID.
 * @route GET /api/tracks/:id
 * @param {string} id - The ID of the track to fetch.
 * @returns {Object} JSON response with the track details or an error message.
 */
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const track = await Track.findById(id); // Find track by ID

		if (!track) {
			return res.status(404).json({ message: "Track not found" });
		}

		res.status(200).json({ message: "Track fetched successfully", track });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch track", error: error.message });
	}
});

/**
 * Create a new track and save it to the database.
 * @route POST /api/tracks
 * @body {Object} req.body - The details of the new track to create.
 * @returns {Object} JSON response with the created track or an error message.
 */
router.post("/", async (req, res) => {
	try {
		const newTrack = new Track(req.body); // Create a new track instance
		await newTrack.save(); // Save the track to the database
		res
			.status(201)
			.json({ message: "Track created successfully", track: newTrack });
	} catch (error) {
		res
			.status(400)
			.json({ message: "Failed to create track", error: error.message });
	}
});

/**
 * Update a track by its ID.
 * @route PUT /api/tracks/:id
 * @param {string} id - The ID of the track to update.
 * @body {Object} req.body - The details to update the track with.
 * @returns {Object} JSON response with the updated track or an error message.
 */
router.put("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const updatedTrack = await Track.findByIdAndUpdate(id, req.body, {
			new: true, // Return the updated document
			runValidators: true, // Run schema validators
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
});

/**
 * Delete a track by its ID.
 * @route DELETE /api/tracks/:id
 * @param {string} id - The ID of the track to delete.
 * @returns {Object} JSON response with the deleted track or an error message.
 */
router.delete("/:id", async (req, res) => {
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
});

export default router;
