import "../styles/components/musicForm.css";
import { useMusicForm } from "../hooks/useMusicForm";
import { formFieldsConfig } from "../utils/formFieldsConfig";
import FormField from "./FormField";

/**
 * MusicForm Component
 *
 * A form component for manually inputting details about a music track.
 * This component dynamically renders input fields based on a configuration object
 * and manages its state using a custom hook.
 *
 * @component
 */
const MusicForm = () => {
	/**
	 * Initial state of the form.
	 * Represents the default values for all form fields.
	 *
	 * @constant {Object} initialFormState
	 * @property {string} trackTitle - The title of the track.
	 * @property {string} artistName - The name of the artist.
	 * @property {string} albumName - The name of the album.
	 * @property {string} releaseYear - The release year of the track.
	 * @property {string} genre - The genre of the track.
	 * @property {string} duration - The duration of the track in seconds.
	 * @property {string} rating - User rating for the track (1-5).
	 */
	const initialFormState = {
		trackTitle: "",
		artistName: "",
		albumName: "",
		releaseYear: "",
		genre: "",
		duration: "",
		rating: "",
	};

	/**
	 * Destructures values and functions from the `useMusicForm` custom hook.
	 *
	 * @constant {Object} useMusicForm
	 * @property {Object} formData - Current state of the form fields.
	 * @property {Object} errors - Validation errors for the form fields.
	 * @property {Function} handleInputChange - Updates the formData when input changes.
	 * @property {Function} handleFormSubmit - Validates and submits the form.
	 * @property {Function} resetForm - Resets the form to its initial state.
	 */
	const { formData, errors, handleInputChange, handleFormSubmit, resetForm } =
		useMusicForm(initialFormState);

	return (
		<form
			className="music-form"
			onSubmit={(event) => handleFormSubmit(event, resetForm)}
			noValidate
		>
			<h2 className="music-form__title">Add New Track</h2>

			{/* Dynamically render form fields based on the configuration */}
			{formFieldsConfig.map((fieldConfig) => (
				<FormField
					key={fieldConfig.inputId}
					fieldConfig={fieldConfig}
					value={formData[fieldConfig.fieldName]}
					error={errors[fieldConfig.fieldName]}
					onChange={handleInputChange}
				/>
			))}

			{/* Submit button */}
			<button type="submit" className="music-form__submit">
				Add Track
			</button>
		</form>
	);
};

export default MusicForm;
