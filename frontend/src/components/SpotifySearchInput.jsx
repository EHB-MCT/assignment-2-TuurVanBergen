import { useState } from "react";
import SpotifyTrackList from "./SpotifyTrackList";
import "../styles/components/spotifySearchInput.css";
import { useSpotifySearch } from "../hooks/useSpotifySearch";

/* eslint-disable react/prop-types */
/**
 * SpotifySearchInput Component
 *
 * This component handles Spotify search functionality.
 * It provides an input field for searching Spotify tracks and a dropdown list for selecting tracks.
 *
 * @param {Function} onTrackSelect - Callback function to handle the selected track.
 * @returns {JSX.Element} The rendered Spotify search input component.
 */
const SpotifySearchInput = ({ onTrackSelect }) => {
	// State to manage the current query string
	const [query, setQuery] = useState("");

	// State to toggle the visibility of the dropdown menu
	const [dropdownVisible, setDropdownVisible] = useState(false);

	// Custom hook to handle Spotify API calls
	const { results, searchTracks } = useSpotifySearch();

	/**
	 * Handle search input changes.
	 * Updates the query state and triggers a search if the query is not empty.
	 *
	 * @param {Object} event - The input change event.
	 */
	const handleSearch = (event) => {
		const searchQuery = event.target.value;
		setQuery(searchQuery);

		if (searchQuery.trim()) {
			searchTracks(searchQuery); // Trigger Spotify search API call
			setDropdownVisible(true); // Show the dropdown menu
		} else {
			setDropdownVisible(false); // Hide the dropdown menu for empty query
		}
	};

	/**
	 * Handle track selection from the dropdown.
	 * Calls the `onTrackSelect` callback and resets the search state.
	 *
	 * @param {Object} track - The selected track object.
	 */
	const handleTrackSelect = (track) => {
		onTrackSelect(track); // Pass the selected track to the parent component
		setQuery(""); // Clear the search input field
		setDropdownVisible(false); // Hide the dropdown menu
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
