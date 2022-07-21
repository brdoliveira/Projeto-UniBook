package br.com.sptech.apiprojetounibookjava.repository;

import br.com.sptech.apiprojetounibookjava.model.Comprador;
import org.springframework.data.jpa.repository.JpaRepository;
public interface CompradorRepository extends JpaRepository<Comprador, Long> {

}
