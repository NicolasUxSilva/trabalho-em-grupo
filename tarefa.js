// tarefas.js - Sistema de Lista de Tarefas
let tarefas = [];
let titulo = "GERENCIADOR DE TAREFAS"; // <- linha do conflito
function adicionarTarefa(descricao) {
tarefas.push({ descricao: descricao, concluida: false });
console.log("Tarefa adicionada: " + descricao);
}

function listarTarefas() {
if (tarefas.length === 0) {
console.log("Nenhuma tarefa."); return;
}
tarefas.forEach(function(t, i) {
let st = t.concluida ? "[X]" : "[ ]";
console.log((i+1) + ". " + st + " " + t.descricao);
});
}

// Teste inicial
adicionarTarefa("Estudar Git");
listarTarefas();

function removerTarefa(indice) {
if (indice < 1 || indice > tarefas.length) {
console.log("Indice invalido."); return;
}
let rem = tarefas.splice(indice - 1, 1);
console.log("Removida: " + rem[0].descricao);
}
// Teste
adicionarTarefa("Tarefa B");
removerTarefa(1); listarTarefas();
