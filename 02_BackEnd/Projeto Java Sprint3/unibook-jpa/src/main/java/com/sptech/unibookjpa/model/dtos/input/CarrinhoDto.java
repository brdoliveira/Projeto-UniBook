package com.sptech.unibookjpa.model.dtos.input;

import com.sptech.unibookjpa.model.ProdutoCarrinho;
import org.hibernate.validator.constraints.Length;
import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

public class CarrinhoDto {

    public CarrinhoDto(String status, Long comprador) {
        this.status = status;
        this.comprador = comprador;
    }

    public CarrinhoDto() {
    }

    @NotBlank
    @NotNull
    @Length(min = 2, max = 20)
    @Column
    private String status;

    @NotNull
    @Column
    private Long comprador;


    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getComprador() {
        return comprador;
    }

    public void setComprador(Long comprador) {
        this.comprador = comprador;
    }

}
