package com.sptech.unibookjpa.model;


import javax.persistence.*;
import java.util.List;
import java.util.concurrent.ThreadLocalRandom;

@Entity
@DiscriminatorValue("1")
public class Administrador extends Usuario implements IBoleto {
    public Administrador() {
    }

    public Administrador(String nome, String dataNascimento, char sexo, String cpf,
                         String email, String senha, boolean ativo, Endereco endereco) {

        super(nome, dataNascimento, sexo, cpf, email, senha, ativo, endereco);
    }


    public void removerProduto(List<ProdutoAnuncio> listaProduto, ProdutoAnuncio p){
        listaProduto.remove(p);
    }

    public void removerUsuario(List<Usuario> usuarios,Usuario u){
        usuarios.remove(u);
    }

    public void alterarSenha(Usuario u, String novaSenha){
        u.setSenha(novaSenha);
    }


    @Override
    public String gerarBoleto(double desconto) {
        return ThreadLocalRandom.current().nextInt() +
                "-" + desconto + "-" + ThreadLocalRandom.current().nextInt();
    }

    @Override
    public String toString() {
        return "Administrador: "+ super.toString();
    }
}
