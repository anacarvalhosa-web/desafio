let senhaCorreta = "1234";
let tentativas = 3;
let tentativaAtual = 0;
let senhaDigitada = "";
let acessoLiberado = false;

while (tentativaAtual < tentativas && !acessoLiberado) {
    senhaDigitada = prompt(`Tentativa ${tentativaAtual + 1}: Digite a senha:`);
    tentativaAtual++;

    if (senhaDigitada === senhaCorreta) {
        console.log(`Tentativa ${tentativaAtual}: senha correta.`);
        console.log("Acesso liberado!");
        acessoLiberado = true;
    } else {
        console.log(`Tentativa ${tentativaAtual}: senha incorreta.`);
        console.log(`Restam ${tentativas - tentativaAtual} tentativas.`);
    }
}

if (!acessoLiberado) {
    console.log("Acesso bloqueado!");
}