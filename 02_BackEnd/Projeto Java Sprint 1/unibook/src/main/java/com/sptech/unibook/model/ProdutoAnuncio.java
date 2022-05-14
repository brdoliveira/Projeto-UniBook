package com.sptech.unibook.model;

public class ProdutoAnuncio {

    private String nomeProduto;
    private String tipo;
    private String isbn;
    private String autor;
    private String ilustrador;
    private String edicao;
    private double preco;
    private String tradutor;
    private int ano;
    private int quantidade;
    private String generoLiteral;

    public ProdutoAnuncio(String nomeProduto, String tipo, String isbn, String autor, String ilustrador,
                          String edicao, double preco, String tradutor, int ano, int quantidade,
                          String generoLiteral) {

        this.nomeProduto = nomeProduto;
        this.tipo = tipo;
        this.isbn = isbn;
        this.autor = autor;
        this.ilustrador = ilustrador;
        this.edicao = edicao;
        this.preco = preco;
        this.tradutor = tradutor;
        this.ano = ano;
        this.quantidade = quantidade;
        this.generoLiteral = generoLiteral;


    }

    public String getNomeProduto() {
        return nomeProduto;
    }

    public void setNomeProduto(String nomeProduto) {
        this.nomeProduto = nomeProduto;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getIlustrador() {
        return ilustrador;
    }

    public void setIlustrador(String ilustrador) {
        this.ilustrador = ilustrador;
    }

    public String getEdicao() {
        return edicao;
    }

    public void setEdicao(String edicao) {
        this.edicao = edicao;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    public String getTradutor() {
        return tradutor;
    }

    public void setTradutor(String tradutor) {
        this.tradutor = tradutor;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    public String getGeneroLiteral() {
        return generoLiteral;
    }

    public void setGeneroLiteral(String generoLiteral) {
        this.generoLiteral = generoLiteral;
    }


    @Override
    public String toString() {
        return "Produto Anunciado:\n" +
                "Nome: " + nomeProduto + ", \n" +
                "Tipo: " + tipo + ", \n" +
                "ISBN" + isbn + ", \n" +
                "Autor: " + autor + ", \n" +
                "Ilustrador: " + ilustrador + ", \n" +
                "Edição: " + edicao + ", \n" +
                "Preço: " + preco + ", \n" +
                "Tradutor: " + tradutor + ", \n" +
                "Ano: " + ano + ", \n" +
                "Quantidade: " + quantidade + ", \n" +
                "Gênero Literal: " + generoLiteral + " \n";
    }
}