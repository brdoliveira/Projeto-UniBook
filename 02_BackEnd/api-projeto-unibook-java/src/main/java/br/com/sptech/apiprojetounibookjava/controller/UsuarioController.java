package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.Usuario;
import br.com.sptech.apiprojetounibookjava.model.dtos.input.UsuarioLoginLogoffDto;
import br.com.sptech.apiprojetounibookjava.model.dtos.response.UsuarioGeralDto;
import br.com.sptech.apiprojetounibookjava.repository.EnderecoRepository;
import br.com.sptech.apiprojetounibookjava.repository.UsuarioRepository;
import br.com.sptech.apiprojetounibookjava.services.AdministradorCsv;
import br.com.sptech.apiprojetounibookjava.services.FilaObj;
import br.com.sptech.apiprojetounibookjava.services.ListaObj;
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
    public ResponseEntity postLogin(@RequestBody UsuarioLoginLogoffDto usuarioDto) {
        Optional<Usuario> usuario =
                usuarioRepository.findByEmailAndSenha(
                        usuarioDto.getEmail(),
                        usuarioDto.getSenha());

        if (usuario.isPresent()) {
            usuario.get().setAtivo(true);
            usuarioRepository.save(usuario.get());
            return ResponseEntity.status(200).body(usuarioRepository.findAll());
        } else {
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
    public ResponseEntity getUsuario() {

        FilaObj<Usuario> filaUsuarios = new FilaObj<Usuario>((int) usuarioRepository.count());

        for (Usuario usuario : usuarioRepository.findAll()) {
            filaUsuarios.insert(usuario);
        }
        return ResponseEntity.status(200).body(filaUsuarios);
    }

    @GetMapping("/exportar")
    public ResponseEntity exportarTopUsuarios(@RequestParam boolean ativo) {
        ListaObj<UsuarioGeralDto> usuariosDto = new ListaObj<>(20);
        List<UsuarioGeralDto> usuarios = new ArrayList<>();

        usuarios = usuarioRepository.findByAtivoOrderByNome(ativo);
        for (int i = 0; i < 20; i++) {
            try {
                usuariosDto.adiciona(usuarios.get(i));
            } catch (Exception e) {
                System.out.println("Error: " + e);
                break;
            } finally {
                AdministradorCsv admCsv = new AdministradorCsv();
                admCsv.gravaArquivoCsv(usuariosDto.toString(), "exportUsuarios");
            }
        }
        return ResponseEntity.status(200).build();
    }

    @GetMapping("/relatorio")
    public ResponseEntity getRelatorio() {
        String relatorio = "";

        List<Usuario> lista = usuarioRepository.findAll();
        for (var usuario : lista) {
            relatorio += "Email: " + usuario.getEmail() + "|" + "\r\n" +
                    "Nome: " + usuario.getNome() + "|" + "\r\n" +
                    "Ativo: " + usuario.isAtivo() + "|" + "\r\n" + "\r\n" + "\r\n" + "\r\n";
        }
        return ResponseEntity
                .status(200)
                .header("content-type", "text/csv")
                .header("content-disposition", "filename=\"relatorio.doc\"")
                .body(relatorio);
    }
}
