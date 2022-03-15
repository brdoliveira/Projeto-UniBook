package com.sptech.unibook.model;

public class Endereco {

    private String bairro;
    private String cidade;
    private String estado;
    private String logradouro;
    private int numero;
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

    @Override
    public String toString() {
        return "Endereco:\n" +
                "Bairro: " + bairro + ",\n" +
                "Cidade: " + cidade + ",\n" +
                "Estado:" + estado + ",\n" +
                "Logradouro: " + logradouro + ",\n" +
                "Numero: " + numero +
                "CEP: " + cep + ",\n";
    }
}
