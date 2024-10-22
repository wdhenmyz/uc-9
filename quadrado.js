function calcularSomaDosQuadrados(array) {
    return array.reduce((soma, numero) => soma + numero * numero, 0);
}


export {
    calcularSomaDosQuadrados
}