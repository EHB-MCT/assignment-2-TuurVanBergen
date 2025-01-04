import { useState } from "react";
import { validateMusicForm } from "../utils/validation.js";
import { addTrack } from "../services/trackService.js";
/**
 * Custom hook for managing music form state, validation, and submission logic.
 *
 * @param {Object} initialState - The initial state of the form fields. Keys represent field names, and values represent their initial values.
 * @returns {Object} - An object containing:
 * - `formData` {Object}: The current state of the form fields.
 * - `errors` {Object}: Validation errors for the form fields, with field names as keys and error messages as values.
 * - `handleInputChange` {Function}: Function to update the form state when an input value changes. Takes an `event` object as parameter.
 * - `handleFormSubmit` {Function}: Function to validate and handle form submission. Accepts:
 *    - `event` {Object}: The form submission event.
 *    - `onSuccess` {Function}: Optional callback to execute if the form submission is successful.
 * - `resetForm` {Function}: Function to reset the form state and validation errors to their initial values.
 */
export const useMusicForm = (initialState) => {
	const [formData, setFormData] = useState(initialState);
	const [errors, setErrors] = useState({});

	// Update form state when input changes
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	// Validate form and handle submission
	const handleFormSubmit = async (event, onSuccess) => {
		event.preventDefault();
		const validationErrors = validateMusicForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		try {
			await addTrack(formData); // Call the service function
			console.log("Track added successfully:", formData);
			if (onSuccess) onSuccess();
		} catch (error) {
			console.log("Track added successfully:", formData);
			console.error("Error submitting form:", error.message);
		}
	};

	// Reset form to initial state
	const resetForm = () => {
		setFormData(initialState);
		setErrors({});
	};

	return {
		formData,
		errors,
		handleInputChange,
		handleFormSubmit,
		resetForm,
	};
};
