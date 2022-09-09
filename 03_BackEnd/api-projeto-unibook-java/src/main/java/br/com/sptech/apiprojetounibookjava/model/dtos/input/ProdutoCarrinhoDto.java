package br.com.sptech.apiprojetounibookjava.model.dtos.input;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

public class ProdutoCarrinhoDto {

    public ProdutoCarrinhoDto(Long produtoAnuncio, Long carrinho) {
        this.produtoAnuncio = produtoAnuncio;
        this.carrinho = carrinho;
    }

    public ProdutoCarrinhoDto() {
    }
    @NotNull
    @Column
    private Long produtoAnuncio;

    @NotNull
    @Column
    private Long carrinho;


    public Long getCarrinho() {
        return carrinho;
    }

    public void setCarrinho(Long carrinho) {
        this.carrinho = carrinho;
    }

    public Long getProdutoAnuncio() {
        return produtoAnuncio;
    }

    public void setProdutoAnuncio(Long produtoAnuncio) {
        this.produtoAnuncio = produtoAnuncio;
    }

}
