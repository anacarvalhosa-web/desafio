let produtos = ["Arroz", "Feijão", "Leite", "Pão", "Café"];


produtos.forEach((produto, index) => {
    console.log(`${index + 1} - ${produto}`);
});


console.log("--- Adicionando mais 3 ---");
produtos.push("Açúcar", "Manteiga", "Ovos");
produtos.forEach((produto, index) => {
    console.log(`${index + 1} - ${produto}`);
});