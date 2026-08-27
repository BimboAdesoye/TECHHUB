```sql
-- ============================================
-- TechHub Database Schema
-- ============================================

-- Categories
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Products
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT,
    price NUMERIC(10, 2) NOT NULL,
    image_url TEXT,
    category_id INTEGER NOT NULL,

    CONSTRAINT fk_product_category
        FOREIGN KEY (category_id)
        REFERENCES categories(id)
);

-- Orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    total NUMERIC(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Order Items
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    price NUMERIC(10, 2) NOT NULL,

    CONSTRAINT fk_order_item_order
        FOREIGN KEY (order_id)
        REFERENCES orders(id),

    CONSTRAINT fk_order_item_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
);


-- ============================================
-- Seed Data
-- ============================================

-- Categories
INSERT INTO categories (name)
VALUES
    ('Laptops'),
    ('Smartphones'),
    ('Audio'),
    ('Gaming'),
    ('Accessories');


-- Products
INSERT INTO products
    (name, description, price, image_url, category_id)
VALUES
(
    'TechHub Pro Laptop',
    'High-performance laptop for work, development, and everyday use.',
    850000.00,
    '/images/laptop.jpg',
    1
),
(
    'TechHub X1 Smartphone',
    'Modern smartphone with a high-resolution display and powerful processor.',
    450000.00,
    '/images/smartphone.jpg',
    2
),
(
    'TechHub Wireless Headphones',
    'Wireless over-ear headphones with immersive sound and long battery life.',
    120000.00,
    '/images/headphone.jpg',
    3
),
(
    'TechHub Gaming Mouse',
    'Precision gaming mouse with adjustable DPI and programmable buttons.',
    45000.00,
    '/images/gaming-mouse.jpg',
    4
),
(
    'TechHub Mechanical Keyboard',
    'Mechanical keyboard designed for gaming and productive typing.',
    85000.00,
    '/images/keyboard.jpg',
    4
),
(
    'TechHub USB-C Hub',
    'Multi-port USB-C hub with HDMI, USB, and card-reader connectivity.',
    35000.00,
    '/images/usb-hub.jpg',
    5
),
(
    'TechHub Laptop Stand',
    'Adjustable aluminum laptop stand designed for comfortable desk setups.',
    30000.00,
    '/images/laptop-stand.jpg',
    5
);
```