let jogos = ["Minecraft", "The Sims", "Roblox", "Terraria", "Stardew Valley"];


if (jogos.includes("Minecraft")) {
    console.log("O jogo está na lista!");
} else {
    console.log("O jogo NÃO está na lista!");
}


let jogoTeste = "Fortnite";
console.log(jogos.includes(jogoTeste) ?
 `${jogoTeste} está na lista` :
  `${jogoTeste} NÃO está na lista`);