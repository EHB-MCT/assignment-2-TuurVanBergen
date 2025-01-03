/**
 * Validates the music form data.
 *
 * @param {Object} data - The form data to validate.
 * @returns {Object} - An object containing validation errors.
 */
export const validateMusicForm = (data) => {
	const errors = {};
	if (!data.trackTitle) errors.trackTitle = "Track title is required.";
	if (!data.artistName) errors.artistName = "Artist name is required.";
	if (!data.albumName) errors.albumName = "Album name is required.";
	if (!data.releaseYear || isNaN(data.releaseYear)) {
		errors.releaseYear = "Release year must be a valid number.";
	}
	if (!data.genre) errors.genre = "Genre is required.";
	if (data.rating && (data.rating < 1 || data.rating > 5)) {
		errors.rating = "Rating must be between 1 and 5.";
	}
	return errors;
};
