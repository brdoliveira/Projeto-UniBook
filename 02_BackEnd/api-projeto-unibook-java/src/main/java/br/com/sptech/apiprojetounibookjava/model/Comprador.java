package br.com.sptech.apiprojetounibookjava.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("3")
public class Comprador extends Usuario {

    @JsonIgnore
    @Column(length = 50_000_000)
    private byte[] foto;

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public Comprador() {
    }

    public Comprador(Long id,
                     String nome,
                     String dataNascimento,
                     String sexo,
                     String cpf,
                     String email,
                     String senha,
                     boolean ativo,
                     String endereco,
                     String municipio,
                     String bairro,
                     String uf) {
        super(id, nome, dataNascimento, sexo, cpf, email, senha, ativo, endereco, municipio, bairro, uf);
    }

    @Override
    public String toString() {
        return "Comprador:\n "+ super.toString();
    }
}
