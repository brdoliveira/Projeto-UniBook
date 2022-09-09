package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.ProdutoCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProdutoCarrinhoRepository extends JpaRepository<ProdutoCarrinho, Long> {
}
