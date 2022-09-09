package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.ProdutoFavorito;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProdutoFavoritoRepository extends JpaRepository<ProdutoFavorito, Long> {

}
