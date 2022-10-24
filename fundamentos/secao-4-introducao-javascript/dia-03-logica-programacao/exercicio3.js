let maiorPrimo = 0

for (let i = 2; i <= 50; i++){
    if (i % 2 == 1){
        if (i > maiorPrimo){
            maiorPrimo = i
        }
    }
}

console.log(maiorPrimo)