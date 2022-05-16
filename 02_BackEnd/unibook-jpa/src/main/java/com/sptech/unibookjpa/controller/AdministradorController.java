package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Administrador;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Usuario;
import com.sptech.unibookjpa.repository.AdministradorRepository;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/administrador")
public class AdministradorController {

    @Autowired
    AdministradorRepository administradorRepository;
    @Autowired
    EnderecoRepository enderecoRepository;



    @PostMapping("/cadastrar/{cep}/{numero}")
    public  ResponseEntity<Administrador> cadastrarAdministrador(
                                        @Valid
                                        @RequestBody Administrador administrador,
                                        @PathVariable String cep,
                                        @PathVariable int numero){

        administrador.setEndereco(enderecoRepository.findByCepAndNumero(cep, numero));

        try{
            Administrador _administrador = administradorRepository.save(administrador);
            return new ResponseEntity<>(null, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity getAdministradores(){
        List<Administrador> lista = new ArrayList<>();
        lista.addAll(administradorRepository.findAll());
            if(lista.isEmpty()){
                return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
            }else {
                return new ResponseEntity<>(lista, HttpStatus.OK);
            }
    }



    @DeleteMapping("/remover-produto")
    public void removerProduto(@Valid
                                @RequestBody Administrador administrador,
                                @RequestBody List<ProdutoAnuncio> listaProdutos,
                                @RequestBody ProdutoAnuncio produto){



        administrador.removerProduto(listaProdutos, produto);
    }

    @DeleteMapping("/remover-usuario")
    public void removerProduto(@Valid @RequestBody Administrador administrador,
                               @RequestBody List<Usuario> usuarios,
                               @RequestBody Usuario usuario){

        administrador.removerUsuario(usuarios, usuario);

    }

    @DeleteMapping("/alterar/senha-usuario")
    public void alterarSenhaUsuarios(@Valid @RequestBody Administrador administrador,
                               @RequestBody String senha,
                               @RequestBody Usuario usuario){

        administrador.alterarSenha(usuario, senha);

    }

    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@Valid @RequestBody Administrador administrador,
                            @PathVariable double valor){
       return administrador.gerarBoleto(valor);
    }



}
