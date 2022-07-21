package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/carrinhos")
public class CarrinhoController {

    @Autowired
    CarrinhoRepository carrinhoRepository;

    @GetMapping
    public ResponseEntity getCarrinho(){

        if(carrinhoRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(carrinhoRepository.findAll());
        }
    }
}
