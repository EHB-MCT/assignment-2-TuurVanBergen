import "../styles/components/formField.css";

/* eslint-disable react/prop-types */
/**
 * FormField Component - Renders a single input field with label and error handling.
 *
 * @param {Object} fieldConfig - Configuration object for the input field.
 * @param {string} fieldConfig.labelText - Label text for the input field.
 * @param {string} fieldConfig.inputId - Unique ID for the input element.
 * @param {string} fieldConfig.fieldName - Name attribute for the input element.
 * @param {string} fieldConfig.inputType - Type attribute for the input element (e.g., "text", "number").
 * @param {string} fieldConfig.inputPlaceholder - Placeholder text for the input element.
 * @param {Object} rest - Any additional properties for the input field.
 *
 * @param {string} value - Current value of the input field.
 * @param {string} error - Error message to display for the input field.
 * @param {function} onChange - Function to handle changes in the input field.
 *
 * @returns {JSX.Element} - A single form field with label, input, and error message.
 */
const FormField = ({ fieldConfig, value, error, onChange }) => {
	const {
		labelText,
		inputId,
		fieldName,
		inputType,
		inputPlaceholder,
		...rest
	} = fieldConfig;

	return (
		<div className="form-field">
			{/* Render the label for the input field */}
			<label className="form-field__label" htmlFor={inputId}>
				{labelText}:
			</label>

			{/* Render the input field with dynamic classes for error handling */}
			<input
				className={`form-field__input ${
					error ? "form-field__input--error" : ""
				}`}
				id={inputId}
				name={fieldName}
				type={inputType}
				placeholder={inputPlaceholder}
				value={value || ""}
				onChange={onChange}
				{...rest}
			/>

			{/* Render the error message if an error exists */}
			{error && <p className="form-field__error">{error}</p>}
		</div>
	);
};

export default FormField;
