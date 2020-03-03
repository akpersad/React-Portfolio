import axios from "axios";

const userObj = {};

export const getIP = axios
	.get("https://json.geoiplookup.io/")
	.then(
		response => {
			userObj.ip = response.data.ip;
			userObj.city = response.data.city;
			userObj.state = response.data.region;

			return userObj;
		},
		error => {
			console.log("Andrew error", error);
			return "Error";
		}
	)
	.catch(err => {
		console.log("AS SUPER Error", err);
		return "Error";
	});
