const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')

app.get("/api/compliment", getCompliment);

app.listen(4000, () => console.log("Server running on 4000"));

app.get('/getFortune', (req, res) => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    res.send(randomFortune);
});

const express = require('express');
const app = express();
const port = 3000;

const names = ["Alice", "Bob", "Charlie", "David", "Emma"];

app.get('/random-name', (req, res) => {
    let randomIndex = Math.floor(Math.random() * names.length);
    let randomName = names[randomIndex];
    res.status(200).send(randomName);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});