package com.sptech.unibook.controller;

import com.sptech.unibook.model.ProdutoAnuncio;
import com.sptech.unibook.model.Vendedor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @PostMapping("/adicionar-anuncio")
    public void adicionarAnuncio(@RequestBody ProdutoAnuncio produtoAnuncio,
                                    @RequestBody Vendedor vendedor){

        vendedor.adicionarAnuncio(produtoAnuncio);

    }

    @DeleteMapping("/remover-anuncio")
    public void removerAnuncio(@RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody Vendedor vendedor){
        vendedor.removerAnuncio(produtoAnuncio);
    }

    @PutMapping("/editar-anuncio")
    public void editarAnuncio(@RequestBody ProdutoAnuncio produtoAnuncio,
                              @RequestBody ProdutoAnuncio novoProdutoAnuncio,
                              @RequestBody Vendedor vendedor){

        vendedor.editarAnuncio(produtoAnuncio, novoProdutoAnuncio);

    }

    @GetMapping("/produtos-anunciados")
    public void visualizarAnuncios(@RequestBody Vendedor vendedor){
        vendedor.visualizarAnuncios();
    }

    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@RequestBody Vendedor vendedor,
                              @PathVariable double valor){
        return vendedor.gerarBoleto(valor);
    }






}
