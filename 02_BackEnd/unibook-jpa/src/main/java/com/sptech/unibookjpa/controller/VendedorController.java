package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Vendedor;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import com.sptech.unibookjpa.repository.VendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/vendedor")
public class VendedorController {

    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    VendedorRepository vendedorRepository;


    @PostMapping("/cadastrar/{endereco}")
    public ResponseEntity<Vendedor> cadastrarVendedor(@Valid @RequestBody Vendedor vendedor,
                                                      @PathVariable Long endereco){

        vendedor.setEndereco(enderecoRepository.findById(endereco).get());

        try{
            Vendedor _vendedor = vendedorRepository.save(vendedor);
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping
    public ResponseEntity getVendedor(){
        List<Vendedor> lista = new ArrayList<>();
        lista.addAll(vendedorRepository.findAll());
        if(lista.isEmpty()){
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(lista, HttpStatus.OK);
        }
    }



    @PostMapping("/adicionar-anuncio")
    public void adicionarAnuncio(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                                    @RequestBody Vendedor vendedor){

        vendedor.adicionarAnuncio(produtoAnuncio);

    }

    @DeleteMapping("/remover-anuncio")
    public void removerAnuncio(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody Vendedor vendedor){
        vendedor.removerAnuncio(produtoAnuncio);
    }

    @PutMapping("/editar-anuncio")
    public void editarAnuncio(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                              @RequestBody ProdutoAnuncio novoProdutoAnuncio,
                              @RequestBody Vendedor vendedor){

        vendedor.editarAnuncio(produtoAnuncio, novoProdutoAnuncio);

    }

    @GetMapping("/produtos-anunciados")
    public void visualizarAnuncios(@Valid @RequestBody Vendedor vendedor){
        vendedor.visualizarAnuncios();
    }

    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@Valid @RequestBody Vendedor vendedor,
                              @PathVariable double valor){
        return vendedor.gerarBoleto(valor);
    }






}
