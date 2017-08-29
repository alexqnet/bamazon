DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;
CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(20) NULL,
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

USE bamazon;
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("iPad", "Electronics", 400, 60);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("MacBook", "Electronics", 1200, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Casio", "Watches", 14, 75);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Movado", "Watches", 600, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Table", "Furniture", 140, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Microwave", "Appliances", 100, 26);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Appliances", 25, 43);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Football", "Sports", 25, 80);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Bicycle", "Sports", 250, 25);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Adidas", "Shoes", 75, 17);


SELECT * FROM products;
