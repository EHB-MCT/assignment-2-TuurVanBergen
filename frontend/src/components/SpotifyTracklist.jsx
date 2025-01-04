import "../styles/components/spotifyTrackList.css";

/* eslint-disable react/prop-types */
/**
 * SpotifyTrackList Component
 *
 * Displays a scrollable list of Spotify tracks.
 * Allows users to select a track from the list.
 *
 * @param {Array} tracks - The list of tracks to display.
 * @param {Function} onSelectTrack - Callback function triggered when a track is selected.
 * @returns {JSX.Element} A list of tracks.
 */
const SpotifyTrackList = ({ tracks, onSelectTrack }) => {
	if (!tracks || tracks.length === 0) {
		return <p>No tracks found.</p>;
	}

	return (
		<ul className="spotify-track-list">
			{tracks.map((track) => (
				<li
					key={track.id}
					className="spotify-track-list__item"
					onClick={() => onSelectTrack(track)}
				>
					<p className="spotify-track-list__title">{track.title}</p>
					<p className="spotify-track-list__artist">by {track.artist}</p>
				</li>
			))}
		</ul>
	);
};

export default SpotifyTrackList;
