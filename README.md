# TechNest

TechNest is a web-based e-commerce application for purchasing consumer electronics and computer accessories.

The application will allow users to browse products, view product details, add products to a shopping cart, proceed through a checkout process, and place simulated orders.

## Planned Technology Stack

- React
- Vite
- Node.js
- Express.js
- PostgreSQL
- Prisma
- Git/GitHub

## Planned Core Features

- Product catalog
- Product details
- Product search and filtering
- Shopping cart
- Checkout
- Simulated order placement
- Order confirmation

## Project Status

Phase 1 – Conception and initial project setup.

## Backend

The backend is built with Node.js and Express.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /products | Get all products |
| GET | /products/:id | Get a single product |
| POST | /orders | Create an order |
| GET | /orders/:id | Get an order and its items |

### Database

TechHub uses PostgreSQL.

The database contains:
- categories
- products
- orders
- order_items

## Setup

1. Install dependencies:

```bash
npm install

2. Create a .env file containing:
DATABASE_URL="your-postgresql-connection-string"

