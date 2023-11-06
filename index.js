const express = require("express");
const fs = require("node:fs");
const app = express();
const multer = require("multer");

app.use(multer().none())
app.use(express.json());


const notes = [];
app.get("/", (req, res) => {
    res.send("Hello!＼(^o^)／");
})

app.get("/UploadForm.html", (req, res) => {
    res.sendFile(__dirname + '/static/UploadForm.html');
})

app.post("/upload", (req, res) => {
    const note_name = req.body.note_name;
    const note = req.body.note;

    const exists = notes.find(note => note.note_name === note_name);
    if (exists) {
        res.status(400);
    }
    else {
        notes.push({note_name: note_name, note: note});
        res.status(201);
    }
})

app.listen(8000);