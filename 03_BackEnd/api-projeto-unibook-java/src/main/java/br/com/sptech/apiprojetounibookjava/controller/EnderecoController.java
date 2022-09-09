package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.Endereco;
import br.com.sptech.apiprojetounibookjava.repository.EnderecoRepository;
import br.com.sptech.apiprojetounibookjava.repository.IViaCep;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/enderecos")
public class EnderecoController {
    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    IViaCep iViaCep;

    @GetMapping
    public ResponseEntity getEndereco(){
        return ResponseEntity.status(200).body(enderecoRepository.findAll());
    }

    @PostMapping("/cadastrar")
    public ResponseEntity postEndereco(@Valid @RequestBody Endereco novoEndereco){
        return ResponseEntity.status(201).body(enderecoRepository.save(novoEndereco));
    }

    @DeleteMapping("/buscar/{codigo}")
    public ResponseEntity buscarOneEndereco(@PathVariable long codigo) {
        if (!enderecoRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            enderecoRepository.findById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @DeleteMapping("/deletar/{codigo}")
    public ResponseEntity deleteOneEndereco(@PathVariable long codigo) {
        if (!enderecoRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            enderecoRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }
}
