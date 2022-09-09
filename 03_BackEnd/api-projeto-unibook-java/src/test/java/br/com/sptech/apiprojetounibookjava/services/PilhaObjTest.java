package br.com.sptech.apiprojetounibookjava.services;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PilhaObjTest {

    @Test
    void isEmpty() {
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(8);
        assertTrue(pilhaTest.isEmpty());
        pilhaTest.push( 10);
        pilhaTest.push(20);
        pilhaTest.push(30);
        pilhaTest.push(40);
        pilhaTest.push(50);
        pilhaTest.push(60);
        pilhaTest.push(70);
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertFalse(pilhaTest.isEmpty());
        pilhaTest.pop();
        assertTrue(pilhaTest.isEmpty());
    }

    @Test
    void isFull() {
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(5);
        pilhaTest.push(10);
        assertFalse(pilhaTest.isFull());
        pilhaTest.push(20);
        assertFalse(pilhaTest.isFull());
        pilhaTest.push(30);
        assertFalse(pilhaTest.isFull());
        pilhaTest.push(40);
        assertFalse(pilhaTest.isFull());
        pilhaTest.push(50);
        assertTrue(pilhaTest.isFull());
    }

    @Test
    void pushLancaIllegalStateExceptionQuandoPilhaCheia(){
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(6);
        pilhaTest.push(30);
        pilhaTest.push(40);
        pilhaTest.push(50);
        pilhaTest.push(60);
        pilhaTest.push(70);
        pilhaTest.push(80);
        assertThrows(IllegalStateException.class, () -> pilhaTest.push(90));
    }

    @Test
    void pushQuandoPilhaIndiceRetornaTrezentos() {
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(6);
        pilhaTest.push(100);
        assertEquals(100, pilhaTest.peek());
        pilhaTest.push(200);
        assertEquals(200, pilhaTest.peek());
        pilhaTest.push(300);
        assertEquals(300, pilhaTest.peek());
    }

    @Test
    void popQuandoPilhaIndiceRetornaTrezentos() {
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(6);
        pilhaTest.push(100);
        pilhaTest.push(200);
        pilhaTest.push(300);
        assertEquals(300, pilhaTest.pop());
    }

    @Test
    void peekQuandoPilhaIndiceRetornaTrezentos() {
        PilhaObj<Integer> pilhaTest = new PilhaObj<>(6);
        pilhaTest.push(100);
        pilhaTest.push(200);
        pilhaTest.push(300);
        assertEquals(300, pilhaTest.peek());
    }
}