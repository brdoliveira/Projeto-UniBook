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
@RequestMapping("/produto-anuncio")
public class ProdutoAnuncioController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    VendedorRepository vendedorRepository;

    @PostMapping("/cadastrar/{vendedor}")
    public ResponseEntity cadastrarProdutoAnuncio(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                                                  @PathVariable Long vendedor){

        produtoAnuncio.setVendedor(vendedorRepository.findById(vendedor).get());

        try{
            ProdutoAnuncio _produtoAnuncio = produtoAnuncioRepository.save(produtoAnuncio);
            return new ResponseEntity<>(null, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity getProdutosAnuncio(){
        List<ProdutoAnuncio> lista = new ArrayList<>();
        lista.addAll(produtoAnuncioRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }



}
