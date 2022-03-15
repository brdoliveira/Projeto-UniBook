package com.sptech.unibook.model;

import java.util.ArrayList;
import java.util.List;


public class Comprador extends Usuario {


    private List<ProdutoAnuncio> favoritos;

    public Comprador(String nome, String dataNascimento, char sexo, String cpf,
                     String email, String senha, boolean ativo,
                     String bairro, String cidade, String estado, String logradouro,
                     int numero, String cep) {
        super(nome, dataNascimento, sexo, cpf, email, senha, ativo,
                bairro, cidade, estado, logradouro, numero, cep);
        this.favoritos = new ArrayList<>();
    }

    public void adicionarFavorito(ProdutoAnuncio p){
        favoritos.add(p);
    }

    public void removerFavorito(ProdutoAnuncio p){
        favoritos.remove(p);
    }

    public void verFavoritos(){
        for (ProdutoAnuncio p :favoritos) {
            System.out.println(p);
        }
    }


    @Override
    public String toString() {
        return "Comprador:\n "+ super.toString();
    }
}
