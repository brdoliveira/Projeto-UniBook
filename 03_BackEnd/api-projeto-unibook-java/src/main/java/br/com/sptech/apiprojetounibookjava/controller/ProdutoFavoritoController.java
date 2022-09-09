package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.repository.ProdutoFavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;

    @RestController
    @RequestMapping("/produtos-favorito")
    public class ProdutoFavoritoController {
    @Autowired
    ProdutoFavoritoRepository produtoFavoritoRepository;

    @GetMapping
    public ResponseEntity getProdutosFavorito() {
        if (produtoFavoritoRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(produtoFavoritoRepository.findAll());
        }
    }

    @GetMapping("/buscar/{codigo}")
    public ResponseEntity getOneProdutoFavorito(@PathVariable @Valid long codigo) {
        if (!produtoFavoritoRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(produtoFavoritoRepository.findById(codigo));
        }
    }
}