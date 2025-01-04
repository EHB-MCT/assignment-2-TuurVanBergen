import { useState } from "react";
import FormField from "./FormField";
import SpotifySearchInput from "./SpotifySearchInput";
import { formFieldsConfig } from "../utils/formFieldsConfig";
import { validateMusicForm } from "../utils/validation";
import "../styles/components/musicForm.css";

/**
 * MusicForm Component
 *
 * This component renders a form for adding music tracks.
 * It integrates Spotify search functionality to autofill track details.
 *
 * @component
 */
const MusicForm = () => {
	// Initial state for the form
	const initialFormState = formFieldsConfig.reduce((acc, field) => {
		acc[field.fieldName] = "";
		return acc;
	}, {});

	const [formData, setFormData] = useState(initialFormState);
	const [errors, setErrors] = useState({});
	const [error, setError] = useState(null);

	/**
	 * Handle input changes for manual fields.
	 * Updates the corresponding field in the form state.
	 *
	 * @param {Object} event - The input change event.
	 */
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	/**
	 * Handle track selection from Spotify search results.
	 * Autofills the form with the selected track's details.
	 *
	 * @param {Object} track - The track object selected from Spotify.
	 */
	const handleTrackSelect = (track) => {
		setFormData({
			trackTitle: track.title,
			artistName: track.artist,
			albumName: track.album,
			releaseYear: track.releaseYear || "",
			duration: track.duration || "",
			rating: "",
		});
	};

	/**
	 * Handle form submission.
	 * Validates form data and sends a POST request to add the track to the database.
	 *
	 * @param {Object} event - The form submission event.
	 */
	const handleSubmit = async (event) => {
		event.preventDefault();

		const validationErrors = validateMusicForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		try {
			const response = await fetch(import.meta.env.VITE_BASE_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Failed to submit form");
			}

			const result = await response.json();
			console.log("Track added successfully:", result);
			setFormData(initialFormState); // Reset form after successful submission
			setErrors({});
		} catch (err) {
			console.error("Error submitting form:", err.message);
			setError(err.message);
		}
	};

	return (
		<form className="music-form" onSubmit={handleSubmit} noValidate>
			<h2 className="music-form__title">Add New Track</h2>

			{/* Spotify Search Field */}
			<SpotifySearchInput onTrackSelect={handleTrackSelect} />

			{/* Manual Fields */}
			{formFieldsConfig.map((fieldConfig) => (
				<FormField
					key={fieldConfig.fieldName}
					fieldConfig={fieldConfig}
					value={formData[fieldConfig.fieldName]}
					error={errors[fieldConfig.fieldName]} // Display validation errors
					onChange={handleInputChange}
				/>
			))}

			{/* General Error Message */}
			{error && <p className="music-form__error">{error}</p>}

			{/* Submit Button */}
			<button type="submit" className="music-form__submit">
				Submit
			</button>
		</form>
	);
};

export default MusicForm;
