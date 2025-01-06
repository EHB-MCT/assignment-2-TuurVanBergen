import "../styles/components/footer.css";
import React from "react";

/**
 * Footer Component
 *
 * Renders the footer section with navigation links to Home, About, and Visualization pages.
 *
 * @returns {JSX.Element} The footer component.
 */

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<h1 className="footer__title">VibeView</h1>
				<nav className="footer__nav">
					<ul className="footer__nav-list">
						<li className="footer__nav-item">
							<a href="/" className="footer__nav-link">
								Home
							</a>
						</li>
						<li className="footer__nav-item">
							<a href="/about" className="footer__nav-link">
								About
							</a>
						</li>
						<li className="footer__nav-item">
							<a href="/visualization" className="footer__nav-link">
								Visualization
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
