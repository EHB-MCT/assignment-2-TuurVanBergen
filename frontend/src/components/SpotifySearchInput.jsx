import { useState } from "react";
import SpotifyTrackList from "./SpotifyTracklist.jsx";
import "../styles/components/spotify-search-input.css";
import { useSpotifySearch } from "../hooks/useSpotifySearch.js";
import React from "react";

/* eslint-disable react/prop-types */
/**
 * SpotifySearchInput Component
 *
 * Provides a search input for finding Spotify tracks and displays results in a dropdown list.
 *
 * @param {Function} onTrackSelect - Callback triggered when a track is selected.
 * @returns {JSX.Element} The Spotify search input component.
 */
const SpotifySearchInput = ({ onTrackSelect }) => {
	const [query, setQuery] = useState("");
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const { results, searchTracks } = useSpotifySearch();

	/**
	 * Updates the search query and triggers a search.
	 * @param {Object} event - Input change event.
	 */
	const handleSearch = (event) => {
		const searchQuery = event.target.value;
		setQuery(searchQuery);

		if (searchQuery.trim()) {
			searchTracks(searchQuery);
			setDropdownVisible(true);
		} else {
			setDropdownVisible(false);
		}
	};

	/**
	 * Handles track selection and resets the search state.
	 * @param {Object} track - Selected track object.
	 */
	const handleTrackSelect = (track) => {
		// Pass the selected track to the parent component
		onTrackSelect(track);
		setQuery("");
		setDropdownVisible(false);
	};

	return (
		<div className="spotify-search">
			{/* Input field for searching Spotify tracks */}
			<input
				type="text"
				value={query}
				onChange={handleSearch}
				placeholder="Search Spotify for tracks"
				className="spotify-search__input"
			/>
			{/* Dropdown menu for displaying search results */}
			{dropdownVisible && results.length > 0 && (
				<SpotifyTrackList tracks={results} onSelectTrack={handleTrackSelect} />
			)}
		</div>
	);
};

export default SpotifySearchInput;
