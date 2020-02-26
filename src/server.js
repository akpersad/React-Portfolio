const express = require("express");

const app = express();

// "build": "./node_modules/.bin/webpack -p --mode production",
// "start": "webpack -p --mode production --watch & ./node_modules/.bin/webpack-dev-server --open --config ./webpack.config.js --mode development",

app.use(express.static("dist"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));
