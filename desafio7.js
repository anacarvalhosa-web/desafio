let notas = [7, 10, 5, 8, 10, 6, 4, 12]; 
let i = 0;


while (i < notas.length) {
    if (notas[i] < 0 || notas[i] > 10) {
        console.log(`Nota inválida ${notas[i]} na posição ${i}, removendo...`);
        notas.splice(i, 1);
    } else {
        i++;
    }
}

console.log("Notas originais corrigidas:", notas);


notas.forEach((nota, index) => {
    console.log(`Aluno ${index + 1}: nota ${nota}`);
});


console.log(notas.includes(10) ? "Tem nota 10 na lista!" : "Não tem nota 10");


let posNota = notas.indexOf(8);
console.log(posNota !== -1 ? `Nota 8 encontrada na posição ${posNota}` : "Nota 8 não encontrada");


let posRemover = notas.indexOf(4);
if (posRemover !== -1) notas.splice(posRemover, 1);


notas.sort((a, b) => a - b);
console.log("Lista final ordenada:", notas);