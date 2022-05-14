package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;
import javax.persistence.*;

@Entity
@Table(name = "tblProdutoAnuncio")
@NoArgsConstructor
public class ProdutoAnuncio {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomeProduto;

    @Column(nullable = false)
    private String tipo;

    @Column(nullable = false)
    private String isbn;

    @Column(nullable = false)
    private String autor;

    @Column(nullable = false)
    private String ilustrador;

    @Column(nullable = false)
    private String edicao;

    @Column(nullable = false)
    private double preco;

    @Column(nullable = false)
    private String tradutor;

    @Column(nullable = false)
    private int ano;

    @Column(nullable = false)
    private int quantidade;

    @Column(nullable = false)
    private String generoLiteral;

    @ManyToOne
    @JoinColumn(name = "fkUsuarioVendedor", referencedColumnName = "id", nullable = false)
    private Vendedor vendedor;

    public ProdutoAnuncio(Long id, String nomeProduto, String tipo, String isbn,
                          String autor, String ilustrador, String edicao, double preco,
                          String tradutor, int ano, int quantidade, String generoLiteral,
                          Vendedor vendedor) {
        this.id = id;
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
        this.vendedor = vendedor;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public Vendedor getVendedor() {
        return vendedor;
    }

    public void setVendedor(Vendedor vendedor) {
        this.vendedor = vendedor;
    }
}
