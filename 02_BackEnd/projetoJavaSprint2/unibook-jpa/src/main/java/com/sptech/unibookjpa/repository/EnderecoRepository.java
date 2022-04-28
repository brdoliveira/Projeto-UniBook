package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

    Optional<Endereco> findByCepAndNumero(String cep, int numero);

}
