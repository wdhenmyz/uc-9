import { numerosPrimos } from "../numerosPrimos";

// Teste para número primo
test('Deve retornar true para um número primo', () => {
    const numero = 7;
    expect(numerosPrimos(numero)).toBe(true);
});

// Teste para número não primo
test('Deve retornar false para um número não primo', () => {
    const numero = 10;
    expect(numerosPrimos(numero)).toBe(false);
});

// Teste para número menor ou igual a 1
test('Deve retornar false para número menor ou igual a 1', () => {
    const numero = 1;
    expect(numerosPrimos(numero)).toBe(false);
});

// Teste para um número grande primo
test('Deve retornar true para um número primo grande', () => {
    const numero = 101;
    expect(numerosPrimos(numero)).toBe(true);
});

// Teste para um número grande não primo
test('Deve retornar false para um número grande não primo', () => {
    const numero = 100;
    expect(numerosPrimos(numero)).toBe(false);
});

