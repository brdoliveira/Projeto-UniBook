package br.com.sptech.apiprojetounibookjava.services;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Formatter;
import java.util.FormatterClosedException;
import java.util.NoSuchElementException;
import java.util.Scanner;

public class AdministradorPdf {

    public static void gravaArquivoCsv(String lista, String nomeArq) {
        FileWriter arq = null;
        Formatter saida = null;
        Boolean deuRuim = false;
        nomeArq += ".pdf";

        try {
            arq = new FileWriter(nomeArq);
            saida = new Formatter(arq);
        } catch (IOException erro) {
            System.out.println("Erro ao abrir o arquivo!");
            System.exit(1);
        }

        try {
            saida.format(lista);
        } catch (FormatterClosedException erro) {
            System.out.println("Erro ao gravar arquivo");
            deuRuim = true;
        } finally {
            saida.close();
            try {
                arq.close();
            } catch (IOException erro) {
                System.out.println("Erro ao fechar o arquivo");
                deuRuim = true;
            }
            if (deuRuim) {
                System.exit(1);
            }
        }
    }

    public static void leArquivoCsv(String nomeArq) {
        FileReader arq = null;
        Scanner entrada = null;
        Boolean deuRuim = false;
        nomeArq += ".pdf";

        try {
            arq = new FileReader(nomeArq);
            entrada = new Scanner(arq).useDelimiter(";|\\n");
        } catch (FileNotFoundException erro) {
            System.out.println("Arquivo não encontrado");
            System.exit(1);
        }
            try {
                System.out.printf("%-50s %-80s %-5s\n","Email","Nome","Ativo");
                while (entrada.hasNext()) {
                    String email = entrada.next();
                    String nome = entrada.next();
                    boolean ativo = entrada.nextBoolean();
                    System.out.printf(email, nome, ativo);
                }
            }

            catch (NoSuchElementException erro) {
                System.out.println("Arquivo com problemas");
                deuRuim = true;
            }
            catch (IllegalStateException erro) {
                System.out.println("Erro na leitura do arquivo");
                deuRuim = true;
            }
            finally {
                entrada.close();
                try {
                    arq.close();
                }
                catch (IOException erro) {
                    System.out.println("Erro ao fechar o arquivo");
                    deuRuim = true;
                }
                if (deuRuim) {
                    System.exit(1);
                }
            }
        }
    }
