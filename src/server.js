const port = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("dist"));
app.use(express.json());
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
	res.render("index", { weather: null, error: null });
});

app.post("/", function(req, res, err) {
	console.log("BODYER1", req.body);

	res.json({ hello: "woorld" });
});

app.listen(port, function() {
	console.log(`Example app listening on port ${port}!`);
});
