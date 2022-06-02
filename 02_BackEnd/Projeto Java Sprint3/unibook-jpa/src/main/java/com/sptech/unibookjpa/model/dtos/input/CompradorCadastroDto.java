package com.sptech.unibookjpa.model.dtos.input;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.Column;
import javax.validation.constraints.*;

public class CompradorCadastroDto {

    @NotNull
    @NotBlank
    //@Length(min = 9, max = 9)
    @Column
    private String cepEndereco;

    @Min(1)
    @NotNull
    @Column
    private int numeroEndereco;

    @NotNull
    @NotBlank
    @Size(min = 3, max = 255)
    private String nomeComprador;

    //@Past
    @NotNull
    private String dataNascimentoComprador;//TODO: Adicionar DateTime


    @NotNull
    @NotBlank
    @Length(min = 1, max = 1)
    private String sexoComprador;

    @NotBlank
    @NotNull
    @CPF
    private String cpfComprador;

    @Email
    @NotNull
    @NotBlank
    @Length(min = 10, max = 100)
    private String emailComprador;

    @NotNull
    @NotBlank
    @Length(min = 8, max = 30)
    private String senhaComprador;



    public CompradorCadastroDto(String cepEndereco, int numeroEndereco, String nomeComprador,
                                    String dataNascimentoComprador, String sexoComprador,
                                    String cpfComprador, String emailComprador,
                                    String senhaComprador) {
        this.cepEndereco = cepEndereco;
        this.numeroEndereco = numeroEndereco;
        this.nomeComprador = nomeComprador;
        this.dataNascimentoComprador = dataNascimentoComprador;
        this.sexoComprador = sexoComprador;
        this.cpfComprador = cpfComprador;
        this.emailComprador = emailComprador;
        this.senhaComprador = senhaComprador;
    }

    public String getCepEndereco() {
        return cepEndereco;
    }

    public void setCepEndereco(String cepEndereco) {
        this.cepEndereco = cepEndereco;
    }

    public int getNumeroEndereco() {
        return numeroEndereco;
    }

    public void setNumeroEndereco(int numeroEndereco) {
        this.numeroEndereco = numeroEndereco;
    }

    public String getNomeComprador() {
        return nomeComprador;
    }

    public void setNomeComprador(String nomeComprador) {
        this.nomeComprador = nomeComprador;
    }

    public String getDataNascimentoComprador() {
        return dataNascimentoComprador;
    }

    public void setDataNascimentoComprador(String dataNascimentoComprador) {
        this.dataNascimentoComprador = dataNascimentoComprador;
    }

    public String getSexoComprador() {
        return sexoComprador;
    }

    public void setSexoComprador(String sexoComprador) {
        this.sexoComprador = sexoComprador;
    }

    public String getCpfComprador() {
        return cpfComprador;
    }

    public void setCpfComprador(String cpfComprador) {
        this.cpfComprador = cpfComprador;
    }

    public String getEmailComprador() {
        return emailComprador;
    }

    public void setEmailComprador(String emailComprador) {
        this.emailComprador = emailComprador;
    }

    public String getSenhaComprador() {
        return senhaComprador;
    }

    public void setSenhaComprador(String senhaComprador) {
        this.senhaComprador = senhaComprador;
    }



}
