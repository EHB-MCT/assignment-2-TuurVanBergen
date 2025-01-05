import mongoose from "mongoose";

/**
 * @module Track
 * Defines the schema and model for a music track in the database.
 * Includes fields for title, artist, album, release year, genre, duration, rating, energyLevel, listeningContext, activity, mood.
 */
const TrackSchema = new mongoose.Schema(
	{
		/**
		 * The title of the track.
		 *
		 * @type {String}
		 * @required
		 * @validation Trims extra spaces and ensures the title is provided.
		 */
		trackTitle: {
			type: String,
			required: [true, "Track title is required"],
			trim: true,
		},
		/**
		 * The name of the artist who created the track.
		 *
		 * @type {String}
		 * @required
		 * @validation Trims extra spaces and ensures the artist name is provided.
		 */
		artistName: {
			type: String,
			required: [true, "Artist name is required"],
			trim: true,
		},
		/**
		 * The album where the track belongs (if applicable).
		 *
		 * @type {String}
		 * @optional
		 * @validation Trims extra spaces.
		 */
		albumName: {
			type: String,
			required: [true, "albumName is required"],
			trim: true,
		},
		/**
		 * The year the track was released.
		 *
		 * @type {Number}
		 * @optional
		 * @validation Must be a valid year between 1500 and the current year.
		 */
		releaseYear: {
			type: Number,
			required: [true, "releaseYear is required"],
			validate: {
				validator: (value) => value > 1500 && value <= new Date().getFullYear(),
				message: "Year must be between 1500 and the current year",
			},
		},
		/**
		 * The genre of the track (e.g., Rock, Pop, Jazz).
		 *
		 * @type {String}
		 * @optional
		 * @validation Trims extra spaces.
		 */
		genre: {
			type: String,
			required: [true, "genre is required"],
			trim: true,
		},
		/**
		 * The duration of the track in seconds.
		 *
		 * @type {Number}
		 * @required
		 * @validation Must be at least 1 second.
		 */
		duration: {
			type: Number,
			required: [true, "Duration is required"],
			min: [1, "Duration must be at least 1 second"],
		},
		/**
		 * User rating for the track, on a scale of 1 to 5.
		 *
		 * @type {Number}
		 * @optional
		 * @validation Must be between 1 and 5.
		 */
		rating: {
			type: Number,
			required: [true, "rating is required"],
			min: [1, "Rating must be at least 1"],
			max: [5, "Rating cannot exceed 5"],
		},
		/**
		 * The mood associated with the track.
		 *
		 * @type {String}
		 * @required
		 * @validation Must be one of: "Happy", "Sad", "Motivated", "Relaxed".
		 */
		mood: {
			type: String,
			trim: true,
			required: [true, "mood is required"],
			validate: {
				validator: (value) =>
					["Happy", "Sad", "Motivated", "Relaxed"].includes(value),
				message: "Invalid mood value",
			},
		},
		/**
		 * The activity during which the track was listened to.
		 *
		 * @type {String}
		 * @required
		 * @validation Must be one of: "Studying", "Exercising", "Relaxing", "Driving".
		 */
		activity: {
			type: String,
			trim: true,
			required: [true, "activity is required"],
			validate: {
				validator: (value) =>
					["Studying", "Exercising", "Relaxing", "Driving"].includes(value),
				message: "Invalid activity value",
			},
		},
		/**
		 * The context in which the track was listened to.
		 *
		 * @type {String}
		 * @required
		 * @validation Must be one of: "At home", "On the bus", "In a café", "At a party".
		 */
		listeningContext: {
			type: String,
			trim: true,
			required: [true, "listening context is required"],
			validate: {
				validator: (value) =>
					["At home", "On the bus", "In a café", "At a party"].includes(value),
				message: "Invalid listening context value",
			},
		},
		/**
		 * The perceived energy level of the track, on a scale of 1 to 10.
		 *
		 * @type {Number}
		 * @required
		 * @validation Must be between 1 and 10.
		 */
		energyLevel: {
			type: Number,
			required: [true, "Energy level is required"],
			min: [1, "Energy level must be at least 1"],
			max: [10, "Energy level cannot exceed 10"],
		},
	},
	{
		/**
		 * Automatically adds `createdAt` and `updatedAt` timestamps to each document.
		 */
		timestamps: true,
	}
);

/**
 * Creates and exports the Track model based on the TrackSchema.
 * The model represents the `tracks` collection in MongoDB.
 *
 * @module Track
 */
const Track = mongoose.model("Track", TrackSchema);
export default Track;
