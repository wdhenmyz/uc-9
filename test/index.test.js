import { somaHorasExtras, calculaDescontos } from "../index";

test('Deve retornar o valor das horas extras', ()=>{
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    //Verificar se esses dois valores são iguais
    expect(retornado).toBe(esperado)
});

test('Deve descontar o valor do salario', () =>{
    const esperado = 2300;
    const retornado = calculaDescontos(2500, 200)
    expect(retornado).toBe(esperado)
});