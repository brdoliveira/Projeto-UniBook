package com.sptech.unibookjpa.model.dtos.input;

import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.br.CPF;

import javax.persistence.Column;
import javax.validation.constraints.*;

public class VendedorCadastroDto {


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
    private String nomeVendedor;

    //@Past
    @NotNull
    private String dataNascimentoVendedor;//TODO: Adicionar DateTime


    @NotNull
    @NotBlank
    @Length(min = 1, max = 1)
    private String sexoVendedor;

    @NotBlank
    @NotNull
    @CPF
    private String cpfVendedor;

    @Email
    @NotNull
    @NotBlank
    @Length(min = 10, max = 100)
    private String emailVendedor;

    @NotNull
    @NotBlank
    @Length(min = 8, max = 30)
    private String senhaVendedor;



    public VendedorCadastroDto(String cepEndereco, int numeroEndereco, String nomeVendedor,
                                String dataNascimentoVendedor, String sexoVendedor,
                                String cpfVendedor, String emailVendedor,
                                String senhaVendedor) {
        this.cepEndereco = cepEndereco;
        this.numeroEndereco = numeroEndereco;
        this.nomeVendedor = nomeVendedor;
        this.dataNascimentoVendedor = dataNascimentoVendedor;
        this.sexoVendedor = sexoVendedor;
        this.cpfVendedor = cpfVendedor;
        this.emailVendedor = emailVendedor;
        this.senhaVendedor = senhaVendedor;
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

    public String getNomeVendedor() {
        return nomeVendedor;
    }

    public void setNomeVendedor(String nomeVendedor) {
        this.nomeVendedor = nomeVendedor;
    }

    public String getDataNascimentoVendedor() {
        return dataNascimentoVendedor;
    }

    public void setDataNascimentoVendedor(String dataNascimentoVendedor) {
        this.dataNascimentoVendedor = dataNascimentoVendedor;
    }

    public String getSexoVendedor() {
        return sexoVendedor;
    }

    public void setSexoVendedor(String sexoVendedor) {
        this.sexoVendedor = sexoVendedor;
    }

    public String getCpfVendedor() {
        return cpfVendedor;
    }

    public void setCpfVendedor(String cpfVendedor) {
        this.cpfVendedor = cpfVendedor;
    }

    public String getEmailVendedor() {
        return emailVendedor;
    }

    public void setEmailVendedor(String emailVendedor) {
        this.emailVendedor = emailVendedor;
    }

    public String getSenhaVendedor() {
        return senhaVendedor;
    }

    public void setSenhaVendedor(String senhaVendedor) {
        this.senhaVendedor = senhaVendedor;
    }


}
