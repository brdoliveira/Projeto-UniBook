package br.com.sptech.apiprojetounibookjava.services;

import java.text.Collator;
import java.util.Arrays;
import java.util.Locale;

public class PilhaObj <T> {

    private int topo;
    private T[] pilha;

    public PilhaObj(int tamanhoPilha) {
        this.topo = -1;
        this.pilha = (T[]) new Object[tamanhoPilha];
    }


    public boolean isEmpty(){
        if(topo <= -1){
            return true;
        }else {
            return false;
        }
    }

    public boolean isFull(){
        if (topo >= pilha.length-1){
            return true;
        }else {
            return false;
        }
    }

    public void push(T info){
        if(!isFull()){
            pilha[++topo] = info;
        }else{
            throw new IllegalStateException("Pilha cheia");
        }
    }

    public T pop(){
        if(!isEmpty()){
            return pilha[topo--];
        }else {
            return null;
        }
    }

    public T peek(){
        if(!isEmpty()){
            return pilha[topo];
        }else{
            return null;
        }
    }

    public void exibe(){
        if(!isEmpty()){
            for (T item:pilha) {
                System.out.println(item);
            }
        }else{
            System.out.println("Pilha vazia");
        }
    }

    public void exibeLinha(){
        if(!isEmpty()){
            for (T item:pilha) {
                System.out.print(item);
            }
        }else{
            System.out.println("Pilha vazia");
        }
    }

    public void exibeInverso(){
        if(!isEmpty()){
            for (int i = pilha.length-1; i > -1; i--) {
                System.out.println(pilha[i]);
            }
        }else{
            System.out.println("Pilha vazia");
        }

    }

    public void inverterString(String texto){
        char[] textoChar = texto.toCharArray();
        for (int i = textoChar.length-1; i >= 0 ; i--) {
            System.out.print(textoChar[i]);
        }
        System.out.println();
    }

    public boolean isPolindromo(String texto) {

        texto = texto.replace(" ", "").replace("-", "");

        String invertida = new StringBuffer(texto).reverse().toString()
                .replace(" ", "")
                .replace("-", "");

        Collator collator = Collator.getInstance (new Locale("pt", "BR"));
        collator.setStrength(Collator.PRIMARY);

        if(collator.compare (texto, invertida) == 0){
            return true;
        }else{
            return false;
        }

    }

    public PilhaObj<T> multiPop (int n){

        PilhaObj<T> aux = new PilhaObj<>(n);

        if (!isEmpty()){

            for (int i = 0; i < n; i++) {
                aux.push(pop());
            }

            return aux;
        }else{
            return null;
        }
    }

    public void multiPush (PilhaObj <T> aux){
        if (!isEmpty()){

            for (int i = 0; i < aux.getTopo(); i++) {
                push(aux.pop());
            }
        }else{
            System.out.println("Pilha Vazia");;
        }
    }



    public int getTopo() {
        return topo;
    }

    public void setTopo(int topo) {
        this.topo = topo;
    }

    public T[] getPilha() {
        return pilha;
    }

    public void setPilha(T[] pilha) {
        this.pilha = pilha;
    }

    @Override
    public String toString() {
        return "Pilha{" +
                "topo=" + topo +
                ", pilha=" + Arrays.toString(pilha) +
                '}';
    }
}