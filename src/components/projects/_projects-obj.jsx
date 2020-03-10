import weddingGif from "../../images/wedding.gif";
import constants from "../../global/_constants";
import BlueGeo from "../../images/geometric_blue.jpg";
import GreenGeo from "../../images/geometric_green.jpg";
import PinkGeo from "../../images/geometric_pink.jpg";
import PurpleGeo from "../../images/geometric_purple.jpg";

const projects = [
	{
		"Wedding Website": {
			projectName: "Wedding Website",
			projectUrl: "google.com",
			projectTechs: "React, React Router",
			projectGithub: constants.githubSites.wedding,
			projectDescription:
				"This is my wedding website. I decided to build it because it was fun. The end",
			projectScreenShot: weddingGif
		},
		projectImage: BlueGeo
	},
	{
		"Gulp Portfolio": {
			projectName: "Gulp Portfolio",
			projectUrl: "google.com",
			projectTechs: "Gulp, SASS",
			projectGithub: constants.githubSites.portfolioGulp,
			projectDescription: "Cool description",
			projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
		},
		projectImage: GreenGeo
	},
	{
		"React Portfolio": {
			projectName: "React Portfolio",
			projectUrl: "google.com",
			projectTechs: "React, RESTful Api, Express, Node.js",
			projectGithub: constants.githubSites.portfolioReact,
			projectDescription: "Cool description",
			projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
		},
		projectImage: PinkGeo
	},
	{
		"Chrome Extension": {
			projectName: "Chrome Extension",
			projectUrl: "google.com",
			projectTechs: "Chrome Extension, JavaScript",
			projectGithub: constants.githubSites.chromeExtension,
			projectDescription: "Cool description",
			projectScreenShot: "https://i.picsum.photos/id/431/3360/1768.jpg?blur=1"
		},
		projectImage: PurpleGeo
	}
];

export default projects;
