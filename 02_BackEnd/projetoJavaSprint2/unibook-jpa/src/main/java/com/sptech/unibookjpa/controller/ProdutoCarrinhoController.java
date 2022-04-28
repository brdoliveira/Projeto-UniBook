package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.ProdutoCarrinho;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.repository.ProdutoAnuncioRepository;
import com.sptech.unibookjpa.repository.ProdutoCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/produtos-carrinhos")
public class ProdutoCarrinhoController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;


    @PostMapping("/adicionar-produto/{produtoAnuncio}")
    public ResponseEntity adicionarProduto(@Valid @RequestBody ProdutoCarrinho produtoCarrinho,
                                           @PathVariable Long produtoAnuncio){


        if(produtoAnuncioRepository.findById(produtoAnuncio).isPresent()){

            produtoCarrinho.setProdutoAnuncio(produtoAnuncioRepository.findById(produtoAnuncio).get());
            produtoCarrinhoRepository.save(produtoCarrinho);
            return ResponseEntity.status(201).build();
        }else{
            return ResponseEntity.status(404).build();
        }

    }

    @GetMapping
    public ResponseEntity getProdutosCarrinho(){

        if(produtoCarrinhoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(produtoCarrinhoRepository.findAll());
        }
    }
/*

    @DeleteMapping("/remover-produto")
    public void removerProduto(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody ProdutoCarrinho carrinho){

    }

    @GetMapping("/calcular/total-venda")
    public double calculaTotalVenda(@Valid @RequestBody ProdutoCarrinho carrinho){
        return 0.0;
    }
    @GetMapping("/produtos-carrinho")
    public void exibeProdutosCarrinho(@Valid @RequestBody ProdutoCarrinho carrinho){

    }

    @GetMapping("/finalizar-compra")
    public double finalizarCompra(@Valid @RequestBody ProdutoCarrinho carrinho){
        return 0.0;
    }
*/

}

