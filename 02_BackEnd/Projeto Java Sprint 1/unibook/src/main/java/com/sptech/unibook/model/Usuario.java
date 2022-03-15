package com.sptech.unibook.model;

import java.util.List;

public abstract class Usuario {

    private String nome;
    private String dataNascimento;
    private char sexo;
    private String cpf;
    private String email;
    private String senha;
    private boolean ativo;

    public Usuario(String nome, String dataNascimento, char sexo,
                   String cpf, String email, String senha, boolean ativo,
                   String bairro, String cidade, String estado,
                   String logradouro, int numero, String cep) {

        Endereco endereco = new Endereco(bairro, cidade, estado, logradouro,
                numero, cep);
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
    }


    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public char getSexo() {
        return sexo;
    }

    public void setSexo(char sexo) {
        this.sexo = sexo;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    @Override
    public String toString() {
        return "Usuario: \n" +
                "Nome: " + nome + ", \n" +
                "Data Nasimento: " + dataNascimento + ", \n" +
                "Sexo: " + sexo + ", \n" +
                "Cpf: " + cpf + ", \n" +
                "Email: " + email + ", \n" +
                "Senha: " + senha + ", \n" +
                "Ativo: " + ativo + " \n";
    }



}
