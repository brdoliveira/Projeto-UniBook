package com.sptech.unibookjpa.servicesTeste;

import com.sptech.unibookjpa.services.FilaObj;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class FilaObjTest {

    @Test
    void isEmptyQuandoFilaVazia() {
            FilaObj<Integer> filaTest = new FilaObj(8);
            assertTrue(filaTest.isEmpty());
            filaTest.insert(10);
            filaTest.insert(20);
            filaTest.insert(30);
            filaTest.insert(40);
            filaTest.insert(50);
            filaTest.insert(60);
            filaTest.insert(70);
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertFalse(filaTest.isEmpty());
            filaTest.poll();
            assertTrue(filaTest.isEmpty());
    }

    @Test
    void isFullTrueQuandoFilaPreenchida() {
        FilaObj<Integer> filaTest = new FilaObj(5);
        filaTest.insert(10);
        assertFalse(filaTest.isFull());
        filaTest.insert(20);
        assertFalse(filaTest.isFull());
        filaTest.insert(30);
        assertFalse(filaTest.isFull());
        filaTest.insert(40);
        assertFalse(filaTest.isFull());
        filaTest.insert(50);
        assertTrue(filaTest.isFull());
    }

    @Test
    void insertLancaIllegalStateExceptionQuandoFilaCheia() {
        FilaObj<Integer> filaTest = new FilaObj(6);
        filaTest.insert(30);
        filaTest.insert(40);
        filaTest.insert(50);
        filaTest.insert(60);
        filaTest.insert(70);
        filaTest.insert(80);
        assertThrows(IllegalStateException.class, () -> filaTest.insert(90));
    }

    @Test
    public void insertQuandoFilaRetornaCem() {
        FilaObj<Integer> filaTest = new FilaObj(6);
        filaTest.insert(100);
        assertEquals(100, filaTest.peek());
        filaTest.insert(200);
        assertEquals(100, filaTest.peek());
        filaTest.insert(300);
        assertEquals(100, filaTest.peek());
        filaTest.insert(400);
        assertEquals(100, filaTest.peek());
    }

    @Test
    public void peekQuandoFilaRetornaCem() {
        FilaObj<Integer> filaTest = new FilaObj(3);
        filaTest.insert(100);
        filaTest.insert(200);
        filaTest.insert(300);
        assertEquals(100, filaTest.peek());
    }

    @Test
    public void poolQuandoFilaRetornaDez() {
        FilaObj<Integer> filaTest = new FilaObj(3);
        filaTest.insert(100);
        filaTest.insert(200);
        filaTest.insert(300);
        assertEquals(100, filaTest.poll());
    }
}