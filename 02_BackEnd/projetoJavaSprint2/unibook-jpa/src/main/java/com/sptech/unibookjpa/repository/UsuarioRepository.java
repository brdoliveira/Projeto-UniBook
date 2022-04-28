package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Usuario;
import com.sptech.unibookjpa.model.dtos.response.UsuarioGeralDto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findByEmailAndSenha(String email, String senha);
    List<UsuarioGeralDto> findByAtivoOrderByNome(boolean ativo);

}
