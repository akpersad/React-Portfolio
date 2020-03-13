import weddingGif from "../../images/wedding.gif";
import gulpGif from "../../images/gulp.gif";
import portfolioGif from "../../images/portfolio.gif";
import chromeImage from "../../images/chrome.png";
import constants from "../../global/_constants";
import BlueGeo from "../../images/geometric_blue.jpg";
import GreenGeo from "../../images/geometric_green.jpg";
import PinkGeo from "../../images/geometric_pink.jpg";
import PurpleGeo from "../../images/geometric_purple.jpg";

const projects = [
	{
		"Chrome Extension": {
			projectName: constants.projectName.chrome,
			projectUrl: constants.projectURLs.chrome,
			projectTechs: "Chrome Extension, JavaScript",
			projectGithub: constants.githubSites.chromeExtension,
			projectDescription:
				"To run their local files and changes, one of my clients was manually appending a string to their URLs. I built a " +
				"chrome extension used by the entire company to easily run their local host without having to manually add and edit the URL.",
			projectScreenShot: chromeImage,
			clientWork: false
		},
		projectImage: PurpleGeo
	},
	{
		"Gulp Build": {
			projectName: constants.projectName.gulp,
			projectUrl: constants.projectURLs.gulp,
			projectTechs: "Gulp, SASS/SCSS, Babel",
			projectGithub: constants.githubSites.portfolioGulp,
			projectDescription:
				"I started this project to help teach myself Gulp. I wanted to learn about build packs and decided to start with that. " +
				"It also served as the beginning of this very site. I began brainstorming how and what I wanted my portfolio to be. The " +
				"site is rendered completely on the client side and optimized for quickest and most efficient load.",
			projectScreenShot: gulpGif,
			clientWork: false
		},
		projectImage: GreenGeo
	},

	{
		Portfolio: {
			projectName: constants.projectName.react,
			projectUrl: constants.projectURLs.react,
			projectTechs: "React, Webpack, RESTful Api, Express, Node.js, Babel",
			projectGithub: constants.githubSites.portfolioReact,
			projectDescription:
				"This very site. While I started my portfolio in a Gulp build, I decided to switch over to a React/Webpack build in order to " +
				"get experience with setting up a webpack config from scratch. I also added a Node.JS/Express backend in order to send emails " +
				"in the contact form. The website also offers the user the ability to choose between two color patterns, similiar to a light/dark mode.",
			projectScreenShot: portfolioGif,
			clientWork: false
		},
		projectImage: PinkGeo
	},
	{
		"Wedding Website": {
			projectName: constants.projectName.wedding,
			projectUrl: constants.projectURLs.wedding,
			projectTechs:
				"React, React Router, Third Party Integrations, Webpack, Babel, SASS/SCSS",
			projectGithub: constants.githubSites.wedding,
			projectDescription:
				"While exploring websites like Zola and The Knot, I tried to use their templates to build our wedding website. " +
				"I found myself getting frustrated with their limitations and more than once saying 'I could do this on my own'. " +
				"So I decided to! While we're in the middle of one of the most stressful planning events of our lives, it's nice to " +
				"be able to focus on something I enjoy and get it done how I wanted to.",
			projectScreenShot: weddingGif,
			clientWork: false
		},
		projectImage: BlueGeo
	}
];

export default projects;
