import express from "express";
import trackRoutes from "./api/trackRoutes.js";

const router = express.Router();

/**
 * Main API Router.
 *
 * This router serves as the entry point for all API-related routes in the application.
 * It manages and organizes the specific route files.
 *
 * @module apiRoutes
 */

/**
 * Route group for managing tracks.
 * All endpoints related to tracks are nested under `/api/tracks`.
 *
 * @name /api/tracks
 * @kind Router
 */
router.use("/tracks", trackRoutes);

export default router;
