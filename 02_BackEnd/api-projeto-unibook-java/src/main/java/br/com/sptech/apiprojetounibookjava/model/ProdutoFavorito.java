package br.com.sptech.apiprojetounibookjava.model;

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

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fkFavorito", referencedColumnName="id")
    private Favorito favorito;
    
    public ProdutoFavorito(Long id, ProdutoAnuncio produtoAnuncio) {
        this.id = id;
        this.produtoAnuncio = produtoAnuncio;
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

    public Favorito getFavorito() {
        return favorito;
    }

    public void setFavorito(Favorito favorito) {
        this.favorito = favorito;
    }

}
