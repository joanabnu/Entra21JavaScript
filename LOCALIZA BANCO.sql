CREATE DATABASE Localiza;
USE localiza;

CREATE TABLE `VEICULOS` (
  `ID` INT PRIMARY KEY AUTO_INCREMENT,
  `ano` int,
  `marca_id` int NOT NULL,
  `veiculo` varchar(200)
);

CREATE TABLE `MARCAS` (
  `ID` INT PRIMARY KEY AUTO_INCREMENT,
  `marca_nome` varchar(200)
);
ALTER TABLE `VEICULOS` ADD FOREIGN KEY (`marca_id`) references `MARCAS`(`ID`);

-- Inserir valores na tabela MARCAS
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Fiat');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Volkswagen');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Chevrolet');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Honda');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Toyota');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Ford');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('BMW');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Mercedes-Benz');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Audi');
INSERT INTO `MARCAS` (`marca_nome`) VALUES ('Nissan');

-- Inserir valores na tabela VEICULOS
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2021, 1, 'Fiat Uno');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2020, 2, 'Volkswagen Gol');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2019, 3, 'Chevrolet Onix');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2022, 4, 'Honda Civic');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2023, 5, 'Toyota Corolla');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2021, 6, 'Ford Focus');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2020, 7, 'BMW 320i');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2022, 8, 'Mercedes-Benz A-Class');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2021, 9, 'Audi A3');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2020, 10, 'Nissan Kicks');

-- Inserir mais alguns veículos com marcas já inseridas
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2022, 1, 'Fiat Argo');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2023, 2, 'Volkswagen T-Cross');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2019, 3, 'Chevrolet Tracker');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2021, 4, 'Honda HR-V');
INSERT INTO `VEICULOS` (`ano`, `marca_id`, `veiculo`) VALUES (2020, 5, 'Toyota Hilux');
SELECT VEICULOS.veiculo, VEICULOS.ano, MARCAS.marca_nome
FROM VEICULOS
INNER JOIN MARCAS ON MARCAS.ID = VEICULOS.marca_id;
CREATE VIEW veiculosMarcas as
SELECT VEICULOS.veiculo, MARCAS.marca_nome
FROM VEICULOS
INNER JOIN MARCAS ON MARCAS.ID = VEICULOS.marca_id;
SELECT * FROM veiculosMarcas;

SELECT  COUNT(*) AS "TOTAL VEICULOS" FROM veiculos
group by marca_id;

SELECT COUNT(*) AS "TOTAL VEICULOS", MARCAS.marca_nome
FROM VEICULOS
INNER JOIN MARCAS ON VEICULOS.marca_id = MARCAS.ID
GROUP BY MARCAS.marca_nome;

SELECT * FROM VEICULOS
WHERE ano = 2023;

SELECT COUNT(*) AS TOTAL, ano
FROM veiculos
group by ano;

SELECT * FROM veiculos
WHERE veiculo LIKE "F%";

-- %F% CONTEM F
-- F% COMECA COM F
-- %F TERMINA COM F

