package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Vendedor;
import com.sptech.unibookjpa.model.Endereco;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Vendedor;
import com.sptech.unibookjpa.model.dtos.input.VendedorCadastroDto;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import com.sptech.unibookjpa.repository.VendedorRepository;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/vendedores")
public class VendedorController {

    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    VendedorRepository vendedorRepository;


    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "201", description = "Vendedor cadastrado"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Endereço não encontrado"
            )
    })

    @PostMapping("/cadastrar")
    public ResponseEntity<Vendedor> cadastrarVendedor(
            @Valid @RequestBody VendedorCadastroDto admDto){

        Optional<Endereco> endereco = enderecoRepository.findByCepAndNumero(
                admDto.getCepEndereco(), admDto.getNumeroEndereco());

        if(endereco.isPresent()){
            Vendedor adm = new Vendedor(admDto.getNomeVendedor(),
                    admDto.getDataNascimentoVendedor(), admDto.getSexoVendedor(),
                    admDto.getCpfVendedor(), admDto.getEmailVendedor(),
                    admDto.getSenhaVendedor(), false, endereco.get());

            vendedorRepository.save(adm);
            return ResponseEntity.status(201).build();
        }else {
            return ResponseEntity.status(404).build();
        }

    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "204", description = "Vendedor não encontrado"
            )
    })

    @GetMapping
    public ResponseEntity getVendedores(){
        if(vendedorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(vendedorRepository.findAll());
        }
    }




 /*   @PostMapping("/adicionar-anuncio")
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
    }*/






}
