package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Administrador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdministradorRepository extends JpaRepository<Administrador, Long> {

}
