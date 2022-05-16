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
@RequestMapping("/produto-carrinho")
public class ProdutoCarrinhoController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;


    @PostMapping("/adicionar-produto/{produtoAnuncio}")
    public ResponseEntity adicionarProduto(@Valid @RequestBody ProdutoCarrinho produtoCarrinho,
                                           @PathVariable Long produtoAnuncio){

        produtoCarrinho.setProdutoAnuncio(produtoAnuncioRepository.findById(produtoAnuncio).get());

        try{
            ProdutoCarrinho _produtoCarrinho = produtoCarrinhoRepository.save(produtoCarrinho);
            return new ResponseEntity<>(null, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity getProdutosCarrinho(){
        List<ProdutoCarrinho> lista = new ArrayList<>();
        lista.addAll(produtoCarrinhoRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }

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

}

