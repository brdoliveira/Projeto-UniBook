package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "tblProdutoCarrinho")
public class ProdutoCarrinho {

    public ProdutoCarrinho() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fkProdutoAnuncio", referencedColumnName = "id")
    private ProdutoAnuncio produtoAnuncio;


    @NotNull
    @ManyToOne
    @JoinColumn(name = "fkCarrinho", referencedColumnName="id")
    private Carrinho carrinho;


    public ProdutoCarrinho(Long id, ProdutoAnuncio produtosAnuncio) {
        this.id = id;
        this.produtoAnuncio = produtosAnuncio;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ProdutoAnuncio getProdutoAnuncio() {
        return produtoAnuncio;
    }

    public void setProdutoAnuncio(ProdutoAnuncio produtoAnuncio) {
        this.produtoAnuncio = produtoAnuncio;
    }

    public Carrinho getCarrinho() {
        return carrinho;
    }

    public void setCarrinho(Carrinho carrinho) {
        this.carrinho = carrinho;
    }

    /*

    public double calculaTotalVenda(){
        double total = 0.0;

        for (ProdutoAnuncio p : produtos) {
            total += p.getPreco();
        }

        return total;
    }

    public void exibeProdutosCarrinho(){
        for (ProdutoAnuncio p:produtos) {
            System.out.println(p);
        }
    }

    public double finalizarCompra(){
        double total = 0.0;

        for (ProdutoAnuncio p : produtos) {
            total += p.getPreco();
            p.setQuantidade(p.getQuantidade() -1 );
        }

        return total;
    }
*/


}
