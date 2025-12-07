import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/quotes", async (req, res) => {
    const categories = "happiness,inspirational,philosophy";
    const url = `https://api.api-ninjas.com/v2/quotes?categories=${categories}&limit=5`;

    const response = await fetch(url, {
        headers: { "X-Api-Key": process.env.API_KEY },
    });

    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => console.log("Server running on http://localhost:" + PORT));
