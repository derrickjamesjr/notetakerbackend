const express = require ('express');
const router = express.Router();
const dbData = require("../../db/db.json");
const fs = require('fs');

router.get("/notes", (req, res) => res.json(dbData));

router.post("/notes" , (req, res) => {
    const notebdy = req.body;
    console.log(req.body);
    fs.readFile('db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        // console.log(JSON.parse(data));
        dbData.push(notebdy);
        console.log(JSON.parse(data));})
        fs.writeFile('db/db.json', JSON.stringify(data, '/t'), 'utf8', (err, data) => {
            if (err) throw err;
            console.log(data);
        })
    })

router.get("/notes/:id", (req, res) => {
    
})

    // fs.writeFile('db/db.json', JSON.stringify(dbData), (err, data) => {
    //     if (err) throw err;
    //     console.log(data);

module.exports = router;