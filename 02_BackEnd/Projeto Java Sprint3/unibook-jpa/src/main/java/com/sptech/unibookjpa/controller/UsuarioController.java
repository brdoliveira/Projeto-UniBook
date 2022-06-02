package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.*;
import com.sptech.unibookjpa.model.dtos.response.UsuarioGeralDto;
import com.sptech.unibookjpa.model.dtos.input.UsuarioLoginLogoffDto;
import com.sptech.unibookjpa.repository.EnderecoRepository;
import com.sptech.unibookjpa.repository.UsuarioRepository;
import com.sptech.unibookjpa.services.AdministradorCsv;
import com.sptech.unibookjpa.services.FilaObj;
import com.sptech.unibookjpa.services.ListaObj;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
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

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "406", description = "usuário já logado no sistema"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404", description = "Usuario não encontrado"
            )
    })

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

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "406", description = "Usuário já deslogado do sistema"
            ),
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "404", description = "Usuario não encontrado"
            )
    })

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

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            )
    })

    @GetMapping
    public ResponseEntity getUsuario(){

        FilaObj<Usuario> filaUsuarios = new FilaObj<Usuario>((int) usuarioRepository.count());

        for (Usuario usuario : usuarioRepository.findAll()) {
            filaUsuarios.insert(usuario);
        }

        return ResponseEntity.status(200).body(filaUsuarios);
    }

    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            )
    })

    @GetMapping("/exportar")
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

    @GetMapping("/exportar-txt")
    public ResponseEntity exportarDadosUsuario(@RequestParam boolean ativo){
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


    @ApiResponses({
            @ApiResponse(
                    content = @Content(mediaType = "text/csv"), responseCode = "200"
            ),
    })

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
