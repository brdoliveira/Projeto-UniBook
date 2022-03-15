package com.sptech.unibook.model;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;


public class Vendedor extends Usuario implements IBoleto {



    public Vendedor(String nome, String dataNascimento, char sexo,
                    String cpf, String email, String senha, boolean ativo,
                    String bairro, String cidade, String estado,
                    String logradouro, int numero, String cep) {

        super(nome, dataNascimento, sexo, cpf, email, senha,
                ativo, bairro, cidade, estado, logradouro, numero, cep);
    }

    List<ProdutoAnuncio> anuncios =  new ArrayList<>();


    public void adicionarAnuncio(ProdutoAnuncio p){
        anuncios.add(p);
    }

    public void removerAnuncio(ProdutoAnuncio p){
        anuncios.remove(p);
    }

    public void editarAnuncio(ProdutoAnuncio p, ProdutoAnuncio np){

        for (int i = 0; i < anuncios.size(); i++){
            if (anuncios.get(i).equals(p)){
                anuncios.set(i, np);
            }
        }

    }

    public void visualizarAnuncios(){
        for (ProdutoAnuncio p:anuncios) {
            System.out.println(p);
        }
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
