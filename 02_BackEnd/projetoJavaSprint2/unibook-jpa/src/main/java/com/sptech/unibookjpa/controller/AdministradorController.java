package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Administrador;
import com.sptech.unibookjpa.model.Endereco;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.Usuario;
import com.sptech.unibookjpa.model.dtos.input.AdministradorCadastroDto;
import com.sptech.unibookjpa.repository.AdministradorRepository;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/administradores") //TODO: sempre deve ser no plural
//TODO: adicionar ResponseEntity em todos os endPoints
public class AdministradorController {

    @Autowired
    AdministradorRepository administradorRepository;
    @Autowired
    EnderecoRepository enderecoRepository;

    @PostMapping("/cadastrar")
    public ResponseEntity<Administrador> cadastrarAdministrador(
            @Valid @RequestBody AdministradorCadastroDto admDto){

        Optional<Endereco> endereco = enderecoRepository.findByCepAndNumero(
                admDto.getCepEndereco(), admDto.getNumeroEndereco());

        if(endereco.isPresent()){
            Administrador adm = new Administrador(admDto.getNomeAdministrador(),
                    admDto.getDataNascimentoAdministrador(), admDto.getSexoAdministrador(),
                    admDto.getCpfAdministrador(), admDto.getEmailAdministrador(),
                    admDto.getSenhaAdministrador(), false, endereco.get());

            administradorRepository.save(adm);
            return ResponseEntity.status(201).build();
        }else {
            return ResponseEntity.status(404).build();
        }

    }

    @GetMapping
    public ResponseEntity getAdministradores(){
            if(administradorRepository.findAll().isEmpty()){
                return ResponseEntity.status(204).build();
            }else {
                return ResponseEntity.status(200).body(administradorRepository.findAll());
            }
    }



   /* @DeleteMapping("/remover-produto")
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

    }*/

    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@Valid @RequestBody Administrador administrador,
                            @PathVariable double valor){
       return administrador.gerarBoleto(valor);
    }



}
