import { verificarListaFeito } from "./verificarListaFeito.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const listaDeTarefas = document.getElementById("lista-de-tarefas");
const listaFeito = document.getElementById("lista-feito");

const excluirItem = (element) => {
    let confirmacao = confirm("Deseja realmente excluir este item?");
    if (confirmacao) {
        element.remove();

        verificarListaVazia(listaDeTarefas);
        verificarListaFeito(listaFeito);
    }
}

export { excluirItem };