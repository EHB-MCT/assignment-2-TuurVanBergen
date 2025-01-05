import { useState } from "react";
import { validateMusicForm } from "../utils/validation.js";

/**
 * useMusicForm Hook
 *
 * Manages form state, validation, and submission logic for a music form.
 *
 * @param {Object} initialState - Initial values for form fields.
 * @param {Function} submitTrack - Function to handle form submission.
 *
 * @returns {Object} - Contains form state, validation errors, and utility functions.
 */
export const useMusicForm = (initialState, submitTrack) => {
	const [formData, setFormData] = useState(initialState); // State for managing form data
	const [errors, setErrors] = useState({}); // State for managing validation errors

	/**
	 * Updates form state on input change.
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
	 * Validates and submits the form.
	 * @param {Object} event - Form submission event.
	 * @param {Function} [onSuccess] - Optional callback on successful submission.
	 */
	const handleFormSubmit = async (event, onSuccess) => {
		event.preventDefault();

		// Validate the form data
		const validationErrors = validateMusicForm(formData);
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		// Submit the form using the injected submit function
		try {
			await submitTrack(formData);
			console.log("Track added successfully:", formData);
			if (onSuccess) onSuccess(); // Trigger the success callback if provided
		} catch (error) {
			console.error("Error submitting form:", error.message);
		}
	};

	/**
	 * Resets the form to its initial state.
	 */
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
