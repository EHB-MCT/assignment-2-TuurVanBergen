import "../styles/components/form-field.css";

/* eslint-disable react/prop-types */
/**
 * FormField Component
 *
 * Renders a single form input field with a label and error message.
 *
 * @param {Object} fieldConfig - Configuration for the input field.
 * @param {string} fieldConfig.labelText - Label text for the input field.
 * @param {string} fieldConfig.inputId - Unique ID for the input element.
 * @param {string} fieldConfig.fieldName - Name attribute for the input element.
 * @param {string} fieldConfig.inputType - Type of the input (e.g., "text", "number").
 * @param {string} fieldConfig.inputPlaceholder - Placeholder text for the input element.
 * @param {Object} rest - Additional properties for the input element.
 * @param {string} value - Current value of the input.
 * @param {string} error - Error message for the input field.
 * @param {Function} onChange - Callback for handling input changes.
 *
 * @returns {JSX.Element} The rendered form field.
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
