package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;

import javax.persistence.*;


@Entity
@NoArgsConstructor
@Table(name = "tblProdutoCarrinho")
public class ProdutoCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fkProdutoAnuncio", referencedColumnName = "id", nullable = false)
    private ProdutoAnuncio produtoAnuncio;


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
