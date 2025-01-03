import mongoose from "mongoose";

// Define the schema for a music track
const TrackSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Track title is required"], // Ensure title is always present
			trim: true,
		},
		artist: {
			type: String,
			required: [true, "Artist name is required"], // Ensure artist is always present
			trim: true,
		},
		album: {
			type: String,
			trim: true, // Optional but remove extra spaces
		},
		year: {
			type: Number,
			validate: {
				validator: (value) => value > 1500 && value <= new Date().getFullYear(),
				message: "Year must be between 1500 and the current year", // Custom error message
			},
		},
		genre: {
			type: String,
			trim: true, // Optional but trim spaces
		},
		duration: {
			type: Number,
			required: [true, "Duration is required"], // Ensure duration is always present
			min: [1, "Duration must be at least 1 second"], // Minimum value of 1 second
		},
		rating: {
			type: Number,
			min: [1, "Rating must be at least 1"], // Minimum rating
			max: [5, "Rating cannot exceed 5"], // Maximum rating
		},
	},
	{
		timestamps: true, // Automatically add `createdAt` and `updatedAt` fields
	}
);

// Create and export the model
const Track = mongoose.model("Track", TrackSchema);
export default Track;
