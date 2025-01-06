import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { drawAxes, addTooltip, drawLegend } from "../utils/d3Helpers.js"; // Importeer drawLegend
import React from "react";

/* eslint-disable react/prop-types */
/**
 * MoodEnergyScatter Component
 *
 * This component visualizes the relationship between energy levels and track durations
 * for different moods using a scatter plot. Each point represents a track, with its size
 * based on the track's rating and color indicating its mood.
 *
 * Features:
 * - Interactive tooltips showing detailed track information.
 * - A legend indicating the mapping of colors to moods.
 *
 * @param {Array} data - The data array containing track details.
 * @returns {JSX.Element} A rendered D3 scatter plot inside a React component.
 */
const MoodEnergyScatter = ({ data }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		// Clear previous chart to prevent overlapping elements during re-renders
		d3.select(chartRef.current).selectAll("*").remove();

		// Define chart dimensions and margins
		const width = 800;
		const height = 600;
		const margin = { top: 40, right: 150, bottom: 50, left: 60 };

		// Create SVG container
		const svg = d3
			.select(chartRef.current)
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`);

		// Define scales for the scatter plot
		const x = d3.scaleLinear().domain([1, 10]).range([0, width]);
		const y = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.duration || 0)])
			.range([height, 0]);
		const color = d3
			.scaleOrdinal()
			.domain(["Happy", "Sad", "Motivated", "Relaxed"])
			.range(["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]);
		const size = d3.scaleLinear().domain([1, 5]).range([5, 20]);

		// Draw axes using the helper function
		drawAxes(svg, { x, y }, { width, height });

		// Create a tooltip container for interactivity
		const tooltip = d3
			.select(chartRef.current)
			.append("div")
			.style("opacity", 0)
			.style("position", "absolute")
			.style("background", "#fff")
			.style("border", "1px solid #ccc")
			.style("border-radius", "4px")
			.style("padding", "8px")
			.style("pointer-events", "none");

		// Add scatter plot points for each track
		const points = svg
			.selectAll("circle")
			.data(data)
			.enter()
			.append("circle")
			.attr("cx", (d) => x(d.energyLevel))
			.attr("cy", (d) => y(d.duration))
			.attr("r", (d) => size(d.rating))
			.attr("fill", (d) => color(d.mood))
			.style("opacity", 0.8);

		// Add tooltips to scatter plot points using the helper function
		addTooltip(points, tooltip, (event, d) => {
			return `<strong>${d.trackTitle}</strong><br>Energy: ${d.energyLevel}<br>Duration: ${d.duration}s<br>Mood: ${d.mood}<br>Rating: ${d.rating}`;
		});

		// Add a legend for the scatter plot using the helper function
		drawLegend(svg, ["Happy", "Sad", "Motivated", "Relaxed"], color, {
			x: width + 20,
			y: 20,
		});
	}, [data]);

	return <div ref={chartRef}></div>;
};

export default MoodEnergyScatter;
