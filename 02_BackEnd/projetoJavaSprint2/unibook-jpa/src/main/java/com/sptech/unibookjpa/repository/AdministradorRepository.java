package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

    Optional<Administrador> findByEmailAndSenha(String email, String senha);
    List<Administrador> findAll();

}
