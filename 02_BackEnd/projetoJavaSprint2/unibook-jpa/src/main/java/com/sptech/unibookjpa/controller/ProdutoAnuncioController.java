package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.repository.ProdutoAnuncioRepository;
import com.sptech.unibookjpa.repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/produtos-anuncios")
public class ProdutoAnuncioController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    VendedorRepository vendedorRepository;

    @PostMapping("/cadastrar/{vendedor}")
    public ResponseEntity cadastrarProdutoAnuncio(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                                                  @PathVariable Long vendedor){

        if(vendedorRepository.findById(vendedor).isPresent()){
            produtoAnuncio.setVendedor(vendedorRepository.findById(vendedor).get());
            produtoAnuncioRepository.save(produtoAnuncio);
            return ResponseEntity.status(201).build();
        }else{
            return ResponseEntity.status(404).build();
        }

    }

    @GetMapping
    public ResponseEntity getProdutosAnuncio(){

        if(produtoAnuncioRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findAll());
        }
    }
}
