require("dotenv").config();

const express = require("express");
const pool = require("./db");
const cors = require("cors");

const productsRouter = require("./routes/products");
const ordersRouter = require("./routes/orders");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running smoothly!" });
});

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

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
