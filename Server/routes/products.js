const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(`
            SELECT
                products.id,
                products.name,
                products.description,
                products.price,
                products.image_url,
                categories.name AS category
            FROM products
            JOIN categories
                ON products.category_id = categories.id
            ORDER BY products.id;
            `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      error: "Failed to fetch products",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      ` SELECT
                products.id,
                products.name,
                products.description,
                products.price,
                products.image_url,
                categories.name AS category
            FROM products
            JOIN categories
                ON products.category_id = categories.id
            WHERE products.id = $1;
            `,
      [id],
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        error: "Product not found",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error fetching product:", error);

    res.status(500).json({
      error: "Failed to fetch products",
    });
  }
});



module.exports = router;
