// Import express package
const path = require('path');
const express = require("express");
const httpRoute = require('./routes/httpRoutes');
const apiRoute = require('./routes/apiRoutes');

// Require the JSON file and assign it to a variable called `termData`
// const PORT;

// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Add a static route for index.html
app.use(httpRoute);
app.use(apiRoute);


app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);