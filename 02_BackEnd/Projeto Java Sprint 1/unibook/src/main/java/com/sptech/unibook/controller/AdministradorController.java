package com.sptech.unibook.controller;

import com.sptech.unibook.model.Administrador;
import com.sptech.unibook.model.ProdutoAnuncio;
import com.sptech.unibook.model.Usuario;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/administrador")
public class AdministradorController {



    @DeleteMapping("/remover-produto")
    public void removerProduto(@RequestBody Administrador administrador,
                                @RequestBody List<ProdutoAnuncio> listaProdutos,
                                @RequestBody ProdutoAnuncio produto){

        administrador.removerProduto(listaProdutos, produto);
    }

    @DeleteMapping("/remover-usuario")
    public void removerProduto(@RequestBody Administrador administrador,
                               @RequestBody List<Usuario> usuarios,
                               @RequestBody Usuario usuario){

        administrador.removerUsuario(usuarios, usuario);

    }

    @DeleteMapping("/alterar/senha-usuario")
    public void alterarSenhaUsuarios(@RequestBody Administrador administrador,
                               @RequestBody String senha,
                               @RequestBody Usuario usuario){

        administrador.alterarSenha(usuario, senha);

    }

    @GetMapping("/gerar-boleto/{valor}")
    public String gerarBoleto(@RequestBody Administrador administrador,
                            @PathVariable double valor){
       return administrador.gerarBoleto(valor);
    }



}
