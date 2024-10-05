const fetch = require("node-fetch");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/getQuote", async (req, res) => {
  try {
    const response = await fetch("http://api.quotable.io/random");
    if (!response.ok) {
      throw new Error(
        `External API error: ${response.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    res.json({ content: data.content, author: data.author });
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    res.status(500).json({ error: "Could not fetch quote at this time." });
  }
});

// For local testing
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
