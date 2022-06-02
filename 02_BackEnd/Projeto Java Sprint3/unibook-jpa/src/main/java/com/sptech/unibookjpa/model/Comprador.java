package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("3")
public class Comprador extends Usuario {

    public Comprador() {
    }

    public Comprador(String nome, String dataNascimento, String sexo, String cpf,
                     String email, String senha, boolean ativo, Endereco endereco) {
        super(nome, dataNascimento, sexo, cpf, email, senha, ativo, endereco);
        /*this.favoritos = new ArrayList<>();*/
    }

    public void adicionarFavorito(ProdutoAnuncio p){
        /*favoritos.add(p);*/
    }

    public void removerFavorito(ProdutoAnuncio p){
        /*favoritos.remove(p);*/
    }

    public void verFavoritos(){
/*        for (ProdutoAnuncio p :favoritos) {
            System.out.println(p);
        }*/
    }


    @Override
    public String toString() {
        return "Comprador:\n "+ super.toString();
    }
}
