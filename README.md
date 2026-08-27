# TechHub

TechHub is a web-based e-commerce application for purchasing consumer electronics and computer accessories.

The application allows users to browse products, view product details, search and filter products, add products to a shopping cart, proceed through checkout, and place simulated orders.

## Technology Stack

- React
- Vite
- Node.js
- Express.js
- PostgreSQL
- `pg` (node-postgres)
- Axios
- Tailwind CSS
- React Router
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
- Responsive design
- Loading states
- Error handling

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
  - `categories`
  - `products`
  - `orders`
  - `order_items`
- Sample product and category data added
- Product listing endpoint implemented
- Product detail endpoint implemented
- Order creation endpoint implemented
- Order retrieval endpoint implemented
- Server-side order total calculation implemented
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
- Add-to-cart notification implemented

### Phase 4 – Integration

- React frontend connected to Express backend
- Product data retrieved from PostgreSQL through the API
- Cart functionality connected to product data
- Checkout connected to the order API
- Orders persisted in PostgreSQL

### Phase 5 – Checkout and Order Placement

- Responsive checkout page implemented
- Order submission from frontend implemented
- `POST /orders` integration implemented
- Server-side order total calculation implemented
- Orders and order items persisted in PostgreSQL
- Order confirmation/summary page implemented
- Cart cleared after successful order creation

### Phase 6 – Search, Filtering and UI Polish

- Product search implemented
- Category filtering implemented
- Responsive product grid implemented
- Product card UI refined
- Loading states implemented
- Error handling implemented
- Empty cart state handled
- Responsive design refined

### Phase 7 – Database Reproducibility and Documentation

- Database schema exported and organized into `database/schema.sql`
- Database structure documented
- Initial categories and products included as seed data
- Project setup instructions documented in README

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

TechHub uses PostgreSQL.

The database contains:

- `categories`
- `products`
- `orders`
- `order_items`

### Database Access

The Node.js backend communicates directly with PostgreSQL using the `pg` (`node-postgres`) package.

## Project Structure

```text
TechHub/
├── client/
│   └── vite-project/
│       ├── src/
│       │   ├── components/
│       │   ├── context/
│       │   ├── hooks/
│       │   └── ...
│       └── ...
│
├── server/
│   ├── database/
│   │   └── schema.sql
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   └── ...
│
└── README.md
```

## Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd TechHub
```

### 2. Install backend dependencies

Navigate to the server directory:

```bash
cd server
npm install
```

### 3. Create the PostgreSQL database

Create a PostgreSQL database named `TechHub`.

Using `psql`:

```bash
createdb -U postgres TechHub
```

Alternatively, the database can be created through pgAdmin. This is what I personally used. 

### 4. Create the database tables and seed data

From the `server` directory, run:

```bash
psql -U postgres -d TechHub -f database/schema.sql
```

This creates the database tables and inserts the initial categories and products.

### 5. Configure environment variables

Create a `.env` file in the `server` directory:

```env
DATABASE_URL="your-postgresql-connection-string"
```

Replace the connection string with the credentials and connection details for your PostgreSQL database.

### 6. Start the backend

From the `server` directory:

```bash
npm run dev
```

### 7. Install frontend dependencies

Open a second terminal and navigate to the frontend:

```bash
cd client/vite-project
npm install
```

### 8. Start the frontend

```bash
npm run dev
```

The Vite development server will provide the local URL for the frontend.

## Database Setup File

The project includes:

```text
server/database/schema.sql
```

This file contains:

- Database table definitions
- Primary keys
- Foreign keys
- Constraints
- Initial category data
- Initial product data

This allows the database structure and initial application data to be reproduced without manually creating the tables or entering the products.

## Current Application Flow

```text
Product Catalog
  ↓
Product Details
  ↓
Add to Cart
  ↓
Shopping Cart
  ↓
Checkout
  ↓
POST /orders
  ↓
PostgreSQL
  ↓
Order Confirmation
```

## Future Improvements

Potential future improvements include:

- Persistent cart storage
- User authentication
- Customer accounts
- Real payment integration
- Pagination
- Advanced product filtering
- Production deployment