import express from "express";

const router = express.Router();

/**
 * @route GET /status
 * @group Status - Operations related to the server status
 * @returns {Object} 200 - An object indicating the server is running
 * @returns {Error}  default - Unexpected error
 *
 * @description This route checks the status of the server and returns a JSON response indicating that the server is running.
 */
router.get("/status", (req, res) => {
	res.status(200).json({ message: "Server is running!" });
});

export default router;
