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

CREATE TABLE usuario_comprador_vendedor_adm(
  idUsuario 				INT PRIMARY KEY,
  nomeUsuario				VARCHAR(45),
  dataNascimentoUsuario	    DATE,
  sexoUsuario				CHAR(1), CHECK(sexoUsuario = 'm' OR sexoUsuario = 'f'),
  cpfUsuario 				VARCHAR(25),
  emailUsuario 				VARCHAR(45),
  senhaUsuario 				VARCHAR(25),
  ativoUsuario				CHAR(20),
  tipoUsuario				CHAR(1), CHECK(tipoUsuario = 'a' OR tipoUsuario = 'v' OR tipoUsuario = 'c'),
  fkEndereco				INT,
  fkUsuarioAdm 				INT,
  FOREIGN KEY(fkEndereco) REFERENCES endereco(idEndereco),
  foreign key(fkUsuarioAdm) references usuario_comprador_vendedor_adm(idUsuario)
);

CREATE TABLE pedidos(
	fkUsuario_vendedor_comprador INT,
    fkProduto					 INT,
    dataP						 DATE,
    quantidade					 INT,
    PRIMARY KEY(fkUsuario_vendedor_comprador, fkProduto)
);

