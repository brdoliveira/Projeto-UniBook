package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.*;
import com.sptech.unibookjpa.model.dtos.input.CompradorCadastroDto;
import com.sptech.unibookjpa.model.dtos.input.CompradorCadastroDto;
import com.sptech.unibookjpa.repository.CompradorRepository;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/compradores")
public class CompradorController {

    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    CompradorRepository compradorRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<Comprador> cadastrarComprador(
            @Valid @RequestBody CompradorCadastroDto admDto){

        Optional<Endereco> endereco = enderecoRepository.findByCepAndNumero(
                admDto.getCepEndereco(), admDto.getNumeroEndereco());

        if(endereco.isPresent()){
            Comprador adm = new Comprador(admDto.getNomeComprador(),
                    admDto.getDataNascimentoComprador(), admDto.getSexoComprador(),
                    admDto.getCpfComprador(), admDto.getEmailComprador(),
                    admDto.getSenhaComprador(), false, endereco.get());

            compradorRepository.save(adm);
            return ResponseEntity.status(201).build();
        }else {
            return ResponseEntity.status(404).build();
        }

    }

    @GetMapping
    public ResponseEntity getCompradores(){
        if(compradorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(compradorRepository.findAll());
        }
    }



  /*  @PostMapping("/adicionar-favorito")
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
*/
}
