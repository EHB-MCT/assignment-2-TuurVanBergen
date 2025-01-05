import express from "express";
import {
	getAllTracks,
	getTrackById,
	createTrack,
	updateTrackById,
	deleteTrackById,
} from "../../controllers/trackController.js";

const router = express.Router();

/**
 * @module TrackRoutes
 * @description Defines the routes for managing tracks, including fetching, creating, updating, and deleting tracks.
 *
 * Endpoints:
 * - `GET /api/tracks`: Fetch all tracks.
 * - `GET /api/tracks/:id`: Fetch a track by its ID.
 * - `POST /api/tracks`: Create a new track.
 * - `PUT /api/tracks/:id`: Update a track by its ID.
 * - `DELETE /api/tracks/:id`: Delete a track by its ID.
 */

/**
 * Route to fetch all tracks.
 * @route GET /api/tracks
 */
router.get("/", getAllTracks);

/**
 * Route to fetch a track by its ID.
 * @route GET /api/tracks/:id
 */
router.get("/:id", getTrackById);

/**
 * Route to create a new track.
 * @route POST /api/tracks
 */
router.post("/", createTrack);

/**
 * Route to update a track by its ID.
 * @route PUT /api/tracks/:id
 */
router.put("/:id", updateTrackById);

/**
 * Route to delete a track by its ID.
 * @route DELETE /api/tracks/:id
 */
router.delete("/:id", deleteTrackById);

export default router;
