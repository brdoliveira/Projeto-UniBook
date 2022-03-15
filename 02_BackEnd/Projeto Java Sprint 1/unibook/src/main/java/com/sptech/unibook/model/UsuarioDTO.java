package com.sptech.unibook.model;

public class UsuarioDTO {

    private String email;
    private String nome;
    private boolean ativo;

    public UsuarioDTO(String email, String nome, boolean ativo) {
        this.email = email;
        this.nome = nome;
        this.ativo = ativo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }
}
