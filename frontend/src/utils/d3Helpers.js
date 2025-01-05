import * as d3 from "d3";

/**
 * D3 Helper Functions
 *
 * This file contains reusable helper functions for creating D3 visualizations.
 * These functions abstract common D3 tasks, such as drawing axes, legends, and tooltips,
 * to promote code reuse and maintainability.
 *
 * Functions included:
 * - `drawAxes`: Adds x and y axes to a D3 SVG container.
 * - `drawLegend`: Creates a legend for categorical data in a D3 SVG container.
 * - `addTooltip`: Adds interactive tooltips to D3 elements.
 *
 * Each function is designed to be reusable across different visualizations, adhering to
 * the principles of modularity and single responsibility.
 */

/**
 * Draws the axes for a D3 visualization.
 *
 * @param {Object} svg - The SVG container.
 * @param {Object} scales - The x and y scales for the axes.
 * @param {Object} dimensions - The dimensions of the chart (height, width, margins).
 */
export const drawAxes = (svg, scales, dimensions) => {
	const { x, y } = scales;
	const { height } = dimensions;

	// Add X-axis to the bottom of the chart
	svg
		.append("g")
		.attr("transform", `translate(0, ${height})`)
		.call(d3.axisBottom(x));

	// Add Y-axis to the left of the chart
	svg.append("g").call(d3.axisLeft(y));
};

/**
 * Draws a legend for the given SVG.
 *
 * @param {Object} svg - The SVG container.
 * @param {Array} keys - The keys (categories) for the legend.
 * @param {Object} colorScale - The color scale used for the legend.
 * @param {Object} position - The position of the legend (x and y coordinates).
 */
export const drawLegend = (svg, keys, colorScale, position) => {
	const { x, y } = position;

	// Create a group for the legend
	const legend = svg.append("g").attr("transform", `translate(${x}, ${y})`);

	// Add a rectangle and text for each key in the legend
	keys.forEach((key, i) => {
		// Add color box for the legend
		legend
			.append("rect")
			.attr("x", 0)
			.attr("y", i * 20)
			.attr("width", 15)
			.attr("height", 15)
			.attr("fill", colorScale(key));

		// Add text label for the legend
		legend
			.append("text")
			.attr("x", 20)
			.attr("y", i * 20 + 12)
			.text(key)
			.style("font-size", "12px")
			.attr("alignment-baseline", "middle");
	});
};

/**
 * Adds tooltip interactivity to a selection of elements.
 *
 * @param {Object} selection - The D3 selection to attach tooltip events.
 * @param {Object} tooltip - The D3 tooltip element.
 * @param {Function} contentCallback - A function that generates the tooltip content.
 */
export const addTooltip = (selection, tooltip, contentCallback) => {
	// Add mouseover event to show tooltip
	selection
		.on("mouseover", (event, d) => {
			tooltip
				.style("opacity", 1)
				.html(contentCallback(event, d)) // Generate content using callback
				.style("left", `${event.pageX + 10}px`)
				.style("top", `${event.pageY - 28}px`);
		})
		// Update tooltip position on mousemove
		.on("mousemove", (event) => {
			tooltip
				.style("left", `${event.pageX + 10}px`)
				.style("top", `${event.pageY - 28}px`);
		})
		// Hide tooltip on mouseout
		.on("mouseout", () => {
			tooltip.style("opacity", 0);
		});
};
