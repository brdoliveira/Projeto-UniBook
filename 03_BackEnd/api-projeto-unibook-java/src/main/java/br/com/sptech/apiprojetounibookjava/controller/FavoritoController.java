package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.repository.ProdutoFavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/favoritos")
public class FavoritoController {
    @Autowired
    ProdutoFavoritoRepository favoritoRepository;
    @GetMapping
    public ResponseEntity getFavoritos(){

        if(favoritoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(favoritoRepository.findAll());
        }
    }
}
