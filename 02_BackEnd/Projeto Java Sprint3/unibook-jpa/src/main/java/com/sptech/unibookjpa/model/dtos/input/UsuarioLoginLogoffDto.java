package com.sptech.unibookjpa.model.dtos.input;

public class UsuarioLoginLogoffDto {

    private String email;
    private String senha;

    public UsuarioLoginLogoffDto(String email, String senha) {
        this.email = email;
        this.senha = senha;
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


}
