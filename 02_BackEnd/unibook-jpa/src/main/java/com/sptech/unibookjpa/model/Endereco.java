package com.sptech.unibookjpa.model;

import javax.persistence.*;

@Entity
@Table(name = "tblEndereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    private String bairro;


    private String cidade;


    private String estado;


    private String logradouro;


    private int numero;


    private String cep;

//    Construtor sem argumentos
    public Endereco(){}

//
//    public Endereco(String bairro, String cidade, String estado,
//                    String logradouro, int numero, String cep) {
//        this.bairro = bairro;
//        this.cidade = cidade;
//        this.estado = estado;
//        this.logradouro = logradouro;
//        this.numero = numero;
//        this.cep = cep;
//    }



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
