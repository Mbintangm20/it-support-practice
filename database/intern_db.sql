CREATE DATABASE intern_db;
USE intern_db;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(50)
);

INSERT INTO users (username, password)
VALUES ('admin', '12345');
