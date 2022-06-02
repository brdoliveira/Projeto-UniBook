package com.sptech.unibookjpa.controller;


import com.sptech.unibookjpa.model.Carrinho;
import com.sptech.unibookjpa.model.ProdutoAnuncio;
import com.sptech.unibookjpa.model.ProdutoCarrinho;
import com.sptech.unibookjpa.model.dtos.input.ProdutoCarrinhoDto;
import com.sptech.unibookjpa.repository.CarrinhoRepository;
import com.sptech.unibookjpa.repository.ProdutoAnuncioRepository;
import com.sptech.unibookjpa.repository.ProdutoCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/produtos-carrinhos")
public class ProdutoCarrinhoController {

    @Autowired
    ProdutoAnuncioRepository produtoAnuncioRepository;
    @Autowired
    ProdutoCarrinhoRepository produtoCarrinhoRepository;

    @Autowired
    CarrinhoRepository carrinhoRepository;


    @PostMapping("/adicionar-produto")
    public ResponseEntity adicionarProduto(@Valid @RequestBody ProdutoCarrinhoDto produtoCarrinhoDto){

        ProdutoCarrinho produtoCarrinho = new ProdutoCarrinho();
        Carrinho carrinho = new Carrinho();

        if(produtoAnuncioRepository.findById(produtoCarrinhoDto.getProdutoAnuncio()).isPresent()
        && carrinhoRepository.findById(produtoCarrinhoDto.getCarrinho()).isPresent()) {
            produtoCarrinho.setProdutoAnuncio(produtoAnuncioRepository.findById(produtoCarrinhoDto.getProdutoAnuncio()).get());
            produtoCarrinho.setCarrinho(carrinhoRepository.findById(produtoCarrinhoDto.getCarrinho()).get());
            produtoCarrinhoRepository.save(produtoCarrinho);
            return ResponseEntity.status(201).build();
        }else{
            return ResponseEntity.status(404).build();
        }

    }

/*

    @DeleteMapping("/remover-produto")
    public void removerProduto(@Valid @RequestBody ProdutoAnuncio produtoAnuncio,
                               @RequestBody ProdutoCarrinho carrinho){

    }

    @GetMapping("/calcular/total-venda")
    public double calculaTotalVenda(@Valid @RequestBody ProdutoCarrinho carrinho){
        return 0.0;
    }
    @GetMapping("/produtos-carrinho")
    public void exibeProdutosCarrinho(@Valid @RequestBody ProdutoCarrinho carrinho){

    }

    @GetMapping("/finalizar-compra")
    public double finalizarCompra(@Valid @RequestBody ProdutoCarrinho carrinho){
        return 0.0;
    }
*/
@GetMapping("/{idComprador}")
public ResponseEntity getProdutosCarrinho(@PathVariable Long idComprador){

    if(produtoCarrinhoRepository.findAllByCarrinhoCompradorId(idComprador).isEmpty()){
        return ResponseEntity.status(204).build();
    }else {
        return ResponseEntity.status(200).body(produtoCarrinhoRepository.findAllByCarrinhoCompradorId(idComprador));
    }
}

}

