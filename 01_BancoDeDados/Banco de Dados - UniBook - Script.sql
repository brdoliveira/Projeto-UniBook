CREATE DATABASE unibooks;

USE unibooks;

CREATE TABLE etiqueta(
  idEtiqueta 			INT PRIMARY KEY,
  nomeEtiqueta			VARCHAR(25),
  tipoEtiqueta 			VARCHAR(45),
  descricaoEtiqueta	    VARCHAR(100)
);

CREATE TABLE produto (
  idProduto 					INT PRIMARY KEY,
  nomeProduto					VARCHAR(45),
  tipoProduto					VARCHAR(20),
  precoProduto					DECIMAL(4,2),
  categoriaProduto 				VARCHAR(20),
  fkEtiqueta 					INT,
  foreign key (fkEtiqueta) references etiqueta(idEtiqueta)
);

CREATE TABLE endereco (
  idEndereco 					INT PRIMARY KEY,
  ruaEndereco					VARCHAR(45),
  cidadeEndereco				VARCHAR(45), 
  estadoEndereco 				CHAR(2), 
  logradouroEndereco			VARCHAR(45),
  numeroEndereco 				VARCHAR(15), 
  cepEndereco 					VARCHAR(45) 
);

CREATE TABLE usuario_comprador_vendedor(
  idUsuario 				INT PRIMARY KEY,
  nomeUsuario				VARCHAR(45),
  dataNascimentoUsuario	    DATE,
  sexoUsuario				CHAR(1), CHECK(sexoUsuario = 'm' OR sexoUsuario = 'f'),
  cpfUsuario 				VARCHAR(25),
  emailUsuario 				VARCHAR(45),
  senhaUsuario 				VARCHAR(25),
  ativoUsuario				CHAR(20),
  fkEndereco				INT,
  FOREIGN KEY(fkEndereco) REFERENCES endereco(idEndereco)
);


CREATE TABLE usuario_adm(
  idU_adm 						INT PRIMARY KEY,
  nomeU_adm 					VARCHAR(45), 
  dataNascimentoU_adm			DATE,
  sexoU_adm 					CHAR(1), CHECK(sexoU_adm = 'm' OR sexoU_adm = 'f'),
  cpfU_adm 						VARCHAR(25), 
  emailU_adm 					VARCHAR(45),
  senhaU_adm 					VARCHAR(25),
  ativoU_adm 					CHAR(20),
  fkEndereco					INT,
  FOREIGN KEY(fkEndereco) REFERENCES endereco(idEndereco)
);

CREATE TABLE pedidos(
	fkUsuario_vendedor_comprador INT,
    fkUsuario_adm 				 INT,
    fkProduto					 INT,
    dataP						 DATE,
    quantidade					 INT,
    PRIMARY KEY(fkUsuario_vendedor_comprador, fkUsuario_adm, fkProduto)
);

