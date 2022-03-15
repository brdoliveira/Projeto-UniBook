package com.sptech.unibook.controller;

import com.sptech.unibook.model.Carrinho;
import com.sptech.unibook.model.ProdutoAnuncio;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

    @PostMapping("/adicioanr-produto")
    public void adicionarProduto(@RequestBody ProdutoAnuncio produtoAnuncio,
                                 @RequestBody Carrinho carrinho){
        carrinho.adicionarProduto(produtoAnuncio);
    }

    @DeleteMapping("/remover-produto")
    public void removerProduto(@RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody Carrinho carrinho){
        carrinho.removerProduto(produtoAnuncio);
    }

    @GetMapping("/calcular/total-venda")
    public double calculaTotalVenda(@RequestBody Carrinho carrinho){
        return carrinho.calculaTotalVenda();
    }
    @GetMapping("/produtos-carrinho")
    public void exibeProdutosCarrinho(@RequestBody Carrinho carrinho){
        carrinho.exibeProdutosCarrinho();
    }

    @GetMapping("/finalizar-compra")
    public double finalizarCompra(@RequestBody Carrinho carrinho){
       return carrinho.finalizarCompra();
    }

}
