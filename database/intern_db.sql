CREATE DATABASE it_support;

USE it_support;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50),
    role VARCHAR(20)
);

INSERT INTO users (username, password, role)
VALUES ('admin', '12345', 'admin');
