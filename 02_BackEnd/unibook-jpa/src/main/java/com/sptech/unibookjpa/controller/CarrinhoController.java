package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Carrinho;
import com.sptech.unibookjpa.repository.CarrinhoRepository;
import com.sptech.unibookjpa.repository.CompradorRepository;
import com.sptech.unibookjpa.repository.ProdutoCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/carrinho")
public class CarrinhoController {

    @Autowired
    CarrinhoRepository carrinhoRepository;
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;
    @Autowired
    CompradorRepository compradorRepository;


    @PostMapping("/adicionar-produto/{comprador}")
    public ResponseEntity adicionarProduto(@Valid @RequestBody Carrinho carrinho,
                                           @PathVariable Long comprador){

        carrinho.setProdutosCarrinho(produtoCarrinhoRepository.findAll());
        carrinho.setComprador(compradorRepository.findById(comprador).get());

        try{
            Carrinho _carrinho = carrinhoRepository.save(carrinho);
            return new ResponseEntity<>(null, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping
    public ResponseEntity getCarrinho(){
        List<Carrinho> lista = new ArrayList<>();
        lista.addAll(carrinhoRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }



}
