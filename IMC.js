const prompt = require("prompt-read")

function calculaImc (altura, peso){
    let imc = (peso / (altura*altura)).toFixed(2)
    return imc
}

let paciente = {

    nome: "",
    altura: 0,
    peso: 0
}
let nome = prompt("Qual o nome do paciente? ")
paciente.nome = nome

let altura = prompt("Qual sua altura em (m.cc)? ")
paciente.altura = altura

let peso = prompt("Qual seu peso em KG? ")
paciente.peso = peso

let IMC = calculaImc(altura,peso)

if (IMC < 18.5) {
    console.log("O paciente", paciente.nome, "está abaixo do peso normal!")
}else if(IMC >= 18.5 && IMC <=24.9){
    console.log("O paciente", paciente.nome, "está no peso normal!")
}else if(IMC >= 25 && IMC <= 29.9){
    console.log("O paciente", paciente.nome, "está com excesso de peso!")
}else if(IMC >= 30 && IMC <=34.9){
    console.log("O paciente", paciente.nome, "está com obesidade grau I!")
}else if(IMC >= 35 && IMC <=39.9){
    console.log("O paciente", paciente.nome, "está com obesidade grau II!")
}else if(IMC >=40){
    console.log("O paciente", paciente.nome, "está com obesidade grau III!")
}
console.log(paciente)