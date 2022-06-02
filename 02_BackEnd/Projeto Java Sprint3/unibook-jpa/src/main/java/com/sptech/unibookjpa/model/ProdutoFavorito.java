package com.sptech.unibookjpa.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;


@Entity
@Table(name = "tblProdutoFavorito")
public class ProdutoFavorito {

    public ProdutoFavorito() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fkProdutoAnuncio", referencedColumnName = "id")
    private ProdutoAnuncio produtoAnuncio;


    public ProdutoFavorito(Long id, ProdutoAnuncio produtosAnuncio) {
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


    /*

    public double calculaTotalVenda(){
        double total = 0.0;

        for (ProdutoAnuncio p : produtos) {
            total += p.getPreco();
        }

        return total;
    }

    public void exibeProdutosFavorito(){
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
