package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.ProdutoAnuncio;
import br.com.sptech.apiprojetounibookjava.model.Vendedor;
import br.com.sptech.apiprojetounibookjava.repository.ProdutoAnuncioRepository;
import br.com.sptech.apiprojetounibookjava.repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/vendedores")
public class VendedorController {
    @Autowired
    VendedorRepository vendedorRepository;
    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @GetMapping
    public ResponseEntity getVendedores() {
        if (vendedorRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(vendedorRepository.findAll());
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity postVendedor(
            @Valid @RequestBody Vendedor novoVendedor) {
        vendedorRepository.save(novoVendedor);
        return ResponseEntity.status(201).body(novoVendedor);
    }

    @PostMapping("/adicionar-anuncio/{codigoVendedor}")
    public ResponseEntity postProdutoAnuncio(@Valid @PathVariable long codigoVendedor,
                                             @RequestBody ProdutoAnuncio anuncio) {

        if (!vendedorRepository.existsById(codigoVendedor)) {
            return ResponseEntity.status(404).build();
        } else {
            produtoAnuncioRepository.save(anuncio);
            return ResponseEntity.status(201).body(anuncio);
        }
    }

    @DeleteMapping("/remover-anuncio/{codigoVendedor}/{codigoAnuncio}")
    public ResponseEntity deleteProdutoAnuncio(@Valid @PathVariable long codigoAnuncio,
                                               @Valid @PathVariable long codigoVendedor) {

        if (!vendedorRepository.existsById(codigoVendedor)) {
            return ResponseEntity.status(404).build();
        } else if (!produtoAnuncioRepository.existsById(codigoAnuncio)) {
            return ResponseEntity.status(404).build();
        } else {
            produtoAnuncioRepository.deleteById(codigoAnuncio);
            return ResponseEntity.status(200).build();
        }
    }
    @PatchMapping(value = "/adicionar-foto-anuncio/{codigoVendedor}/{codigoAnuncio}", consumes = "image/jpeg")
    public ResponseEntity patchFoto(@PathVariable long codigoVendedor,
                                    @PathVariable long codigoAnuncio,
                                    @RequestBody byte[] novaFoto) {
        if (!vendedorRepository.existsById(codigoVendedor)) {
            return ResponseEntity.status(404).build();
        }
        if (!produtoAnuncioRepository.existsById(codigoAnuncio)){
            return ResponseEntity.status(404).build();
        }
        vendedorRepository.atualizarFoto(codigoVendedor, novaFoto);

        return ResponseEntity.status(200).build();
    }

    @GetMapping(value = "/adicionar-foto-anuncio/{codigoVendedor}/{codigoAnuncio}", produces = "image/jpeg")
    public ResponseEntity<byte[]> getFoto(@PathVariable long codigoVendedor,
                                          @PathVariable long codigoAnuncio) {
        byte[] foto = vendedorRepository.getFoto(codigoVendedor);
        if (foto == null) {
            return ResponseEntity.status(404).build();
        }
        if (!produtoAnuncioRepository.existsById(codigoAnuncio)){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(foto);
    }
}



