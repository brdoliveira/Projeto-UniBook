package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Endereco;
import com.sptech.unibookjpa.repository.EnderecoRepository;
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
@RequestMapping("/enderecos")
public class EnderecoController {

    @Autowired
    EnderecoRepository enderecoRepository;

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201", description = "Endereço cadastrado"
            ),
    })

    @PostMapping("/cadastrar")
    public ResponseEntity cadastrarEndereco(@Valid @RequestBody Endereco endereco){

        enderecoRepository.save(endereco);
        return ResponseEntity.status(201).build();
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Nenhum endereço encontrado"
            )
    })

    @GetMapping
    public ResponseEntity getEndereco(){

        if(enderecoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(enderecoRepository.findAll());
        }
    }



}
