import React from "react";
import "./header.styles.scss";

const Header = () => {
	return (
		<div className="header">
			<h1>Hello, I'm Ivan.</h1>
			<p className="mb5">
				Well who I am ? I'm very bad in introductions then let's keep
				DRY. A Front-End-Developer who loves{" "}
				<span className="skill">React</span> and uses it on daily basis
				together with <span className="skill">Redux</span>,{" "}
				<span className="skill">Redux-saga</span>.{" "}
				<span className="skill">NodeJS</span> and{" "}
				<span className="skill">MongoDb</span> for the Backend and{" "}
				<span className="skill">Jest</span> for unit testing.
				<br />I hope one day to create something revolutionary and very
				useful for people but for now let's do another To-do List. The
				world deserves another one. Right ?
			</p>

			<nav>
				<li>
					<span className="number">01</span>{" "}
					<span className="line"></span>
					<a href="#">Latest</a>
				</li>
				<li>
					<span className="number">02</span>{" "}
					<span className="line"></span>
					<a href="#">Projects </a>
				</li>
				<li>
					<span className="number">03</span>{" "}
					<span className="line"></span>
					<a href="#">Huge Projects</a>
				</li>
			</nav>

			<div className="social">
				<img src="/portfolioImg.png" alt="portfolio-pic" />
				<span>
					<i class="fab fa-github"></i> <span>GitHub</span>
					<i class="fas fa-external-link-alt"></i>
				</span>

				<span>
					<i class="fab fa-linkedin"></i> <span>LinkedIn</span>
					<i class="fas fa-external-link-alt"></i>
				</span>
			</div>
		</div>
	);
};

export default Header;
