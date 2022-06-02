package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "tblEndereco")
public class Endereco {

    public Endereco() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @NotNull
    @NotBlank
    @Length(min = 15, max = 150)
    @Column
    private String bairro;

    @NotNull
    @NotBlank
    @Length(min = 5, max = 100)
    @Column
    private String cidade;

    @NotNull
    @NotBlank
    @Length(min = 5, max = 100)
    @Column
    private String estado;
    @NotNull
    @NotBlank
    @Length(min = 5, max = 100)
    @Column
    private String logradouro;

    @Min(1)
    @NotNull
    @Column
    private int numero;

    @NotNull
    @NotBlank
    @Length(min = 9, max = 9)
    @Column
    private String cep;

    public Endereco(String bairro, String cidade, String estado,
                    String logradouro, int numero, String cep) {
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
    }



    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getLogradouro() {
        return logradouro;
    }

    public void setLogradouro(String logradouro) {
        this.logradouro = logradouro;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

}
