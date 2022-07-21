package br.com.sptech.apiprojetounibookjava.model;

import org.hibernate.validator.constraints.Length;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "tblFavorito")
public class Favorito {

    public Favorito(){
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
    private List<ProdutoFavorito> ProdutoFavoritos;

    @OneToOne
    @JoinColumn(name = "fkUsuarioComprador", referencedColumnName = "id", nullable = false)
    private Comprador comprador;

    public Favorito(Long id,
                    String status,
                    List<ProdutoFavorito> produtoFavoritos,
                    Comprador comprador) {
        this.id = id;
        this.status = status;
        ProdutoFavoritos = new ArrayList<>();
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

    public List<ProdutoFavorito> getProdutoFavoritos() {
        return ProdutoFavoritos;
    }

    public void setProdutoFavoritos(List<ProdutoFavorito> produtoFavoritos) {
        ProdutoFavoritos = produtoFavoritos;
    }

    public Comprador getComprador() {
        return comprador;
    }

    public void setComprador(Comprador comprador) {
        this.comprador = comprador;
    }
}
