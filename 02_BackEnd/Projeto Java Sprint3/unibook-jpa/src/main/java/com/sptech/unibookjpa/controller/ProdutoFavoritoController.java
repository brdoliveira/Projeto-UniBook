package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.ProdutoFavorito;
import com.sptech.unibookjpa.repository.ProdutoAnuncioRepository;
import com.sptech.unibookjpa.repository.ProdutoFavoritoRepository;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/produtos-favoritos")
public class ProdutoFavoritoController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    ProdutoFavoritoRepository produtoFavoritoRepository;


    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201", description = "Produto adicionado aos favoritos"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404"
            )
    })

    @PostMapping("/adicionar-produto/{produtoAnuncio}")
    public ResponseEntity adicionarProduto(@Valid @RequestBody ProdutoFavorito produtoFavorito,
                                           @PathVariable Long produtoAnuncio){


        if(produtoAnuncioRepository.findById(produtoAnuncio).isPresent()){

            produtoFavorito.setProdutoAnuncio(produtoAnuncioRepository.findById(produtoAnuncio).get());
            produtoFavoritoRepository.save(produtoFavorito);
            return ResponseEntity.status(201).build();
        }else{
            return ResponseEntity.status(404).build();
        }

    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Lista Vazia"
            )
    })

    @GetMapping
    public ResponseEntity getProdutosFavorito(){

        if(produtoFavoritoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(produtoFavoritoRepository.findAll());
        }
    }
/*

    @DeleteMapping("/remover-produto")
    public void removerProduto(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody ProdutoFavorito favorito){

    }

    @GetMapping("/calcular/total-venda")
    public double calculaTotalVenda(@Valid @RequestBody ProdutoFavorito favorito){
        return 0.0;
    }
    @GetMapping("/produtos-favorito")
    public void exibeProdutosFavorito(@Valid @RequestBody ProdutoFavorito favorito){

    }

    @GetMapping("/finalizar-compra")
    public double finalizarCompra(@Valid @RequestBody ProdutoFavorito favorito){
        return 0.0;
    }
*/

}

