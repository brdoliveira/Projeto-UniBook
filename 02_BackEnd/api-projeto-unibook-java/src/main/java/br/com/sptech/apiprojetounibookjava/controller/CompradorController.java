package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.Comprador;
import br.com.sptech.apiprojetounibookjava.model.ProdutoFavorito;
import br.com.sptech.apiprojetounibookjava.repository.CompradorRepository;
import br.com.sptech.apiprojetounibookjava.repository.ProdutoAnuncioRepository;
import br.com.sptech.apiprojetounibookjava.repository.ProdutoFavoritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/compradores")
public class CompradorController {
    @Autowired
    CompradorRepository compradorRepository;
    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    ProdutoFavoritoRepository produtoFavoritoRepository;

    @GetMapping
    public ResponseEntity getCompradores(){
        if(compradorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(compradorRepository.findAll());
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity postComprador(
            @Valid @RequestBody Comprador novoComprador) {
        compradorRepository.save(novoComprador);
        return ResponseEntity.status(201).body(novoComprador);
    }

    @PostMapping("/adicionar-Favorito/{codigoComprador}")
    public ResponseEntity postProdutoFavorito(@Valid @PathVariable long codigoComprador,
                                             @Valid @PathVariable long codigoAnuncio,
                                             @RequestBody ProdutoFavorito favorito) {

        if (!compradorRepository.existsById(codigoComprador)) {
            return ResponseEntity.status(404).build();
        } else if (!produtoAnuncioRepository.existsById(codigoAnuncio)){
            return ResponseEntity.status(404).build();
        } else {
            produtoFavoritoRepository.save(favorito);
            return ResponseEntity.status(201).body(favorito);
        }
    }

    @DeleteMapping("/remover-favorito/{codigoComprador}/{codigoFavorito}")
    public ResponseEntity deleteProdutoAnuncio(@Valid @PathVariable long codigoComprador,
                                               @Valid @PathVariable long codigoFavorito) {

        if (!compradorRepository.existsById(codigoComprador)) {
            return ResponseEntity.status(404).build();
        } else if (!produtoAnuncioRepository.existsById(codigoFavorito)) {
            return ResponseEntity.status(404).build();
        } else {
            produtoFavoritoRepository.deleteById(codigoFavorito);
            return ResponseEntity.status(200).build();
        }
    }
     /*
    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@Valid @RequestBody Vendedor vendedor,
                              @PathVariable double valor){
        return vendedor.gerarBoleto(valor);
    }*/
}
