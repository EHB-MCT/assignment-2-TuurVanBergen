/**
 * Configuration array for form fields in the MusicForm component.
 * Each object in the array defines the properties of a specific input field.
 *
 * @type {Array<Object>}
 * @property {string} labelText - The label text for the input field.
 * @property {string} fieldName - The name attribute of the input field.
 * @property {string} inputType - The type attribute of the input field (e.g., "text", "number").
 * @property {string} inputPlaceholder - The placeholder text for the input field.
 * @property {string} [min] - The minimum value for numeric inputs (optional).
 * @property {string} [max] - The maximum value for numeric inputs (optional).
 */
export const FORM_FIELDS_CONFIG = [
	{
		labelText: "Track Title",
		fieldName: "trackTitle",
		inputType: "text",
		inputPlaceholder: "Enter track title",
	},
	{
		labelText: "Artist",
		fieldName: "artistName",
		inputType: "text",
		inputPlaceholder: "Enter artist name",
	},
	{
		labelText: "Album",
		fieldName: "albumName",
		inputType: "text",
		inputPlaceholder: "Enter album name",
	},
	{
		labelText: "Release Year",
		fieldName: "releaseYear",
		inputType: "number",
		inputPlaceholder: "Enter release year",
		min: "1500",
		max: new Date().getFullYear().toString(),
	},
	{
		labelText: "Duration (in seconds)",
		fieldName: "duration",
		inputType: "number",
		inputPlaceholder: "Enter duration in seconds",
		min: "1",
	},
	{
		labelText: "Genre",
		fieldName: "genre",
		inputType: "text",
		inputPlaceholder: "Enter genre",
	},
	{
		labelText: "Rating (1-5)",
		fieldName: "rating",
		inputType: "number",
		inputPlaceholder: "Rate the track (1-5)",
		min: "1",
		max: "5",
	},
	{
		labelText: "Mood",
		fieldName: "mood",
		inputType: "text",
		inputPlaceholder: "Select your mood (Happy, Sad, Motivated, Relaxed)",
	},
	{
		labelText: "Activity",
		fieldName: "activity",
		inputType: "text",
		inputPlaceholder:
			"What were you doing? (Studying, Exercising, Relaxing, Driving)",
	},
	{
		labelText: "Listening Context",
		fieldName: "listeningContext",
		inputType: "text",
		inputPlaceholder:
			"Where were you? (At home, On the bus, In a café, At a party)",
	},
	{
		labelText: "Energy Level",
		fieldName: "energyLevel",
		inputType: "number",
		inputPlaceholder: "Rate energy level (1-10)",
	},
];
