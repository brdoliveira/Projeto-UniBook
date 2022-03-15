package com.sptech.unibook.model;

import java.util.ArrayList;
import java.util.List;



public class Carrinho {

    private List<ProdutoAnuncio> produtos;

    public Carrinho() {
        this.produtos = new ArrayList<>();
    }

    public void adicionarProduto(ProdutoAnuncio p){
        produtos.add(p);
    }

    public void removerProduto(ProdutoAnuncio p){
        produtos.remove(p);
    }

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


}
