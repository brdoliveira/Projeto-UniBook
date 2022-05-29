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
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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


    // EXPORTAÇÃO E GRAVAÇAO DE ARQUIVO

    public static void gravaRegistro(String registro, String nomeArq) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        }
        catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro);
        }

        try {
            saida.append(registro + "\n");
            saida.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao gravar o arquivo: " + erro);
        }
    }

    public static void gravaArquivoTxt(List<Administrador> lista, String nomeArq) {
        int contaRegCorpo = 0;

        // Monta o registro de header
        String header = "00CompraeVenda2022-02";
        header += LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
        header += "V1";

        // Grava o registro de header
        gravaRegistro(header, nomeArq);

        // Monta e grava os registros de corpo
        String corpo;
        for (Administrador a : lista) {
            corpo = "02";
            corpo += String.format("%-5.5s", a.getId());
            corpo += String.format("%-8.8s", a.getDataNascimento());
            corpo += String.format("%-50.50s", a.getNome());
            corpo += String.format("%14.14f", a.getCpf());
            corpo += String.format("%-100.100s", a.getEmail());
            corpo += String.format("%-100.100s", a.getSenha());
            corpo += String.format("%-150.150s", a.getEndereco().getBairro());
            corpo += String.format("%-100.100s", a.getEndereco().getCidade());
            corpo += String.format("%-100.100s", a.getEndereco().getEstado());
            corpo += String.format("%-100.100s", a.getEndereco().getLogradouro());
            contaRegCorpo++;
            gravaRegistro(corpo, nomeArq);
        }

        // Monta e grava o registro de trailer
        String trailer = "01";
        trailer += String.format("%07d", contaRegCorpo);
        gravaRegistro(trailer, nomeArq);
    }

    public static void main(String[] args) {


    }
}
