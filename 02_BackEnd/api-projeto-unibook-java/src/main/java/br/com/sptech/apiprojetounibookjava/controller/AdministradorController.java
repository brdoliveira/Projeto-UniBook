package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.Administrador;
import br.com.sptech.apiprojetounibookjava.model.Comprador;
import br.com.sptech.apiprojetounibookjava.model.Usuario;
import br.com.sptech.apiprojetounibookjava.model.Vendedor;
import br.com.sptech.apiprojetounibookjava.repository.*;
import br.com.sptech.apiprojetounibookjava.model.dtos.input.EnderecoDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;

@RestController
@RequestMapping("/administradores")
public class AdministradorController {
    @Autowired
    CompradorRepository compradorRepository;
    @Autowired
    AdministradorRepository administradorRepository;
    @Autowired
    VendedorRepository vendedorRepository;
    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    private IViaCep iViaCep;

    @GetMapping
    public ResponseEntity getAdministradores() {
        if (administradorRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(administradorRepository.findAll());
        }
    }

    @PostMapping("/cadastrar-administrador")
    public ResponseEntity postAdministrador(
            @RequestBody @Valid Administrador novoAdm) {
        usuarioRepository.save(novoAdm);
        administradorRepository.save(novoAdm);
        return ResponseEntity.status(201).body(novoAdm);
    }

    @PatchMapping("/endereco/{codigo}/{cep}")
    public ResponseEntity patchEndereco(@PathVariable @Valid long codigo,
                                        @PathVariable @Valid String cep) {

        if (this.isCepExiste(cep)) {

            EnderecoDto endereco = iViaCep.getCep(cep);

            if (administradorRepository.existsById(codigo)) {
                Administrador adm = administradorRepository.findById(codigo).get();

                adm.setEndereco(endereco.getLogradouro());
                adm.setMunicipio(endereco.getLocalidade());
                adm.setBairro(endereco.getBairro());
                adm.setUf(endereco.getUf());

                usuarioRepository.save(adm);
                administradorRepository.save(adm);
            }

            if (vendedorRepository.existsById(codigo)) {
                Vendedor vend = vendedorRepository.findById(codigo).get();

                vend.setEndereco(endereco.getLogradouro());
                vend.setMunicipio(endereco.getLocalidade());
                vend.setBairro(endereco.getBairro());
                vend.setUf(endereco.getUf());

                usuarioRepository.save(vend);
                vendedorRepository.save(vend);
            }

            if (compradorRepository.existsById(codigo)) {
                Comprador comp = compradorRepository.findById(codigo).get();

                comp.setEndereco(endereco.getLogradouro());
                comp.setMunicipio(endereco.getLocalidade());
                comp.setBairro(endereco.getBairro());
                comp.setUf(endereco.getUf());

                usuarioRepository.save(comp);
                compradorRepository.save(comp);
            }
            return ResponseEntity.status(200).body(iViaCep.getCep(cep));
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping("/endereco/{cep}")
    public ResponseEntity getOneEndereco(@PathVariable @Valid String cep) {

        if (!this.isCepExiste(cep)) {

            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(iViaCep.getCep(cep));
        }
    }

    @GetMapping("/buscar/{codigo}")
    public ResponseEntity getOneAdministrador(@PathVariable @Valid long codigo) {
        if (!administradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(administradorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/deletar/{codigo}")
    public ResponseEntity deleteOneAdministrador(@PathVariable @Valid long codigo) {
        if (!administradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            administradorRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @PostMapping("/cadastrar-comprador")
    public ResponseEntity postComprador(
            @RequestBody @Valid Comprador novoComprador) {
        compradorRepository.save(novoComprador);
        usuarioRepository.save(novoComprador);
        return ResponseEntity.status(201).body(novoComprador);
    }

    @GetMapping("/lista-compradores")
    public ResponseEntity getCompradores() {
        if (compradorRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(compradorRepository.findAll());
        }
    }

    @GetMapping("/lista-compradores/buscar/{codigo}")
    public ResponseEntity getOneComprador(@PathVariable @Valid long codigo) {
        if (!compradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(compradorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/lista-compradores/deletar/{codigo}")
    public ResponseEntity deleteOneComprador(@PathVariable @Valid long codigo) {
        if (!compradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            compradorRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @PostMapping("/cadastrar-vendedor")
    public ResponseEntity postVendedor(
            @RequestBody @Valid Vendedor novoVendedor) {
        vendedorRepository.save(novoVendedor);
        usuarioRepository.save(novoVendedor);
        return ResponseEntity.status(201).body(novoVendedor);
    }

    @GetMapping("/lista-vendedores")
    public ResponseEntity getVendedores() {
        if (vendedorRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(vendedorRepository.findAll());
        }
    }

    @GetMapping("/lista-vendedores/buscar/{codigo}")
    public ResponseEntity getOneVendedor(@PathVariable @Valid long codigo) {
        if (!vendedorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(vendedorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/lista-vendedores/deletar/{codigo}")
    public ResponseEntity deleteOneVendedor(@PathVariable @Valid long codigo) {
        if (!vendedorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            vendedorRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/lista-produto-anuncio")
    public ResponseEntity getProdutosAnuncio() {
        if (produtoAnuncioRepository.findAll().isEmpty()) {
            return ResponseEntity.status(204).build();
        } else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findAll());
        }
    }

    @GetMapping("/produto-anuncio/buscar/{codigo}")
    public ResponseEntity getOneProdutoAnuncio(@PathVariable @Valid long codigo) {
        if (!produtoAnuncioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findById(codigo));
        }
    }

    @DeleteMapping("/produto-anuncio/deletar/{codigo}")
    public ResponseEntity deleteProdutoAnuncio(@PathVariable @Valid long codigo) {
        if (!produtoAnuncioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            produtoAnuncioRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @PatchMapping("/alterar/senha-usuario/{codigo}/{senhaAntiga}/{senhaNova}")
    public ResponseEntity patchAlterarSenha(@PathVariable @Valid long codigo,
                                            @PathVariable String senhaAntiga,
                                            @PathVariable String senhaNova
    ) {

        if (!usuarioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();

        } else {

            Usuario usuario = usuarioRepository.findById(codigo).get();

            usuario.setSenha(senhaNova);

            usuarioRepository.save(usuario);
            return ResponseEntity.status(200).build();
        }
    }

    @PatchMapping(value = "/adicionar-foto-perfil/{codigoUsuario}", consumes = "image/jpeg")
    public ResponseEntity patchFoto(@PathVariable long codigoUsuario,
                                    @RequestBody byte[] novaFoto) {

        if (!usuarioRepository.existsById(codigoUsuario)) {
            if (!administradorRepository.existsById(codigoUsuario)) {
                administradorRepository.atualizarFoto(codigoUsuario, novaFoto);
            }
            if (!vendedorRepository.existsById(codigoUsuario)) {
                vendedorRepository.atualizarFoto(codigoUsuario, novaFoto);
            }
            if (!compradorRepository.existsById(codigoUsuario)) {
                compradorRepository.atualizarFoto(codigoUsuario, novaFoto);
            }
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @GetMapping(value = "/adicionar-foto-perfil/{codigoUsuario}", produces = "image/jpeg")
    public ResponseEntity<byte[]> getFoto(@PathVariable long codigoUsuario) {

        if (usuarioRepository.existsById(codigoUsuario)) {
            if (administradorRepository.existsById(codigoUsuario)) {
                byte[] foto = administradorRepository.getFoto(codigoUsuario);
                if (foto == null) {
                    return ResponseEntity.status(404).build();
                }
                return ResponseEntity.status(200).body(foto);
            }

            if (vendedorRepository.existsById(codigoUsuario)) {
                byte[] foto = vendedorRepository.getFoto(codigoUsuario);
                if (foto == null) {
                    return ResponseEntity.status(404).build();
                }
                return ResponseEntity.status(200).body(foto);
            }

            if (compradorRepository.existsById(codigoUsuario)) {
                byte[] foto = compradorRepository.getFoto(codigoUsuario);
                if (foto == null) {
                    return ResponseEntity.status(404).build();
                }
            }
            return ResponseEntity.status(200).build();
        } else {
            return ResponseEntity.status(404).build();
        }
    }
    private boolean isCepExiste(String cep) {
        if (iViaCep.getCep(cep).isErro()) {
            return false;
        }
        return true;
    }
}