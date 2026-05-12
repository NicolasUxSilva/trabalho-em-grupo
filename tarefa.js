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

// Membro 3 - atualiza o titulo e adiciona concluirTarefa()
// ALTERE a linha do titulo para:
let titulo = "LISTA DE TAREFAS V2";
function concluirTarefa(indice) {
if (indice < 1 || indice > tarefas.length) {
console.log("Indice invalido."); return;
}
tarefas[indice - 1].concluida = true;
console.log("Concluida: " + tarefas[indice-1].descricao);
}
// Teste
adicionarTarefa("Tarefa C");
concluirTarefa(1); listarTarefas();

// Membro 4 - atualiza o titulo e adiciona resumo()
// ALTERE a linha do titulo para:
let titulo = "SISTEMA DE TAREFAS";
function resumo() {
let total = tarefas.length;
let feitas = tarefas.filter(t => t.concluida).length;
console.log("=== " + titulo + " ===");
console.log("Total: "+total+" | Feitas: "+feitas);
}
// Teste final
resumo();
