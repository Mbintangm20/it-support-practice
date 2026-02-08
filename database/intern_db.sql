CREATE DATABASE intern_db;
USE intern_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(20)
);

-- password = 12345
INSERT INTO users (username, password, role)
VALUES (
  'admin',
  '$2y$10$REPLACE_DENGAN_HASH_PASSWORD',
  'admin'
);
