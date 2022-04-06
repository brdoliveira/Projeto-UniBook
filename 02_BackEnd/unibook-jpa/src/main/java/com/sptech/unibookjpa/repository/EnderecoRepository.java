package com.sptech.unibookjpa.repository;

import com.sptech.unibookjpa.model.Endereco;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Endereco, Long> {

    Endereco findByCepAndNumero(String cep, int numero);

}
