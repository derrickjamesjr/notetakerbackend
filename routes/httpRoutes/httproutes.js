const express = require ('express');
const router = express.Router();
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

router.get("/", (req, res) => {
    // `res.sendFile` is Express' way of sending a file
    // `__dirname` is a variable that always returns the directory that your server is running in
    res.sendFile(__dirname + "/public/index.html");
  });
router.get("/notes", (req, res) => {
      res.sendFile(appDir + "/public/notes.html");
  });

  module.exports = router;