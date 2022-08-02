package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {
    @Query("update Administrador a set a.foto = ?2 where a.id = ?1")
    @Modifying
    @Transactional
    void atualizarFoto(Long codigo, byte[] novaFoto);

    @Query("select a.foto from Administrador a where a.id = ?1")
    byte[] getFoto(Long codigo);
}
