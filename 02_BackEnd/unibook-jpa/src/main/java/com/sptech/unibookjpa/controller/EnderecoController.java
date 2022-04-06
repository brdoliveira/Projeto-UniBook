package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Endereco;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/endereco")
public class EnderecoController {

    @Autowired
    EnderecoRepository enderecoRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity cadastrarEndereco(@Valid @RequestBody Endereco endereco){

        try{
            Endereco _endereco = enderecoRepository.save(endereco);
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }


    }

    @GetMapping
    public ResponseEntity getEndereco(){
        List<Endereco> lista = new ArrayList<>();
        lista.addAll(enderecoRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }



}
