const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { items } = req.body;

  try {
    // Validating the request
    if (!items || items.length === 0) {
      return res.status(400).json({
        error: "Order must contain at least one item",
      });
    }

    //Getting the products from the db
    const productIds = items.map((item) => item.productId);

    const result = await pool.query(
      `
         SELECT id, name, price
            FROM products
            WHERE id = ANY($1::int[])
        `,
      [productIds],
    );

    // Ensuring all the requested products exist
    if (result.rows.length !== items.length) {
      return res.status(400).json({
        error: "One or more products do not exist",
      });
    }

    //Calculating the total server side
    let total = 0;

    for (const item of items) {
      const product = result.rows.find(
        (product) => product.id === item.productId,
      );

      // Product price of each item multiplied by the quantity is added to the total.
      total += Number(product.price) * item.quantity;
    }

    //Creating the order
    const orderResult = await pool.query(
      `
         INSERT INTO orders (total)
            VALUES ($1)
            RETURNING id, total, status, created_at
        `,
      [total],
    );

    const order = orderResult.rows[0];

    //Creating the order items
    for (const item of items) {
      const product = result.rows.find(
        (product) => product.id === item.productId,
      );

      await pool.query(
        `
        INSERT INTO order_items
                    (order_id, product_id, quantity, price)
                VALUES
                    ($1, $2, $3, $4)
        `,
        [order.id, product.id, item.quantity, product.price],
      );
    }

    res.status(201).json({
      message: "Order placed succesfully",
      order,
    });
  } catch (error) {
    console.error("Error creating order:", error);

    res.status(500).json({
      error: "Failed to create order",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const orderResult = await pool.query(
      `
             SELECT
                orders.id,
                orders.total,
                orders.status,
                orders.created_at
            FROM orders
            WHERE orders.id = $1`,
      [id],
    );

    if (orderResult.rows.length === 0) {
      return res.status(404).json({
        error: "Order not found",
      });
    }

    const itemsResult = await pool.query(
      `
         SELECT
                order_items.product_id,
                products.name,
                order_items.quantity,
                order_items.price
            FROM order_items
            JOIN products
                ON order_items.product_id = products.id
            WHERE order_items.order_id = $1
            ORDER BY order_items.id;
        `,
      [id],
    );

    res.json({
      order: orderResult.rows[0],
      items: itemsResult.rows,
    });
  } catch (error) {
    console.error("Error fetching order:", error);

    res.status(500).json({
      error: "Failed to fetch order",
    });
  }
});

module.exports = router;
