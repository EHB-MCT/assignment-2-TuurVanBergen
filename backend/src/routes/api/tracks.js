import express from "express";
import Track from "../../models/track.js";

const router = express.Router();

/**
 * GET /api/tracks
 * Fetches all tracks from the database.
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
 * GET /api/tracks/:id
 * Fetches a single track by its ID.
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

export default router;
