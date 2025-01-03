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

export default router;
