// Operadores matemáticos

let a = 5
let b = 15

function adicao(a, b){
    return a + b
}

function subtracao(a, b){
    return a - b
}

function multiplicacao(a, b){
    return a * b
}

function divisao(a, b){
    return a / b
}

function modulo(a, b){
    return a % b
}

// Função que diz qual número é maior ou menor

function numeromaiormenor(a, b){
    if (a > b){
        console.log('O número ' + a + ' é maior que o número ' + b + '.');
    } else {
        console.log('O número ' + b + ' é maior que o número ' + a + '.');
    }
}

let c = 20;

// Programa que checa o maior de três números

function numeromaiormenor3(a, b, c){
    if (a > b && a > c){
        console.log('O número ' + a + ' é maior que o número ' + b + ' e maior que o número ' + c + '.');
    } else if (b > a && b > c){
        console.log('O número ' + b + ' é maior que o número ' + a + ' e maior que o número ' + c + '.');
    } else {
        console.log('O número ' + c + ' é maior que o número ' + a + ' e maior que o número ' + b + '.');
    }
}
    numeromaiormenor3(a, b, c);