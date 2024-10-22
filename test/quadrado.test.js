import { calcularSomaDosQuadrados } from "../quadrado";

// titulo do teste
test('Deve retornar a soma dos quadrados dos numeros de um array', () => {
    const numeros = [1, 2, 3, 4];
    const resultadoEsperado =  30;

    expect(calcularSomaDosQuadrados(numeros)).toBe(resultadoEsperado);
});

test('Deve lidar com numeros negativos', ()=>{
    const numeros = [-1, -2, -3];
    const resultadoEsperado = 14;
    expect(calcularSomaDosQuadrados(numeros)).toBe(resultadoEsperado);
});


test('Deve retornar 0 para um array vazio', ()=>{
    const numeros = [];
    const resultadoEsperado = 0;
    expect(calcularSomaDosQuadrados(numeros)).toBe(0);
});


test('Deve lidar com numeros decimais', ()=>{
    const numeros = [1.5, 2.5];
    const resultadoEsperado = 8.5;
    expect(calcularSomaDosQuadrados(numeros)).toBe(resultadoEsperado);
});