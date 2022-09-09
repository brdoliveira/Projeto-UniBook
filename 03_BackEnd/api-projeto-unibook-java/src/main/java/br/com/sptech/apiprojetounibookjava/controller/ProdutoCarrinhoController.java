package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.repository.ProdutoCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/produtos-carrinho")
public class ProdutoCarrinhoController {
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;
    @GetMapping
    public ResponseEntity getProdutosCarrinho(){
        if(produtoCarrinhoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(produtoCarrinhoRepository.findAll());
        }
    }

    @GetMapping("/buscar/{codigo}")
    public ResponseEntity getOneProdutoCarrinho (@PathVariable @Valid long codigo) {
        if (!produtoCarrinhoRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(produtoCarrinhoRepository.findById(codigo));
        }
    }
}

