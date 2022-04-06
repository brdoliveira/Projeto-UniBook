package com.sptech.unibookjpa.model;

//TODO: Tirar o lambook
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.*;
import javax.validation.constraints.*;

@Entity
@Table(name = "tblUsuario")
@NoArgsConstructor
@DiscriminatorColumn(name="tipo_usuario",discriminatorType = DiscriminatorType.INTEGER)
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 255)
    @Column(nullable = false)
    private String nome;

    @Past
    @NotNull
    @Column(nullable = false)
    private String dataNascimento;

    @NotNull
    @NotBlank
    @Size(max = 1)
    @Column(nullable = false)
    private Character sexo;

    @NotBlank
    @NotNull
    @CPF
    @Column(nullable = false)
    private String cpf;

    @Email
    @NotNull
    @NotBlank
    @Column(nullable = false)
    private String email;

    @NotBlank
    @NotNull
    @Column(nullable = false)
    private String senha;

    @NotNull
    @NotBlank
    @Column(nullable = false)
    private Boolean ativo;

    @ManyToOne
    @JoinColumn(name = "fkEndereco", referencedColumnName = "id", nullable = false)
    private Endereco endereco;

    public Usuario(String nome, String dataNascimento, char sexo,
                   String cpf, String email, String senha, boolean ativo, Endereco endereco) {

        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.ativo = ativo;
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

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }

}
