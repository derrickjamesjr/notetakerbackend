// Import express package
const express = require("express");

// Require the JSON file and assign it to a variable called `termData`
const dbData = require("./db/db.json");
const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

// Add a static route for index.html
app.get("/", (req, res) => {
  // `res.sendFile` is Express' way of sending a file
  // `__dirname` is a variable that always returns the directory that your server is running in
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/notes", (req, res) => {
    res.sendFile(__dirname + "/public/notes.html");
});

// res.json() allows us to return JSON instead of a buffer, string, or static file
app.get("/api", (req, res) => res.json(dbData));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);