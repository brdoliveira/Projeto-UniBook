package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Comprador;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Vendedor;
import com.sptech.unibookjpa.repository.CompradorRepository;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/comprador")
public class CompradorController {

    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    CompradorRepository compradorRepository;

    @PostMapping("/cadastrar/{endereco}")
    public ResponseEntity<Vendedor> cadastrarComprador(@Valid @RequestBody Comprador comprador,
                                                       @PathVariable Long endereco){


        comprador.setEndereco(enderecoRepository.findById(endereco).get());

        try{
            Comprador _comprador = compradorRepository.save(comprador);
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping
    public ResponseEntity getCompradores(){
        List<Comprador> lista = new ArrayList<>();
        lista.addAll(compradorRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }



    @PostMapping("/adicionar-favorito")
    public void adicionarFavorito(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                                  @RequestBody Comprador comprador){
        comprador.adicionarFavorito(produtoAnuncio);
    }

    @DeleteMapping("/remover-favorito")
    public void removerFavorito(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                                @RequestBody Comprador comprador){
        comprador.removerFavorito(produtoAnuncio);
    }

    @GetMapping("/favoritos")
    public void verFavoritos(@Valid @RequestBody Comprador comprador){
        comprador.verFavoritos();
    }

}
