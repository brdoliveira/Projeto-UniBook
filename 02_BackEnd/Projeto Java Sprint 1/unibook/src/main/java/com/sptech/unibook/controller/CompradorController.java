package com.sptech.unibook.controller;

import com.sptech.unibook.model.Comprador;
import com.sptech.unibook.model.ProdutoAnuncio;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comprador")
public class CompradorController {

    @PostMapping("/adicionar-favorito")
    public void adicionarFavorito(@RequestBody ProdutoAnuncio produtoAnuncio,
                                  @RequestBody Comprador comprador){
        comprador.adicionarFavorito(produtoAnuncio);
    }

    @DeleteMapping("/remover-favorito")
    public void removerFavorito(@RequestBody ProdutoAnuncio produtoAnuncio,
                                @RequestBody Comprador comprador){
        comprador.removerFavorito(produtoAnuncio);
    }

    @GetMapping("/favoritos")
    public void verFavoritos(@RequestBody Comprador comprador){
        comprador.verFavoritos();
    }

}
