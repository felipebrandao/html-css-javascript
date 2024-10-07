import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const item = document.getElementById("input-item");
const listaDeTarefas = document.getElementById("lista-de-tarefas");

export function adicionarItem(event) {
    event.preventDefault();

    if (item.value.trim() === "") {
        alert("O campo de texto não pode estar vazio.");
        return;
    }

    const itemDaLista = criarItemDaLista(item.value);
    listaDeTarefas.appendChild(itemDaLista);
    verificarListaVazia(listaDeTarefas);

    item.value = "";
}