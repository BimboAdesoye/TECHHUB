# TechNest

TechNest is a web-based e-commerce application for purchasing consumer
electronics and computer accessories.

The application will allow users to browse products, view product details,
add products to a shopping cart, proceed through a checkout process, and
place simulated orders.

## Technology Stack

- React
- Vite
- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- Axios
- Tailwind CSS
- Git/GitHub

## Core Features

- Product catalog
- Product details
- Product search and filtering
- Shopping cart
- Quantity controls
- Remove items from cart
- Cart subtotal and total
- Add-to-cart notifications
- Checkout
- Simulated order placement
- Order confirmation

## Project Status

### Phase 1 – Conception and Initial Project Setup

- Project concept defined
- Technology stack selected
- Git repository initialized
- React/Vite frontend initialized
- Node.js/Express backend initialized
- PostgreSQL database configured

### Phase 2 – Backend Development

- PostgreSQL database created
- Database tables created:
  - categories
  - products
  - orders
  - order_items
- Sample product and category data added
- Product listing endpoint implemented
- Product detail endpoint implemented
- Order creation endpoint implemented
- Order retrieval endpoint implemented
- Backend tested using API requests

### Phase 3 – Frontend Development

- React product listing implemented
- Axios configured for API requests
- Custom `useFetch` hook created for data fetching
- Product detail page implemented
- React Router configured
- Cart state implemented using React Context
- Add-to-cart functionality implemented
- Quantity controls implemented
- Remove-from-cart functionality implemented
- Cart subtotal and total calculation implemented
- Responsive cart layout implemented
- Add-to-cart notification implemented with animation

### Phase 4 – Integration

- React frontend connected to Express backend
- Product data retrieved from PostgreSQL through the API
- Cart functionality connected to product data

### Phase 5 – Checkout and Order Placement

- Checkout page
- Order submission from frontend
- Order confirmation
- Integration with `POST /orders`

### Phase 6 – Polish and Testing

- Responsive design refinement
- Loading states
- Error handling
- Input validation
- End-to-end shopping flow testing
- UI refinement
- Documentation updates

## Backend

The backend is built with Node.js and Express.

### API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a single product |
| POST | `/orders` | Create an order |
| GET | `/orders/:id` | Get an order and its items |

### Database

TechNest uses PostgreSQL.

The database contains:

- `categories`
- `products`
- `orders`
- `order_items`

### Database Access

The Node.js backend communicates directly with PostgreSQL using
the `pg` (`node-postgres`) package.

## Setup

### 1. Install dependencies

```bash
npm install


2. Create a .env file
DATABASE_URL="your-postgresql-connection-string"

3. Start the backend
npm run dev

4. Start the frontend
npm run dev