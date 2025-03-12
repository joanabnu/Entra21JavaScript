CREATE DATABASE Loja;
USE loja;

CREATE TABLE produtos(
id_produtos INT PRIMARY KEY auto_increment,
nome_produto TEXT,
preco_produto decimal(10,2),
estoque int);

INSERT INTO produtos(nome_produto, preco_produto,estoque) VALUES
('Leite', 10.00,100);

