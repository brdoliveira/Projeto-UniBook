package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Vendedor;
import com.sptech.unibookjpa.model.dtos.input.ProdutoAnuncioDto;
import com.sptech.unibookjpa.repository.ProdutoAnuncioRepository;
import com.sptech.unibookjpa.repository.VendedorRepository;
import com.sptech.unibookjpa.services.PilhaObj;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/produtos-anuncios")
public class ProdutoAnuncioController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    VendedorRepository vendedorRepository;

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201", description = "Anuncio cadastrado"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404", description = "Vendedor não encontrado"
            )
    })

    @PostMapping("/cadastrar")
    public ResponseEntity cadastrarProdutoAnuncio(@Valid @RequestBody ProdutoAnuncioDto produtoAnuncio){

        Optional<Vendedor> vendedor = vendedorRepository.findById(produtoAnuncio.getIdVendedor());

        if(vendedor.isPresent()){

            ProdutoAnuncio produto = new ProdutoAnuncio();

                produto.setNomeProduto(produtoAnuncio.getNomeProduto());
                produto.setTipo(produtoAnuncio.getTipo());
                produto.setIsbn(produtoAnuncio.getIsbn());
                produto.setAutor(produtoAnuncio.getAutor());
                produto.setIlustrador(produtoAnuncio.getIlustrador());
                produto.setEdicao(produtoAnuncio.getEdicao());
                produto.setPreco(produtoAnuncio.getPreco());
                produto.setTradutor(produtoAnuncio.getTradutor());
                produto.setAno(produtoAnuncio.getAno());
                produto.setQuantidade(produtoAnuncio.getQuantidade());
                produto.setGeneroLiteral(produtoAnuncio.getGeneroLiteral());
                produto.setVendedor(vendedor.get());

            System.out.println(produto);
                produtoAnuncioRepository.save(produto);

            return ResponseEntity.status(201).build();
        }else{
            return ResponseEntity.status(404).build();
        }

    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Nenhum anuncio encontrado"
            )
    })

    @GetMapping
    public ResponseEntity getProdutosAnuncio(){

        if(produtoAnuncioRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            long qtdProduto = produtoAnuncioRepository.count();
            PilhaObj<ProdutoAnuncio> pilha = new PilhaObj<ProdutoAnuncio>((int) qtdProduto);

            for (ProdutoAnuncio produto:produtoAnuncioRepository.findAll()) {
                pilha.push(produto);
            }
            return ResponseEntity.status(200).body(pilha);
        }
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404", description = "Nenhum anuncio de produto encontrado"
            )
    })

    @PatchMapping(value = "/foto/{idProdutoAnuncio}", consumes = "image/jpeg")
    public ResponseEntity patchFoto(@PathVariable long idProdutoAnuncio,
                                    @RequestBody byte[] novaFoto) {
        if (!produtoAnuncioRepository.existsById(idProdutoAnuncio)) {
            return ResponseEntity.status(404).build();
        }
        produtoAnuncioRepository.atualizarFoto(idProdutoAnuncio, novaFoto);

        return ResponseEntity.status(200).build();
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404", description = "Nenhuma imagem encontrada"
            )
    })

    @GetMapping(value = "/foto/{idProdutoAnuncio}", produces = "image/jpeg")
    public ResponseEntity<byte[]> getFoto(@PathVariable long idProdutoAnuncio) {

        byte[] foto = produtoAnuncioRepository.getFoto(idProdutoAnuncio);
        if (foto == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(foto);
    }
}
