require("dotenv").config();

const express = require("express");
const pool = require("./db");

console.log("APP: pool query type =", typeof pool.query);

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running smoothly!" });
});

// Start the server
app.listen(PORT, async () => {
  console.log(`Server listening on http://localhost:${PORT}`);

  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database connected:", result.rows[0]);
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});
