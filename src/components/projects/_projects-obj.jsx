import constants from "../../global/_constants";

const projects = [
	{
		Pokedex: {
			projectName: constants.projectName.pokedex,
			projectUrl: constants.projectURLs.pokedex,
			projectTechs: "React, Redux, RESTful API, Webpack, Babel, SASS/SCSS",
			projectGithub: constants.githubSites.pokedex,
			projectDescription:
				"Wanting to use Redux in a smaller project, I decided to try and create a Pokedex that allows a user to move through a " +
				"list of Pokemon. Using the Pokemon API, users can see a Pokemon's description, stats, and types. They can also toggle " +
				"displays between the regular and shiny variants. I also implemented the use of Local Storage that saves what Pokemon a user " +
				"was last looking at and displays it in a new session.",
			projectScreenShot: constants.images.pokedex,
			clientWork: false
		},
		projectImage: constants.images.geometric_orange
	},
	{
		Bose: {
			projectName: constants.projectName.bose,
			projectUrl: constants.projectURLs.bose,
			projectGithub: "N/A",
			projectTechs: "React, Adobe Experience Manager, D3.js",
			projectDescription:
				"Bose came to us to help revitalize their flagship product. We focused our efforts on two fronts; the Product Details" +
				" Page and Color Customization page. My team ensured the PDP finished product was a beautiful and responsive page that " +
				"worked well on both web and mobile.",
			projectScreenShot: constants.images.bose,
			clientWork: true
		},
		projectImage: constants.images.geometric_pink
	},
	{
		"David Yurman": {
			projectName: constants.projectName.davidYurman,
			projectUrl: constants.projectURLs.davidYurman,
			projectGithub: "N/A",
			projectTechs: "React, Redux, Adobe Experience Manager",
			projectDescription:
				"David Yurman hired us to redesign their ecommerce website. When I ooined the project, I helped with engraveable pinky " +
				"ring section. We allowed customers to see the pinky ring in their chioce of metal and to see the engraving they wanted " +
				"reflected directly on the image.",

			projectScreenShot: constants.images.davidYurman,
			clientWork: true
		},
		projectImage: constants.images.geometric_purple
	},
	{
		"Chrome Extension": {
			projectName: constants.projectName.chrome,
			projectUrl: constants.projectURLs.chrome,
			projectTechs: "Chrome Extension, JavaScript",
			projectGithub: constants.githubSites.chromeExtension,
			projectDescription:
				"To run their local files and changes, one of my clients was manually appending a string to their URLs. I built a " +
				"chrome extension used by the entire company to easily run their local host without having to manually add and edit the URL.",
			projectScreenShot: constants.images.chrome,
			clientWork: false
		},
		projectImage: constants.images.geometric_green
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
			projectScreenShot: constants.images.gulp,
			clientWork: false
		},
		projectImage: constants.images.geometric_red
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
			projectScreenShot: constants.images.portfolio,
			clientWork: false
		},
		projectImage: constants.images.geometric_blue
	}
];

export default projects;
