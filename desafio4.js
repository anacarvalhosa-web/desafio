let livros = ["Capitães da Areia", "Dom Casmurro", "O Pequeno Príncipe", "1984", "Vidas Secas"];

let posicao = livros.indexOf("Dom Casmurro");

if (posicao === -1) {
    console.log("Livro não foi encontrado.");
} else {
    console.log(`Livro encontrado na posição ${posicao}.`);
    console.log(`Na lista, ele é o item ${posicao + 1}`);
}


let pos2 = livros.indexOf("1984");
console.log(pos2 === -1 ? "Livro 2 não encontrado" : `Segundo livro encontrado na posição ${pos2}`);