package br.com.sptech.apiprojetounibookjava.controller;

import br.com.sptech.apiprojetounibookjava.model.Administrador;
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
    private IViaCep iViaCep;

    @GetMapping
    public ResponseEntity getAdministradores(){
        if(administradorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(administradorRepository.findAll());
        }
    }

    @PostMapping("/cadastrar")
    public ResponseEntity postAdministrador(
            @RequestBody @Valid Administrador novoAdm) {
        administradorRepository.save(novoAdm);
        return ResponseEntity.status(201).body(novoAdm);
    }

    @PatchMapping("/endereco/{codigo}/{cep}")
    public ResponseEntity patchEndereco(@PathVariable @Valid long codigo,
                                        @PathVariable @Valid String cep) {

        if (!administradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();

        } else {
            EnderecoDto endereco = iViaCep.getCep(cep);
            Administrador adm = administradorRepository.findById(codigo).get();

            adm.setEndereco(endereco.getLogradouro());
            adm.setMunicipio(endereco.getLocalidade());
            adm.setBairro(endereco.getBairro());
            adm.setUf(endereco.getUf());

            administradorRepository.save(adm);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/buscar/{codigo}")
    public ResponseEntity getOneAdministrador (@PathVariable @Valid long codigo) {
        if (!administradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(administradorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/deletar/{codigo}")
    public ResponseEntity deleteOneAdministrador (@PathVariable @Valid long codigo) {
        if (!administradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            administradorRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/lista-compradores")
    public ResponseEntity getCompradores(){
        if(compradorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(compradorRepository.findAll());
        }
    }

    @GetMapping("/lista-compradores/buscar/{codigo}")
    public ResponseEntity getOneComprador (@PathVariable @Valid long codigo) {
        if (!compradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(compradorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/lista-compradores/deletar/{codigo}")
    public ResponseEntity deleteOneComprador (@PathVariable @Valid long codigo) {
        if (!compradorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            compradorRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

    @GetMapping("/lista-vendedores")
    public ResponseEntity getVendedores(){
        if(vendedorRepository.findAll().isEmpty()){
            return ResponseEntity.status(204).build();
        }else {
            return ResponseEntity.status(200).body(vendedorRepository.findAll());
        }
    }

    @GetMapping("/lista-vendedores/buscar/{codigo}")
    public ResponseEntity getOneVendedor (@PathVariable @Valid long codigo) {
        if (!vendedorRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(vendedorRepository.findById(codigo));
        }
    }

    @DeleteMapping("/lista-vendedores/deletar/{codigo}")
    public ResponseEntity deleteOneVendedor (@PathVariable @Valid long codigo) {
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
    public ResponseEntity getOneProdutoAnuncio (@PathVariable @Valid long codigo) {
        if (!produtoAnuncioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            return ResponseEntity.status(200).body(produtoAnuncioRepository.findById(codigo));
        }
    }

    @DeleteMapping("/produto-anuncio/deletar/{codigo}")
    public ResponseEntity deleteProdutoAnuncio (@PathVariable @Valid long codigo) {
        if (!produtoAnuncioRepository.existsById(codigo)) {
            return ResponseEntity.status(404).build();
        } else {
            produtoAnuncioRepository.deleteById(codigo);
            return ResponseEntity.status(200).build();
        }
    }

//    @GetMapping("/gerar-boleto/{valor}")
//    public String gerarBoleto(@Valid @RequestBody Administrador administrador,
//                              @PathVariable double valor){
//        return administrador.gerarBoleto(valor);
//    }
}
