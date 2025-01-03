import { useState } from "react";
import "../styles/components/musicForm.css";

const MusicForm = () => {
	const initialFormState = {
		trackTitle: "",
		artistName: "",
		albumName: "",
		releaseYear: "",
		genre: "",
		duration: "",
		rating: "",
	};

	const [formData, setFormData] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = (event) => {
		event.preventDefault();
		console.log("Form submitted successfully:", formData);

		setFormData(initialFormState);
	};

	const formFields = [
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

	return (
		<form className="music-form" onSubmit={handleFormSubmit} noValidate>
			<h2 className="music-form__title">Add New Track</h2>

			{formFields.map(
				({
					labelText,
					inputId,
					fieldName,
					inputType,
					inputPlaceholder,
					...additionalProps
				}) => (
					<div className="music-form__group" key={inputId}>
						<label className="music-form__label" htmlFor={inputId}>
							{labelText}:
						</label>
						<input
							className="music-form__input"
							id={inputId}
							name={fieldName}
							type={inputType}
							placeholder={inputPlaceholder}
							value={formData[fieldName]}
							onChange={handleInputChange}
							{...additionalProps}
						/>
					</div>
				)
			)}

			<button type="submit" className="music-form__submit">
				Add Track
			</button>
		</form>
	);
};

export default MusicForm;
