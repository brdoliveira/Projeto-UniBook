package com.sptech.unibookjpa.servicesTeste;

import com.sptech.unibookjpa.services.ListaObj;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class ListaObjTest {

    @Test
    void adiciona() {
        ListaObj<Integer> listaObj = new ListaObj<Integer>(1);
        assertFalse(listaObj.removeElemento(0));
        listaObj.adiciona(10);
    }

    @Test
    void busca() {
        ListaObj<Integer> listaObj = new ListaObj<Integer>(1);
        assertFalse(listaObj.removeElemento(10));
        listaObj.busca(10);
    }

    @Test
    void removePeloIndice() {
        ListaObj<Integer> listaObj = new ListaObj<Integer>(1);
        assertFalse(listaObj.removeElemento(10));
        listaObj.removePeloIndice(1);
    }

    @Test
    void removeElemento() {
        ListaObj<Integer> listaObj = new ListaObj<Integer>(1);
        assertFalse(listaObj.removeElemento(10));
        listaObj.removeElemento(10);
    }

    @Test
    void limpa() {
        ListaObj<Integer> listaObj = new ListaObj<Integer>(1);
        assertFalse(listaObj.removeElemento(10));
        listaObj.limpa();
    }
}