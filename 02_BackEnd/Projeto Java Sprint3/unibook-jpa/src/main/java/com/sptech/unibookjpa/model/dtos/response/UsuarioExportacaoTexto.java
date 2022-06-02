package com.sptech.unibookjpa.model.dtos.response;

import com.sptech.unibookjpa.model.Endereco;

import javax.persistence.*;

public class UsuarioExportacaoTexto {

        public UsuarioExportacaoTexto() {
        }

        private Long id;
        private String nome;

        private String dataNascimento;

        private String cpf;

        private String email;

        private String senha;

        @ManyToOne
        @JoinColumn(name = "fkEndereco", referencedColumnName = "id", nullable = false)
        private Endereco endereco;

        public UsuarioExportacaoTexto(String nome, String dataNascimento,
                       String cpf, String email, String senha, Endereco endereco) {

            this.nome = nome;
            this.dataNascimento = dataNascimento;
            this.cpf = cpf;
            this.email = email;
            this.senha = senha;
            this.endereco = endereco;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
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

        public Endereco getEndereco() {
            return endereco;
        }

        public void setEndereco(Endereco endereco) {
            this.endereco = endereco;
        }

    }



