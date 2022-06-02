package com.sptech.unibookjpa.services;

import com.sptech.unibookjpa.model.Administrador;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class UsuarioTxT {
    public static void gravaRegistro(String registro, String nomeArq) {
        BufferedWriter saida = null;

        try {
            saida = new BufferedWriter(new FileWriter(nomeArq, true));
        }
        catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo: " + erro);
        }

        try {
            saida.append(registro + "\n");
            saida.close();
        }
        catch (IOException erro) {
            System.out.println("Erro ao gravar o arquivo: " + erro);
        }
    }

    public static void gravaArquivoTxt(List<Administrador> lista, String nomeArq) {
        int contaRegCorpo = 0;

        // Monta o registro de header
        String header = "00CompraeVenda2022-02";
        header += LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss"));
        header += "V1";


        gravaRegistro(header, nomeArq);


        String corpo;
        for (Administrador a : lista) {
            corpo = "02";
            corpo += String.format("%-5.5s", a.getId());
            corpo += String.format("%-8.8s", a.getDataNascimento());
            corpo += String.format("%-50.50s", a.getNome());
            corpo += String.format("%14.14f", a.getCpf());
            corpo += String.format("%-100.100s", a.getEmail());
            corpo += String.format("%-100.100s", a.getSenha());
            corpo += String.format("%-150.150s", a.getEndereco().getBairro());
            corpo += String.format("%-100.100s", a.getEndereco().getCidade());
            corpo += String.format("%-100.100s", a.getEndereco().getEstado());
            corpo += String.format("%-100.100s", a.getEndereco().getLogradouro());
            contaRegCorpo++;
            gravaRegistro(corpo, nomeArq);
        }


        String trailer = "01";
        trailer += String.format("%07d", contaRegCorpo);
        gravaRegistro(trailer, nomeArq);
    }
}
