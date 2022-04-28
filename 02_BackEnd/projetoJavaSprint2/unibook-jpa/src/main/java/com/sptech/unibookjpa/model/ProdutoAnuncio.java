package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.PastOrPresent;

@Entity
@Table(name = "tblProdutoAnuncio")
public class ProdutoAnuncio {

    public ProdutoAnuncio() {
    }

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotBlank
    @Length(min = 10, max = 150)
    @Column
    private String nomeProduto;

    @NotNull
    @NotBlank
    @Length(min = 10, max = 30)
    @Column
    private String tipo;

    @NotNull
    @NotBlank
    @Length(min = 10, max = 13)
    @Column
    private String isbn;

    @NotNull
    @NotBlank
    @Length(min = 15, max = 150)
    @Column
    private String autor;

    @NotNull
    @NotBlank
    @Length(min = 15, max = 150)
    @Column
    private String ilustrador;

    @NotNull
    @NotBlank
    @Length(min = 10, max = 50)
    @Column
    private String edicao;

    @Min(1)
    @NotNull
    @Column
    private double preco;

    @NotNull
    @NotBlank
    @Length(min = 15, max = 150)
    @Column
    private String tradutor;

    @NotNull
    @Column
    private int ano;
    @Min(1)
    @NotNull
    @Column
    private int quantidade;

    @NotNull
    @NotBlank
    @Length(min = 5, max = 50)
    @Column
    private String generoLiteral;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fkUsuarioVendedor", referencedColumnName = "id")
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
