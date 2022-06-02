package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.ProdutoAnuncio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface ProdutoAnuncioRepository extends JpaRepository<ProdutoAnuncio, Long> {

    @Query("update ProdutoAnuncio a set a.foto = ?2 where a.id = ?1")
    @Modifying
    @Transactional
    void atualizarFoto(Long id, byte[] novaFoto);

    @Query("select a.foto from ProdutoAnuncio a where a.id = ?1")
    byte[] getFoto(Long id);
}
