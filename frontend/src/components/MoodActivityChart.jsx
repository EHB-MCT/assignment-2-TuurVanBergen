import { useRef, useEffect } from "react";
import * as d3 from "d3";
import { prepareMoodActivityData } from "../utils/dataTransform.js";
import { drawAxes, drawLegend, addTooltip } from "../utils/d3Helpers.js";
import React from "react";

/* eslint-disable react/prop-types */
/**
 * MoodActivityChart Component
 *
 * This component renders a stacked bar chart visualizing the relationship
 * between activities and moods using the prepared data.
 *
 * @param {Array} data - The original data array containing track details.
 * @returns {JSX.Element} A rendered D3 visualization inside a React component.
 */
const MoodActivityChart = ({ data }) => {
	// Ref to attach the chart's SVG container
	const chartRef = useRef(null);

	useEffect(() => {
		// Prepare data for visualization
		const preparedData = prepareMoodActivityData(data);
		console.log("Prepared data for visualization:", preparedData);

		// Clear previous SVG elements to avoid overlaps
		d3.select(chartRef.current).selectAll("*").remove();

		// Define chart dimensions and margins
		const width = 600;
		const height = 400;
		const margin = { top: 20, right: 100, bottom: 50, left: 40 };

		// Create SVG container with proper margins
		const svg = d3
			.select(chartRef.current)
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left}, ${margin.top})`);

		// Define keys (moods) for the stacked data and scales
		const keys = ["Happy", "Sad", "Motivated", "Relaxed"];
		const x = d3
			.scaleBand()
			.domain(preparedData.map((d) => d.activity)) // Map activities to x-axis
			.range([0, width])
			.padding(0.2); // Add padding between bars

		const y = d3
			.scaleLinear()
			.domain([
				0,
				d3.max(preparedData, (d) => d3.sum(keys, (key) => d[key] || 0)),
			]) // Calculate max value for y-axis
			.range([height, 0]);

		const color = d3
			.scaleOrdinal()
			.domain(keys)
			.range(["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"]); // Assign colors to moods

		// Draw axes using helper function
		const scales = { x, y };
		const dimensions = { width, height };
		drawAxes(svg, scales, dimensions);

		// Stack the data for the chart
		const stackedData = d3.stack().keys(keys)(preparedData);

		// Add bars for each mood and activity combination
		svg
			.append("g")
			.selectAll("g")
			.data(stackedData)
			.enter()
			.append("g")
			.attr("fill", (d) => color(d.key)) // Color bars based on mood
			.selectAll("rect")
			.data((d) => d)
			.enter()
			.append("rect")
			.attr("x", (d) => x(d.data.activity))
			.attr("y", (d) => y(d[1]))
			.attr("height", (d) => y(d[0]) - y(d[1])) // Height based on stacked values
			.attr("width", x.bandwidth()); // Width based on x-axis scale

		// Create tooltip element
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

		// Add interactivity with tooltip using helper function
		addTooltip(svg.selectAll("rect"), tooltip, (event, d) => {
			const activity = d.data?.activity || "Unknown Activity";
			const mood =
				d3.select(event.target.parentNode).datum()?.key || "Unknown Mood";
			const count = d[1] - d[0];
			return `<strong>Activity:</strong> ${activity}<br><strong>${mood}:</strong> ${count}`;
		});

		// Add legend using helper function
		drawLegend(svg, keys, color, { x: width + 20, y: 20 });
	}, [data]); // Re-render chart if data changes

	return <div ref={chartRef}></div>;
};

export default MoodActivityChart;
