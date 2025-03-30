create datABASE BLOG;
 use blog;
 
CREATE TABLE `postagens` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `titulo` VARCHAR(200) NOT NULL,
  `conteudo` LONGTEXT,
  `autor_id` INT NOT NULL,
  `imagem_capa` TEXT,
  `postado_em` DATETIME NOT NULL,
  `categoria_id` INT NOT NULL,
  `regiao_id` INT NOT NULL,
  `ativa` BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  FOREIGN KEY (`regiao_id`) REFERENCES `regioes` (`id`),
  FOREIGN KEY (`autor_id`) REFERENCES `autores` (`id`)
);

CREATE TABLE `usuarios` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `usuario` VARCHAR(20) UNIQUE NOT NULL,
  `senha` VARCHAR(255) NOT NULL,
  `nome` VARCHAR(100) NOT NULL,
  `data_criacao` DATETIME NOT NULL,
  `data_nascimento` DATE NOT NULL
);

CREATE TABLE `autores` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `usuario_id` INT UNIQUE NOT NULL,
  `biografia` LONGTEXT,
  `imagem` TEXT,
  `link` TEXT,
  FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
);

CREATE TABLE `categorias` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `categoria` VARCHAR(100) NOT NULL,
  `SLUG` VARCHAR(100)
);

CREATE TABLE `regioes` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `regiao` VARCHAR(100) NOT NULL,
  `SLUG` VARCHAR(100)
);

CREATE TABLE `comentarios` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `comentario` VARCHAR(255) NOT NULL,
  `usuario_id` INT NOT NULL,
  `postado_em` DATETIME NOT NULL,
  `postagem_id` INT NOT NULL,
  `ativa` BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  FOREIGN KEY (`postagem_id`) REFERENCES `postagens` (`id`)
);

INSERT INTO `categorias` (`categoria`, `SLUG`) 
VALUES 
('Tecnologia', 'tecnologia'),
('Saúde', 'saude'),
('Viagens', 'viagens');

INSERT INTO `regioes` (`regiao`, `SLUG`) 
VALUES 
('Nordeste', 'nordeste'),
('Sudeste', 'sudeste'),
('Sul', 'sul');


INSERT INTO `usuarios` (`usuario`, `senha`, `nome`, `data_criacao`, `data_nascimento`) 
VALUES 
('johndoe', 'senha123', 'John Doe', NOW(), '1990-05-15'),
('maryjane', 'senha456', 'Mary Jane', NOW(), '1995-07-25');

INSERT INTO `autores` (`usuario_id`, `biografia`, `imagem`, `link`) 
VALUES 
(1, 'John Doe é um escritor e entusiasta de tecnologia.', 'imagem_john.jpg', 'https://johnsblog.com'),
(2, 'Mary Jane escreve sobre saúde e bem-estar.', 'imagem_mary.jpg', 'https://maryshealth.com');

INSERT INTO `postagens` (`titulo`, `conteudo`, `autor_id`, `imagem_capa`, `postado_em`, `categoria_id`, `regiao_id`, `ativa`) 
VALUES 
('O Futuro da Inteligência Artificial', 'A inteligência artificial está moldando o futuro da tecnologia...', 1, 'capa_futuro_ai.jpg', NOW(), 1, 2, TRUE),
('Cuidados com a saúde mental', 'A saúde mental é crucial para o bem-estar geral...', 2, 'capa_saude_mental.jpg', NOW(), 2, 1, TRUE);


INSERT INTO `comentarios` (`comentario`, `usuario_id`, `postado_em`, `postagem_id`, `ativa`) 
VALUES 
('Muito interessante! A IA está realmente mudando tudo.', 1, NOW(), 5, TRUE),
('Excelente artigo sobre saúde mental, muito útil!', 2, NOW(), 6, TRUE);


SELECT * FROM `postagens` ;
select * from `usuarios`;
SELECT * FROM `usuarios` WHERE `usuario` = 'Biografia do autor';

  SELECT * FROM `comentarios`;

  