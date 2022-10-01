const express = require ('express');
const router = express.Router();
const dbData = require("../../db/db.json");

router.get("/notes", (req, res) => res.json(dbData));


module.exports = router;