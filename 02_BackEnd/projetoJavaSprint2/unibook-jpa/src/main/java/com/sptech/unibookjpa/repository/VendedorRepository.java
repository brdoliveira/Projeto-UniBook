package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Vendedor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VendedorRepository extends JpaRepository<Vendedor, Long> {

    List<Vendedor> findAll();
}
