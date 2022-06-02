package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Comprador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CompradorRepository extends JpaRepository<Comprador, Long> {

    List<Comprador> findAll();

}
