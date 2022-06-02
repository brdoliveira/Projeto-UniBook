package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Carrinho;
import com.sptech.unibookjpa.model.dtos.input.CarrinhoDto;
import com.sptech.unibookjpa.repository.CarrinhoRepository;
import com.sptech.unibookjpa.repository.CompradorRepository;
import com.sptech.unibookjpa.repository.ProdutoCarrinhoRepository;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/carrinhos")
public class CarrinhoController {

    @Autowired
    CarrinhoRepository carrinhoRepository;
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;
    @Autowired
    CompradorRepository compradorRepository;

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201", description = "Produto Adicionado"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404"
            )
    })

    @PostMapping
    public ResponseEntity adicionarProduto(@Valid @RequestBody CarrinhoDto carrinhoDto){

        Carrinho carrinho = new Carrinho();
        if(!produtoCarrinhoRepository.findAll().isEmpty() ||
                compradorRepository.findById(carrinhoDto.getComprador()).isPresent()){

            carrinho.setStatus(carrinhoDto.getStatus());
            carrinho.setComprador(compradorRepository.findById(carrinhoDto.getComprador()).get());

            carrinhoRepository.save(carrinho);
            return ResponseEntity.status(201).build();
        }else{
            return  ResponseEntity.status(404).build();
        }
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Carrinho Vazio"
            )
    })

    @GetMapping
    public ResponseEntity getCarrinho(){

        if(carrinhoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(carrinhoRepository.findAll());
        }
    }



}
