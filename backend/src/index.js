const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/getQuote", async (req, res) => {
  try {
    const response = await fetch("http://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(
        `External API error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();

    // Sending both content and author to the frontend
    res.json({ content: data.content, author: data.author });
  } catch (error) {
    console.error("Error fetching quote:", error.message); // Log the error message
    res.status(500).json({ error: "Could not fetch quote at this time." });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
