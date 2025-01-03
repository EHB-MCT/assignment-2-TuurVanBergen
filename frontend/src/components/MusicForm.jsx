import "../styles/components/musicForm.css";

const MusicForm = () => {
	return (
		<form className="music-form">
			<h2 className="music-form__title">Add New Track</h2>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="track-title">
					Track Title:
				</label>
				<input
					type="text"
					id="track-title"
					name="trackTitle"
					className="music-form__input"
					placeholder="Enter track title"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="artist-name">
					Artist:
				</label>
				<input
					type="text"
					id="artist-name"
					name="artistName"
					className="music-form__input"
					placeholder="Enter artist name"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="album-name">
					Album:
				</label>
				<input
					type="text"
					id="album-name"
					name="albumName"
					className="music-form__input"
					placeholder="Enter album name"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="release-year">
					Release Year:
				</label>
				<input
					type="text"
					id="release-year"
					name="releaseYear"
					className="music-form__input"
					placeholder="Enter release year"
					pattern="\d{4}"
					title="Enter a valid year (e.g., 2025)"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="genre">
					Genre:
				</label>
				<input
					type="text"
					id="genre"
					name="genre"
					className="music-form__input"
					placeholder="Enter genre"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="duration">
					Duration (in seconds):
				</label>
				<input
					type="number"
					id="duration"
					name="duration"
					className="music-form__input"
					placeholder="Enter duration"
				/>
			</div>

			<div className="music-form__group">
				<label className="music-form__label" htmlFor="rating">
					Rating (1-5):
				</label>
				<input
					type="number"
					id="rating"
					name="rating"
					className="music-form__input"
					min="1"
					max="5"
					placeholder="Rate the track"
				/>
			</div>

			<button type="submit" className="music-form__submit">
				Add Track
			</button>
		</form>
	);
};

export default MusicForm;
