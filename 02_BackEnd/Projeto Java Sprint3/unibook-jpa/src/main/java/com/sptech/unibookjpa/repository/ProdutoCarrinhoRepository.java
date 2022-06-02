package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.ProdutoCarrinho;
import com.sptech.unibookjpa.services.FilaObj;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProdutoCarrinhoRepository extends JpaRepository<ProdutoCarrinho, Long> {
    List<ProdutoCarrinho>  findAllByCarrinhoCompradorId(Long idComprador);
}
