package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.Usuario;
import br.com.sptech.apiprojetounibookjava.model.dtos.response.UsuarioGeralDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmailAndSenha(String email, String senha);
    List<UsuarioGeralDto> findByAtivoOrderByNome(boolean ativo);

    @Query("update Usuario a set a.foto = ?2 where a.id = ?1")
    @Modifying
    @Transactional
    void atualizarFoto(Long codigo, byte[] novaFoto);

    @Query("select a.foto from Usuario a where a.id = ?1")
    byte[] getFoto(Long codigo);

}
