package com.sptech.unibookjpa.model.dtos.input;

import com.sptech.unibookjpa.model.ProdutoAnuncio;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
