package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.*;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import com.sptech.unibookjpa.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();
    
    @Autowired
    EnderecoRepository enderecoRepository;
    @Autowired
    UsuarioRepository usuarioRepository;



    @GetMapping
    public List<UsuarioDTO> listarUsuarios(){
        List<UsuarioDTO> usuarioDTOS = new ArrayList<>();

        for (Usuario u:usuarios) {
            UsuarioDTO usuarioDTO = new UsuarioDTO(u.getEmail(), u.getNome(), u.isAtivo());
            usuarioDTOS.add(usuarioDTO);
        }

        return usuarioDTOS;
    }

    @PostMapping("/cadastrar/{endereco}")
    public ResponseEntity<Usuario> cadastrarUsuario(@Valid  @RequestBody Usuario usuario,
                                                    @PathVariable Long endereco){

        usuario.setEndereco(enderecoRepository.findById(endereco).get());

        try{
            Usuario _usuario = usuarioRepository.save(usuario);
            return new ResponseEntity<>(null, HttpStatus.CREATED);

        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/cadastrar/vendedor/")
    public String adicionarVendedor(@Valid @RequestBody Vendedor v){
        usuarios.add(v);
        return String.format("Usuário Vendedor %s cadastrado no sistema", v.getNome());

    }

    @PostMapping("/cadastrar/comprador/")
    public String adicionarComprador(@Valid @RequestBody Comprador c){
        usuarios.add(c);
        return String.format("Usuário Comprador %s cadastrado no sistema", c.getNome());

    }

    @PostMapping("/autenticacao/{usuario}/{senha}")
    public String autenticacao(@Valid @PathVariable String usuario,
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
    public String deletarUsuario(@Valid @PathVariable String usuario){

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
    public String deletarUsuario(@Valid @PathVariable int indice){

        if(indice <= usuarios.size()-1 && indice >= 0){
            usuarios.remove(indice);
            return "Usuário removido com sucesso!!!";
        }
        else{
            return "Verifique se o indice existe!!!";
        }

    }




}
