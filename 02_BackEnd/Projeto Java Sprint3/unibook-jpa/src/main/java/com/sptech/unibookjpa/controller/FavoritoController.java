package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Favorito;
import com.sptech.unibookjpa.repository.CompradorRepository;
import com.sptech.unibookjpa.repository.FavoritoRepository;
import com.sptech.unibookjpa.repository.ProdutoFavoritoRepository;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/favoritos")
public class FavoritoController {

    @Autowired
    FavoritoRepository favoritoRepository;
    @Autowired
    ProdutoFavoritoRepository produtoFavoritoRepository;
    @Autowired
    CompradorRepository compradorRepository;

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404"
            )
    })

    @PostMapping("/adicionar-produto/{comprador}")
    public ResponseEntity adicionarProduto(@Valid @RequestBody Favorito favorito,
                                           @PathVariable Long comprador){

        if (produtoFavoritoRepository.findAll().isEmpty() ||
                !compradorRepository.findById(comprador).isPresent()){
            return  ResponseEntity.status(404).build();
        }else{
            favorito.setProdutosFavorito(produtoFavoritoRepository.findAll());
            favorito.setComprador(compradorRepository.findById(comprador).get());
            return ResponseEntity.status(201).build();
        }
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Favorito não encontrado"
            )
    })

    @GetMapping
    public ResponseEntity getFavorito(){

        if(favoritoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(favoritoRepository.findAll());
        }
    }



}
