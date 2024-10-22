const somaHorasExtras = (salario, valorHoraExtra) => {
    return salario + valorHoraExtra
}

const calculaDescontos = (salario, descontos) =>{
    return salario - descontos
}

console.log(somaHorasExtras(2000, 500))

export {
    somaHorasExtras,
    calculaDescontos
}
