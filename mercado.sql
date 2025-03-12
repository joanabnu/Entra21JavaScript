
INSERT INTO marcas (nome_marcas)
VALUES ('Apple');
use mercado;

INSERT INTO cupom_itens (cupom_id, produto_id, quantidade, valor_unitario, valor_total)
VALUES (1, 19, 1.000, 12000.00, 12000.00);


SELECT * FROM cupom_itens;
select * from produtos;
SELECT * FROM cupons,produtos;

ALTER TABLE cupom_itens DROP FOREIGN KEY cupom_itens_ibfk_1; -- Remover a chave estrangeira incorreta

-- Adicionar a chave estrangeira para `cupom_id` e `produto_id` corretamente
ALTER TABLE cupom_itens
ADD CONSTRAINT fk_cupom FOREIGN KEY (cupom_id) REFERENCES cupons(id);

ALTER TABLE cupom_itens
ADD CONSTRAINT fk_produto FOREIGN KEY (produto_id) REFERENCES produtos(id);
SELECT * FROM cupons WHERE id = 1;
SELECT * FROM produtos WHERE id = 1;



INSERT INTO tipos (descricao_tipo, subcategoria, categoria)
VALUES ('Eletrônicos', 'Computadores', 'Tecnologia');

INSERT INTO cupons (data_emissao, hora_emissao, forma_pagamento_id, valor)
VALUES ('2025-03-10', '14:30:00', 1, 12000.00);

INSERT INTO produtos (descricao_cupom, descricao_produto, tipo_id, codigoBarras, marca_id)
VALUES ('Desconto Especial', 'MacBook Pro 16', 1, '1234567890123', 1);

INSERT INTO forma_pagemento (forma_pagamento_descricao)
VALUES ('Cartão de Crédito');
Select * from marcas;

ALTER TABLE produtos ADD FOREIGN KEY (tipo_id) REFERENCES tipos (id);
ALTER TABLE produtos ADD FOREIGN KEY (marca_id) REFERENCES marcas (id);
ALTER TABLE cupons ADD FOREIGN KEY (forma_pagamento_id) REFERENCES forma_pagemento (id);
ALTER TABLE cupom_itens ADD FOREIGN KEY (cupom_id) REFERENCES cupons (id);
ALTER TABLE cupom_itens ADD FOREIGN KEY (produto_id) REFERENCES produtos (id);
