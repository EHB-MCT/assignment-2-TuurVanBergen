import "../styles/components/navigation.css";

const Navigation = () => {
	return (
		<header className="header">
			<h1 className="header__title">VibeView</h1>
			<nav className="header__nav">
				<a href="/" className="header__link header__link--active">
					Home
				</a>
				<a href="/about" className="header__link">
					About
				</a>
				<a href="/visualization" className="header__link">
					Visualizations
				</a>
			</nav>
		</header>
	);
};

export default Navigation;
