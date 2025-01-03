/**
 * Configuration array for form fields in the MusicForm component.
 * Each object in the array defines the properties of a specific input field.
 *
 * @type {Array<Object>}
 * @property {string} labelText - The label text for the input field.
 * @property {string} inputId - The unique ID for the input field.
 * @property {string} fieldName - The name attribute of the input field.
 * @property {string} inputType - The type attribute of the input field (e.g., "text", "number").
 * @property {string} inputPlaceholder - The placeholder text for the input field.
 * @property {string} [min] -The minimum value for numeric inputs.
 * @property {string} [max] -The maximum value for numeric inputs.
 */
export const formFieldsConfig = [
	{
		labelText: "Track Title",
		inputId: "track-title",
		fieldName: "trackTitle",
		inputType: "text",
		inputPlaceholder: "Enter track title",
	},

	{
		labelText: "Artist",
		inputId: "artist-name",
		fieldName: "artistName",
		inputType: "text",
		inputPlaceholder: "Enter artist name",
	},

	{
		labelText: "Album",
		inputId: "album-name",
		fieldName: "albumName",
		inputType: "text",
		inputPlaceholder: "Enter album name",
	},

	{
		labelText: "Release Year",
		inputId: "release-year",
		fieldName: "releaseYear",
		inputType: "text",
		inputPlaceholder: "Enter release year",
	},

	{
		labelText: "Genre",
		inputId: "genre",
		fieldName: "genre",
		inputType: "text",
		inputPlaceholder: "Enter genre",
	},

	{
		labelText: "Duration (in seconds)",
		inputId: "duration",
		fieldName: "duration",
		inputType: "number",
		inputPlaceholder: "Enter duration",
	},

	{
		labelText: "Rating (1-5)",
		inputId: "rating",
		fieldName: "rating",
		inputType: "number",
		inputPlaceholder: "Rate the track",
		min: "1",
		max: "5",
	},
];
