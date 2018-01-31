CREATE DATABASE bamazon_db;
USE bamazon_db;
CREATE TABLE products (

id INTEGER (11) AUTO_INCREMENT NOT NULL,
productName VARCHAR (40),
departmentName VARCHAR(40),
price DECIMAL (10) NULL,
stockQuanity INTEGER (10) NULL,
PRIMARY KEY(id)

);

SELECT * FROM products;

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("headphones", "electronics", 150.00, 21);

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("smartwatch", "electronics", 120.99, 10);

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("hoodie", "activewear", 50.00, 20);

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("joggers", "activewear", 45.99, 18);

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("tshirt", "activewear", 29.00, 15);

INSERT INTO products (productName, departmentName, price, stockQuanity)
VALUES("sneakers", "athletics", 80.00, 30);

