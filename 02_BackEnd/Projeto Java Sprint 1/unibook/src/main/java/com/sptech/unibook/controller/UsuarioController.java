package com.sptech.unibook.controller;

import com.sptech.unibook.model.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();


    @GetMapping
    public List<UsuarioDTO> listarUsuarios(){
        List<UsuarioDTO> usuarioDTOS = new ArrayList<>();

        for (Usuario u:usuarios) {
            UsuarioDTO usuarioDTO = new UsuarioDTO(u.getEmail(), u.getNome(), u.isAtivo());
            usuarioDTOS.add(usuarioDTO);
        }

        return usuarioDTOS;
    }

    @PostMapping("/cadastrar/administrador/")
    public String adicionarAdministrador(@RequestBody Administrador a){
        usuarios.add(a);
        return String.format("Usuário Administrador %s cadastrado no sistema", a.getNome());

    }

    @PostMapping("/cadastrar/vendedor/")
    public String adicionarVendedor(@RequestBody Vendedor v){
        usuarios.add(v);
        return String.format("Usuário Vendedor %s cadastrado no sistema", v.getNome());

    }

    @PostMapping("/cadastrar/comprador/")
    public String adicionarComprador(@RequestBody Comprador c){
        usuarios.add(c);
        return String.format("Usuário Comprador %s cadastrado no sistema", c.getNome());

    }

    @PostMapping("/autenticacao/{usuario}/{senha}")
    public String autenticacao(@PathVariable String usuario,
                               @PathVariable String senha){

        for (Usuario u:usuarios) {
            if(u.getEmail().equals(usuario) && u.getSenha().equals(senha)){
                u.setAtivo(true);
                return String.format("Usuário %s agora está autenticado", u.getNome());
            }

        }


        return String.format("Usuário %s não encontrado", usuario);
    }

    @DeleteMapping("/autenticacao/{usuario}")
    public String deletarUsuario(@PathVariable String usuario){

        Usuario user = null;

        for (Usuario u:usuarios) {
            if (u.getEmail().equals(usuario)){
                user = u;
                if (u.isAtivo()){
                    u.setAtivo(false);
                    return String.format("Logoff do usuário %s concluído", u.getNome());
                }
            }

        }
        if (Objects.isNull(user)){
            return String.format("Usuário %s não encontrado", usuario);
        }else{
            return String.format("Usuário %s NÃO está autenticado", user.getNome());
        }

    }


    // Deve deletar o usuário pelo indice
    @DeleteMapping("/autenticacao/deletar/{indice}")
    public String deletarUsuario(@PathVariable int indice){

        if(indice <= usuarios.size()-1 && indice >= 0){
            usuarios.remove(indice);
            return "Usuário removido com sucesso!!!";
        }
        else{
            return "Verifique se o indice existe!!!";
        }

    }




}
