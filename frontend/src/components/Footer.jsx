import "../styles/components/footer.css";

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
