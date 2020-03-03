import axios from "axios";

const userObj = {};

const getUrlVars = () => {
	const vars = {};
	window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
		vars[key] = value;
	});
	return vars;
};

const getReferral = () => {
	if (getUrlVars().referral) {
		return getUrlVars().referral;
	}
	return "organic";
};

export const getIP = axios
	.get("https://json.geoiplookup.io/")
	.then(
		response => {
			userObj.ip = response.data.ip;
			userObj.city = response.data.city;
			userObj.state = response.data.region;
			userObj.referral = getReferral();

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
