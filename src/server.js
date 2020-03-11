import express from "express";
import bodyParser from "body-parser";
import expressRV from "express-react-views";
import nodeMailer from "nodemailer";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("dist"));
app.use(express.json());
app.set("view engine", "jsx");

app.engine("jsx", expressRV.createEngine());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
	res.render("index", { weather: null, error: null });
});

app.post("/", function(req, res) {
	const { body } = req;
	const transporter = nodeMailer.createTransport({
		host: "smtp.mail.yahoo.com",
		port: 465,
		service: "yahoo",
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		},
		debug: false,
		logger: true
	});

	const emailBodyHTML = `<div>
			<h4>Dear Andrew,</h4>
			<p>You've recieved an email from the submission contact form on your portfolio.</p>
			<p>Below is the information:</p>
			<p>Name: ${body.name}</p>
			<p>Email: ${body.email}</p>
			<p>Message: ${body.message}</p>
			<p>Cheers,</p>
			<p>Yourself!</p>
		</div>`;

	const emailBodyPlain = `Dear Andrew,
			You've recieved an email from the submission contact form on your portfolio.
			Below is the information:
			Name: ${body.name};
			Email: ${body.email};
			Message: ${body.message};`;

	transporter
		.sendMail({
			from: process.env.EMAIL,
			to: process.env.EMAILTO, // list of receivers
			subject: "Portfolio Contact", // Subject line
			text: emailBodyPlain, // plain text body
			html: emailBodyHTML // html body
		})
		.then(response => {
			console.log("Email Response", response);
			res.json({
				response: response.response
			});
		})
		.catch(err => {
			console.log("EMAIL Error", err);
			res.end();
		});
});

app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`);
});
