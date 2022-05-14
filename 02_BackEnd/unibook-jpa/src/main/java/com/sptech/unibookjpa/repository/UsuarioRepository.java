package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
}
