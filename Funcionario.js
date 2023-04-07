const prompt = require("prompt-read")

let funcionario = {

    nome: "Eduardo",
    codigo: 1234,
    salario: 0,
    vendas: 0
}
let nome = prompt("Qual o seu nome? ")

if(nome == funcionario.nome){
    
    let codigo = prompt("Qual seu codigo de identificação? ")
    
    if (codigo == funcionario.codigo){

        let salario = prompt("Qual seu salario fixo? ")
        
        funcionario.salario = salario

        let vendas = prompt("Quantos carros você vendeu este mês? ")

        funcionario.vendas = vendas

        let salarioFinal = (parseInt(funcionario.salario) + parseInt((funcionario.vendas*100)))

        console.log(funcionario)

        console.log("O salario final do funcionário", funcionario.nome,"código", funcionario.codigo,"é:",salarioFinal)

    }else{
        console.log("Você digitou a referência errada!")
    }

}
else{
    console.log("Você digitou a referência errada!")
}
