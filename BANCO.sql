CREATE DATABASE EMPRESAVOOS;
USE EMPRESAVOOS;

CREATE TABLE EmpresaAereas(
id_empresa int primary key auto_increment,
nome_empresa varchar(200),
nacionalidade_empresa varchar(200));

CREATE TABLE Aeronaves (
id_aeronave int primary key auto_increment,
modelo_aeronaves varchar(200),
assentos_disponiveis int,
limite_bagagem decimal(10,3));

CREATE TABLE Aeroportos(
id_aeroporto int primary key auto_increment,
nome_aeroporto varchar(200),
sigla_aeroporto varchar(100),
cidade varchar(100),
continente varchar (100)
);

CREATE TABLE voos(
id_voos int primary key auto_increment,
data_saida date,
data_chegada date,
id_decolagem int,
id_destino int,
n_passageiro int,
assentos_disponiveis int,
id_aeronave int,
id_empresa int,
foreign key (id_aeronave) references Aeronaves (id_aeronave),
foreign key (id_empresa) references EmpresaAereas(id_empresa),
foreign key (id_destino) references Aeroportos(id_aeroporto),
foreign key (id_decolagem) references Aeroportos(id_aeroporto)
);

INSERT INTO Aeronaves (modelo_aeronaves, assentos_disponiveis, limite_bagagem)
VALUES ('Boeing 737', 180, 20.5),
       ('Airbus A320', 160, 18.0),
       ('Embraer E190', 100, 15.0);
       
INSERT INTO EmpresaAereas (nome_empresa, nacionalidade_empresa)
VALUES ('Gol Linhas Aéreas', 'Brasil'),
       ('LATAM Airlines', 'Chile'),
       ('Azul Linhas Aéreas', 'Brasil');
       
INSERT INTO Aeroportos (nome_aeroporto, sigla_aeroporto, cidade, continente)
VALUES ('Aeroporto Internacional de São Paulo', 'GRU', 'São Paulo', 'América do Sul'),
       ('Aeroporto Internacional do Rio de Janeiro', 'GIG', 'Rio de Janeiro', 'América do Sul'),
       ('Aeroporto Internacional de Lisboa', 'LIS', 'Lisboa', 'Europa');

INSERT INTO voos (data_saida, data_chegada, id_decolagem, id_destino, n_passageiro, assentos_disponiveis, id_aeronave, id_empresa)
VALUES ('2025-04-01', '2025-04-01', 1, 2, 150, 30, 1, 1),  -- Gol, de GRU para GIG com Boeing 737
       ('2025-04-05', '2025-04-05', 2, 3, 120, 40, 2, 2),  -- LATAM, de GIG para LIS com Airbus A320
       ('2025-04-10', '2025-04-10', 3, 1, 90, 50, 3, 3);    -- Azul, de LIS para GRU com Embraer E190
UPDATE voos 
SET assentos_disponiveis = 30
WHERE id_voos= 1;








