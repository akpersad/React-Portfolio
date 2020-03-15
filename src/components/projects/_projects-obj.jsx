import constants from "../../global/_constants";

const projects = [
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
		projectImage: constants.images.geometric_orange
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
		projectImage: constants.images.geometric_pink
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
		projectImage: constants.images.geometric_purple
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
		projectImage: constants.images.geometric_green
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
		projectImage: constants.images.geometric_red
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
			projectScreenShot: constants.images.wedding,
			clientWork: false
		},
		projectImage: constants.images.geometric_blue
	}
];

export default projects;
