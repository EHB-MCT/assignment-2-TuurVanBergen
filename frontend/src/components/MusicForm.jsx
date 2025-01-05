import { useState } from "react";
import FormField from "./FormField.jsx";
import SpotifySearchInput from "./SpotifySearchInput.jsx";
import { FORM_FIELDS_CONFIG } from "../utils/formFieldsConfig.js";
import { validateMusicForm } from "../utils/validation.js";
import "../styles/components/music-form.css";

/**
 * MusicForm Component
 *
 * Renders a form for adding music tracks. The form includes manual input fields and a
 * Spotify search input to autofill track details. Validates input and submits data to the server.
 *
 * @returns {JSX.Element} The rendered MusicForm component.
 */
const MusicForm = () => {
	// Initial state for the form
	const initialFormState = FORM_FIELDS_CONFIG.reduce((acc, field) => {
		acc[field.fieldName] = "";
		return acc;
	}, {});

	const [formData, setFormData] = useState(initialFormState);
	const [errors, setErrors] = useState({});
	const [error, setError] = useState(null);

	/**
	 * Updates the state when a manual input field changes.
	 *
	 * @param {Object} event - Input change event.
	 */
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	/**
	 * Autofills the form with details of a selected Spotify track.
	 *
	 * @param {Object} track - Selected track object.
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
	 * Validates form data and submits it to the server.
	 *
	 * @param {Object} event - Form submission event.
	 */
	const handleSubmit = async (event) => {
		event.preventDefault();

		const validationErrors = validateMusicForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		// Submit form data
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
			// Reset form after successful submission
			setFormData(initialFormState);
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
			{FORM_FIELDS_CONFIG.map((fieldConfig) => (
				<FormField
					key={fieldConfig.fieldName}
					fieldConfig={fieldConfig}
					value={formData[fieldConfig.fieldName]}
					// Display validation errors
					error={errors[fieldConfig.fieldName]}
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
