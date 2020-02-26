import express from "express";
import nodemailer from "nodemailer";

const app = express();

// "build": "./node_modules/.bin/webpack -p --mode production",
// "start": "webpack -p --mode production --watch & ./node_modules/.bin/webpack-dev-server --open --config ./webpack.config.js --mode development",

app.use(express.static("dist"));

app.post("/send", function(req, res, next) {
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "test-email@gmail.com",
			pass: "test123"
		}
	});

	const mailOptions = {
		from: `${req.body.email}`,
		to: "apersad718@gmail.com",
		subject: `${req.body.name}`,
		text: `${req.body.message}`,
		replyTo: `${req.body.email}`
	};

	transporter.sendMail(mailOptions, function(err, res1) {
		if (err) {
			console.error("there was an error: ", err);
		} else {
			console.log("here is the res: ", res);
		}
	});
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
