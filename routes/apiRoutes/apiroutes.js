const express = require("express");
const router = express.Router();
const dbData = require("../../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => res.json(dbData));

router.post("/notes", (req, res) => {
  const notebdy = req.body;
  // const newdb = [];
  // console.log(req.body);
  fs.readFile("db/db.json", "utf8", (err, data) => {
    if (err) throw err;
    // console.log(data);
    console.log("incoming from db.json", JSON.parse(data));
    // newdb.push(JSON.parse(data));
    const obj = JSON.parse(data);
    console.log(obj);
    obj.push(notebdy);
    obj.forEach((dbData, i) => {
      dbData.id = i + 1;
    });
    write(obj);

    // console.log(newdb);})
  });
  function write(data) {
    fs.writeFile(
      "db/db.json",
      JSON.stringify(data, "/t"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        console.log(data);
      }
    );
  }
});
// router.get("/notes/:id", (req, res) => {
//     const id = req.params.id;

// })

// fs.writeFile('db/db.json', JSON.stringify(dbData), (err, data) => {
//     if (err) throw err;
//     console.log(data);

module.exports = router;
