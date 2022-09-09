package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.ProdutoAnuncio;
import org.springframework.data.jpa.repository.JpaRepository;
public interface FavoritosRepository extends JpaRepository<ProdutoAnuncio, Long> {

}
