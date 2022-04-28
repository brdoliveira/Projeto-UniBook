package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Table(name = "tblCarrinho")
public class Carrinho {

    public Carrinho() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    @NotBlank
    @NotNull
    @Length(min = 2, max = 20)
    @Column
    private String status;

    @OneToMany
    private List<ProdutoCarrinho> ProdutosCarrinho;

    @OneToOne
    @JoinColumn(name = "fkUsuarioComprador", referencedColumnName = "id", nullable = false)
    private Comprador comprador;


    public Carrinho(Long id, String status, List<ProdutoCarrinho> produtosCarrinho, Comprador comprador) {
        this.id = id;
        this.status = status;
        ProdutosCarrinho = produtosCarrinho;
        this.comprador = comprador;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public List<ProdutoCarrinho> getProdutosCarrinho() {
        return ProdutosCarrinho;
    }

    public void setProdutosCarrinho(List<ProdutoCarrinho> produtosCarrinho) {
        ProdutosCarrinho = produtosCarrinho;
    }

    public Comprador getComprador() {
        return comprador;
    }

    public void setComprador(Comprador comprador) {
        this.comprador = comprador;
    }


}
