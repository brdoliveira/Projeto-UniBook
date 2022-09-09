package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.Comprador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface CompradorRepository extends JpaRepository<Comprador, Long> {
    @Query("update Comprador a set a.foto = ?2 where a.id = ?1")
    @Modifying
    @Transactional
    void atualizarFoto(Long codigo, byte[] novaFoto);

    @Query("select a.foto from Comprador a where a.id = ?1")
    byte[] getFoto(Long codigo);
}
