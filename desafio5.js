let tarefas = ["Estudar HTML", "Estudar CSS", "Praticar JavaScript", "Estudar Laravel", "Revisar conteúdo"];

console.log("Lista ANTES:", tarefas);


tarefas.splice(1, 1);


tarefas.splice(2, 1, "Fazer projeto prático");

console.log("Lista DEPOIS:", tarefas);


tarefas.splice(1, 0, "Estudar Bootstrap");
console.log("Com nova tarefa:", tarefas);