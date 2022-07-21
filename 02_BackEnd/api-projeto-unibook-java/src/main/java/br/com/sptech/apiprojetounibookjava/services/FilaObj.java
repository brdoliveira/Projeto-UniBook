package br.com.sptech.apiprojetounibookjava.services;

import java.util.Objects;

public class FilaObj<T> {

    private int capacidade;
    private int tamanho;
    private T[] fila;

    public FilaObj(int capacidade) {
        this.capacidade = capacidade;
        this.fila = (T[]) new Object[capacidade];
        this.tamanho = 0;
    }
    public boolean isEmpty() {
        if(Objects.isNull(fila[0])){
            return true;
        }return false;

    }

    public boolean isFull() {
        if(tamanho >= capacidade) {
            return true;
        }return  false;
    }

    public void insert(T info) {
        if(!isFull()){
            fila[tamanho] = info;
            tamanho++;
        }else{
            throw new IllegalStateException("A Fila está cheia");
        }
    }
    public T peek() {
        return fila[0];
    }

    public T poll() {
        T primeiro = fila[0];

        for (int i = 0; i < tamanho-1; i++) {
            fila[i] = fila[i+1];
        }
        fila[tamanho-1] = null;
        tamanho--;
        return primeiro;

    }

    public void exibe() {
        for (T item:fila) {
            System.out.println(item);
        }

    }

    public int getTamanho(){
        return tamanho;
    }



    public T[] getFila() {
        return fila;
    }
}