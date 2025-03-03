CREATE DATABASE LojaVirtual;
USE LojaVirtual;
CREATE TABLE clientes (
id_cliente INT primary key auto_increment,
nome VARCHAR(100) NOT NULL,
email VARCHAR(150) UNIQUE,
data_cadastro date
);
INSERT INTO clientes (nome,email,data_cadastro) VALUES
('Joana Maria','joana.maria@exemple.com',CURDATE()),
('Carlos Henrique','carlos.henrique@exemple.com',CURDATE()),
('Mariana Souza',' mariana.souza@exemple.com',CURDATE());
SELECT * FROM clientes;
SELECT nome, email FROM clientes;
UPDATE clientes
SET email = 'carlos@email.com'
WHERE id_cliente = 2;
DELETE FROM clientes
WHERE email = 'carlos@email.com';

CREATE TABLE Pedidos (
id_pedido INT PRIMARY KEY auto_increment,
id_cliente INT,
valor_total DECIMAL(10,2)NOT NULL,
data_pedido DATETIME DEFAULT NOW(),
FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente));

INSERT INTO Pedidos (id_cliente, valor_total) VALUES
(1,250.75),
(3,499.99);








