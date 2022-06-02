INSERT INTO tbl_endereco (bairro, cidade, estado, logradouro, numero, cep)
        VALUES('Bairro Teste', 'Cidade Teste', 'Estado Teste', 'Rua Teste', 001, '123456');

INSERT INTO TBL_USUARIO (TIPO_USUARIO, ID, ATIVO, CPF, DATA_NASCIMENTO, EMAIL, NOME, SENHA, SEXO, FK_ENDERECO)
VALUES (1, null, false, '1234567', '06062001', 'teste@teste.com', 'Teste', '123', 'M', 1);

INSERT INTO TBL_USUARIO (TIPO_USUARIO, ID, ATIVO, CPF, DATA_NASCIMENTO, EMAIL, NOME, SENHA, SEXO, FK_ENDERECO)
VALUES (2, null, false, '7654321', '20082001', 'vendedor@teste.com', 'Teste', '123567', 'F', 1);

INSERT INTO TBL_USUARIO (TIPO_USUARIO, ID, ATIVO, CPF, DATA_NASCIMENTO, EMAIL, NOME, SENHA, SEXO, FK_ENDERECO)
VALUES (3, null, false, '7654321', '20082001', 'comprador@teste.com', 'Teste', '123567', 'F', 1)