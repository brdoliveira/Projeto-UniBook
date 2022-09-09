package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.repository.ProdutoAnuncioRepository;
import br.com.sptech.apiprojetounibookjava.repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/produtos-anuncio")
public class ProdutoAnuncioController {
    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @GetMapping
    public ResponseEntity getProdutosAnuncio(){
        if(produtoAnuncioRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findAll());
        }
    }

    @GetMapping("/buscar/{codigo}")
    public ResponseEntity getOneProdutoAnuncio (@PathVariable @Valid long codigo) {
        if (!produtoAnuncioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findById(codigo));
        }
    }
}
