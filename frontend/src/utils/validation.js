/**
 * Validates the music form data.
 *
 * @param {Object} data - The form data to validate.
 * @returns {Object} - An object containing validation errors.
 */
export const validateMusicForm = (data) => {
	const errors = {};

	// Track title validation
	if (!data.trackTitle) {
		errors.trackTitle = "Track title is required.";
	}

	// Artist name validation
	if (!data.artistName) {
		errors.artistName = "Artist name is required.";
	}

	// Album name validation
	if (!data.albumName) {
		errors.albumName = "Album name is required.";
	}

	// Release year validation
	if (!data.releaseYear || isNaN(data.releaseYear)) {
		errors.releaseYear = "Release year must be a valid number.";
	} else if (data.releaseYear < 1500) {
		errors.releaseYear = "Release year must be 1500 or later.";
	}

	// Genre validation
	if (!data.genre) {
		errors.genre = "Genre is required.";
	}

	// Rating validation
	if (data.rating && (data.rating < 1 || data.rating > 5)) {
		errors.rating = "Rating must be between 1 and 5.";
	}
	// Validation for mood
	const validMoods = ["Happy", "Sad", "Motivated", "Relaxed"];
	if (data.mood && !validMoods.includes(data.mood)) {
		errors.mood = `Mood must be one of: ${validMoods.join(", ")}.`;
	}

	// Validation for activity
	const validActivities = ["Studying", "Exercising", "Relaxing", "Driving"];
	if (data.activity && !validActivities.includes(data.activity)) {
		errors.activity = `Activity must be one of: ${validActivities.join(", ")}.`;
	}

	const validContexts = ["At home", "On the bus", "In a café", "At a party"];

	// Normalize all valid contexts to lowercase without extra spaces
	const normalizedValidContexts = validContexts.map((context) =>
		context.toLowerCase().trim()
	);

	if (
		data.listeningContext &&
		!normalizedValidContexts.includes(
			data.listeningContext.toLowerCase().trim()
		)
	) {
		errors.listeningContext = `Listening context must be one of: ${validContexts.join(
			", "
		)}.`;
	}

	// Validation for energyLevel
	if (data.energyLevel < 1 || data.energyLevel > 10) {
		errors.energyLevel = "Energy level must be between 1 and 10.";
	}
	return errors;
};
