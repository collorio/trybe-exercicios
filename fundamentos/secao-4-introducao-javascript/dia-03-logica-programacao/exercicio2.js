let array = ['java', 'javascript', 'python', 'html', 'css'];

let palavra = ''

for (let i = 0; i <= array.length - 1; i++){
    if (array[i].length > palavra.length){
        palavra = array[i]
    }
}

console.log(palavra)

for (let i = 0; i <= array.length - 1; i++){
    if (palavra.length > array[i].length){
        palavra = array[i]
    }
}

console.log(palavra)