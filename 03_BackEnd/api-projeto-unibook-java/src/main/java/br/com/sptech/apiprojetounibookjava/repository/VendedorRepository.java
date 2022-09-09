package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface VendedorRepository extends JpaRepository<Vendedor, Long> {

    @Query("update Vendedor a set a.foto = ?2 where a.id = ?1")
    @Modifying
    @Transactional
    void atualizarFoto(Long codigo, byte[] novaFoto);

    @Query("select a.foto from Vendedor a where a.id = ?1")
    byte[] getFoto(Long codigo);
}
