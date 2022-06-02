package com.sptech.unibookjpa.model;

import lombok.NoArgsConstructor;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import java.util.concurrent.ThreadLocalRandom;


@Entity
@NoArgsConstructor
@DiscriminatorValue("2")
public class Vendedor extends Usuario implements IBoleto {



    public Vendedor(String nome, String dataNascimento, String sexo,
                    String cpf, String email, String senha, boolean ativo,
                     Endereco endereco) {

        super(nome, dataNascimento, sexo, cpf, email, senha, ativo, endereco);
    }




    public void adicionarAnuncio(ProdutoAnuncio p){

    }

    public void removerAnuncio(ProdutoAnuncio p){

    }

    public void editarAnuncio(ProdutoAnuncio p, ProdutoAnuncio np){
/*
        for (int i = 0; i < anuncios.size(); i++){
            if (anuncios.get(i).equals(p)){
                anuncios.set(i, np);
            }
        }*/

    }

    public void visualizarAnuncios(){
/*        for (ProdutoAnuncio p:anuncios) {
            System.out.println(p);
        }*/
    }

    @Override
    public String gerarBoleto(double desconto) {
        return ThreadLocalRandom.current().nextInt() +
                "-" + desconto + "-" + ThreadLocalRandom.current().nextInt() ;
    }

    @Override
    public String toString() {
        return "Vendedor: \n "+ super.toString();
    }
}
