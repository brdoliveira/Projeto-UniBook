package br.com.sptech.apiprojetounibookjava.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.concurrent.ThreadLocalRandom;

@Entity
@DiscriminatorValue("1")
public class Administrador extends Usuario implements IBoleto {

    @JsonIgnore
    @Column(length = 50_000_000)
    private byte[] foto;

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

    public Administrador() {
    }

    public Administrador(Long id,
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
    public String gerarBoleto(double desconto) {
        return ThreadLocalRandom.current().nextInt() +
                "-" + desconto + "-" + ThreadLocalRandom.current().nextInt();
    }

    @Override
    public String toString() {
        return "Administrador: "+ super.toString();
    }
}
