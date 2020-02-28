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
	nodeMailer.createTestAccount().then(resp => {
		console.log("Creds", resp);
		const transporter = nodeMailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,
			secure: false, // true for 465, false for other ports
			auth: {
				user: resp.user, // generated ethereal user
				pass: resp.pass // generated ethereal password
			}
		});

		transporter
			.sendMail({
				from: resp.user,
				to: "apersad718+nodeMailerTest@gmail.com", // list of receivers
				subject: "Hello ✔", // Subject line
				text: "Hello world?", // plain text body
				html: "<b>Hello world?</b>" // html body
			})
			.then(response => {
				console.log("Email Response", response);
				res.json({
					response: response.response
				});
			})
			.catch(err => {
				console.log("EMAIL Error", err);
			});
	});
});

app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`);
});
