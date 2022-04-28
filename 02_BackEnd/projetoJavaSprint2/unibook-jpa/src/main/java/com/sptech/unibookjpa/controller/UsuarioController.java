package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.*;
import com.sptech.unibookjpa.model.dtos.response.UsuarioGeralDto;
import com.sptech.unibookjpa.model.dtos.input.UsuarioLoginLogoffDto;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import com.sptech.unibookjpa.repository.UsuarioRepository;
import com.sptech.unibookjpa.services.AdministradorCsv;
import com.sptech.unibookjpa.services.ListaObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    private List<Usuario> usuarios = new ArrayList<>();
    
    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    UsuarioRepository usuarioRepository;

    @PostMapping("/login")
    public ResponseEntity postLogin(@RequestBody UsuarioLoginLogoffDto usuarioDto){
        Optional<Usuario> usuario = usuarioRepository.findByEmailAndSenha(usuarioDto.getEmail(),
                usuarioDto.getSenha());
        if (usuario.isPresent()){
            if(!usuario.get().isAtivo()){
                usuario.get().setAtivo(true);
                usuarioRepository.save(usuario.get());
                return ResponseEntity.status(200).build();
            }else {
                return ResponseEntity.status(406).build();
            }
        }else{
            return ResponseEntity.status(404).build();
        }

    }

    @DeleteMapping("/logoff")
    public ResponseEntity deleteLogin(@RequestBody UsuarioLoginLogoffDto usuarioDto) {
        Optional<Usuario> usuario = usuarioRepository.findByEmailAndSenha(
                usuarioDto.getEmail(), usuarioDto.getSenha());
        if (usuario.isPresent()) {
            if (usuario.get().isAtivo()) {
                usuario.get().setAtivo(false);
                usuarioRepository.save(usuario.get());
                return ResponseEntity.status(200).build();
            } else {
                return ResponseEntity.status(406).build();
            }

        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping
    public ResponseEntity exportarTopUsuarios(@RequestParam boolean ativo){
        ListaObj<UsuarioGeralDto> usuariosDto = new ListaObj<>(20);
        List<UsuarioGeralDto> usuarios = new ArrayList<>();

        usuarios = usuarioRepository.findByAtivoOrderByNome(ativo);
        for (int i = 0; i < 20; i++) {
            try {
                usuariosDto.adiciona(usuarios.get(i));
            }catch (Exception e){
                System.out.println("Error: "+e);
                break;
            }finally {
                AdministradorCsv admCsv = new AdministradorCsv();
                admCsv.gravaArquivoCsv(usuariosDto.toString(), "exportUsuarios");
            }
        }
        return ResponseEntity.status(200).build();
    }
    @GetMapping("/relatorio")
    public ResponseEntity getRelatorio(){
        String relatorio = "";

        List<Usuario> lista = usuarioRepository.findAll();
        for (var usuario : lista) {
            relatorio +=    "Email: " + usuario.getEmail() + "|" + "\r\n" +
                            "Nome: " + usuario.getNome() + "|" + "\r\n" +
                            "Ativo: " + usuario.isAtivo() + "|" + "\r\n" + "\r\n" + "\r\n" + "\r\n";
        }

        return ResponseEntity
                .status(200)
                .header("content-type", "text/csv")
                .header("content-disposition", "filename=\"relatorio.doc\"")
                .body(relatorio);
    }
    /*@PostMapping("/cadastrar/{endereco}")
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
*/
    /*@PostMapping("/cadastrar/vendedor/")
    public String adicionarVendedor(@Valid @RequestBody Vendedor v){
        usuarios.add(v);
        return String.format("Usuário Vendedor %s cadastrado no sistema", v.getNome());

    }

    @PostMapping("/cadastrar/comprador/")
    public String adicionarComprador(@Valid @RequestBody Comprador c){
        usuarios.add(c);
        return String.format("Usuário Comprador %s cadastrado no sistema", c.getNome());

    }*/

}
