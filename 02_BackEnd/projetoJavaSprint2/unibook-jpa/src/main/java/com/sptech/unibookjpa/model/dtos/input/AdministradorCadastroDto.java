package com.sptech.unibookjpa.model.dtos.input;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.Column;
import javax.validation.constraints.*;

public class AdministradorCadastroDto {

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
    private String nomeAdministrador;

    //@Past
    @NotNull
    private String dataNascimentoAdministrador;//TODO: Adicionar DateTime


    @NotNull
    @NotBlank
    @Length(min = 1, max = 1)
    private String sexoAdministrador;

    @NotBlank
    @NotNull
    @CPF
    private String cpfAdministrador;

    @Email
    @NotNull
    @NotBlank
    @Length(min = 10, max = 100)
    private String emailAdministrador;

    @NotNull
    @NotBlank
    @Length(min = 8, max = 30)
    private String senhaAdministrador;



    public AdministradorCadastroDto(String cepEndereco, int numeroEndereco, String nomeAdministrador,
                                    String dataNascimentoAdministrador, String sexoAdministrador,
                                    String cpfAdministrador, String emailAdministrador,
                                    String senhaAdministrador) {
        this.cepEndereco = cepEndereco;
        this.numeroEndereco = numeroEndereco;
        this.nomeAdministrador = nomeAdministrador;
        this.dataNascimentoAdministrador = dataNascimentoAdministrador;
        this.sexoAdministrador = sexoAdministrador;
        this.cpfAdministrador = cpfAdministrador;
        this.emailAdministrador = emailAdministrador;
        this.senhaAdministrador = senhaAdministrador;
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

    public String getNomeAdministrador() {
        return nomeAdministrador;
    }

    public void setNomeAdministrador(String nomeAdministrador) {
        this.nomeAdministrador = nomeAdministrador;
    }

    public String getDataNascimentoAdministrador() {
        return dataNascimentoAdministrador;
    }

    public void setDataNascimentoAdministrador(String dataNascimentoAdministrador) {
        this.dataNascimentoAdministrador = dataNascimentoAdministrador;
    }

    public String getSexoAdministrador() {
        return sexoAdministrador;
    }

    public void setSexoAdministrador(String sexoAdministrador) {
        this.sexoAdministrador = sexoAdministrador;
    }

    public String getCpfAdministrador() {
        return cpfAdministrador;
    }

    public void setCpfAdministrador(String cpfAdministrador) {
        this.cpfAdministrador = cpfAdministrador;
    }

    public String getEmailAdministrador() {
        return emailAdministrador;
    }

    public void setEmailAdministrador(String emailAdministrador) {
        this.emailAdministrador = emailAdministrador;
    }

    public String getSenhaAdministrador() {
        return senhaAdministrador;
    }

    public void setSenhaAdministrador(String senhaAdministrador) {
        this.senhaAdministrador = senhaAdministrador;
    }

}
