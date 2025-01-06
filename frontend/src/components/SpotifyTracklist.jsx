import "../styles/components/spotify-track-list.css";
import React from "react";

/* eslint-disable react/prop-types */
/**
 * SpotifyTrackList Component
 *
 * Renders a scrollable list of Spotify tracks and allows selection of a track.
 *
 * @param {Array} tracks - List of tracks to display.
 * @param {Function} onSelectTrack - Callback triggered when a track is selected.
 * @returns {JSX.Element} A rendered list of tracks or a message if no tracks are found.
 */
const SpotifyTrackList = ({ tracks, onSelectTrack }) => {
	if (!tracks || tracks.length == 0) {
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
