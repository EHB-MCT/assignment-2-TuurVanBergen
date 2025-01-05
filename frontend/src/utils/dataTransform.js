import * as d3 from "d3";

/**
 * Prepares mood activity data for visualization by grouping activities and counting moods.
 *
 * @param {Array} data - The original dataset containing track details.
 * @returns {Array} An array of objects, each representing an activity and its associated mood counts.
 *
 * @example
 * Input:
 * [
 *   { activity: "Exercise", mood: "Happy" },
 *   { activity: "Exercise", mood: "Relaxed" },
 *   { activity: "Study", mood: "Sad" },
 * ]
 * Output:
 * [
 *   { activity: "Exercise", Happy: 1, Relaxed: 1 },
 *   { activity: "Study", Sad: 1 },
 * ]
 */
export const prepareMoodActivityData = (data) => {
	// Group data by activity and count occurrences of each mood
	const groupedData = d3.rollup(
		data,
		(v) => {
			const moodCounts = {};

			// Count each mood within the group
			v.forEach((d) => {
				const mood = d.mood || "Unknown"; // Handle missing moods with a default value
				moodCounts[mood] = (moodCounts[mood] || 0) + 1; // Increment count for the mood
			});

			return moodCounts;
		},
		(d) => d.activity || "Unknown Activity" // Group by activity, handling missing values with a default
	);

	// Convert grouped data from Map to Array for easier processing
	return Array.from(groupedData, ([activity, moods]) => ({
		activity, // Activity name
		...moods, // Spread mood counts into the object
	}));
};
