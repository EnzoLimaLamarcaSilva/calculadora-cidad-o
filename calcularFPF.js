/* 
Valor futuro de capital
Sn=((1+j)^n)*q0
Aplicação c​om depósitos regulares
title="Fórmula Sn=(1 + j)*(((1 + j)^n-1)/j)*p
​Financiamento com prestações fixas
Fórmula q0=(((1-(1+j)^-n))/j)*p
*/

let resultado = document.getElementById('resultado')

function calcularFPF(mesesFPF,taxaFPF,prestacao){
return ((1 - (1 + taxaFPF) ** -mesesFPF) / taxaFPF) * prestacao


}

function calcularADR(mesesADR,taxaADR,depositoRegular){
    return (1 + taxaADR) * (((1 + taxaADR) ** mesesADR - 1) / taxaADR) * depositoRegular
}

function calcularVFC(mesesVFC,taxaVFC,capAtual){
return ((1 + taxaVFC) ** mesesVFC) * capAtual

}

function principal(){
    let mesesVFC = 1
    let taxaVFC = 1
    let capAtual = 1
    let valorFinalVFC = calcularVFC(mesesVFC,taxaVFC,capAtual)
    console.log(`O valor Final é: ${valorFinalVFC.toFixed(2)}`)

    
    
    let mesesADR = 12
    let taxaADR = 0.75
    let depositoRegular = 40
    let valorFInalADR = calcularADR(mesesADR,taxaADR,depositoRegular)
    console.log(`O valor Final é: ${valorFInalADR.toFixed(2)}`)
    
    let mesesFPF = Number(document.getElementById('mesesFPF').value)
    let taxaFPF = Number(document.getElementById('taxaFPF').value)
    let prestacao = Number(document.getElementById('prestacao').value)
    let valorFInalFPF = calcularFPF(mesesFPF,taxaFPF,prestacao)
    console.log(`O valor Final é: ${valorFInalFPF.toFixed(2)}`)

    resultado.innerHTML = ``
    resultado.innerHTML += `O valor Final é: ${valorFInalFPF.toFixed(2)} <br>`
}

