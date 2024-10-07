import { gerarData } from "./gerarData.js";

export const editarItem = (element) => {
    let novoTexto = prompt("Digite o novo texto da tarefa:");
    if (novoTexto !== null && novoTexto.trim() !== "") {
        const item = element.querySelector("#item-titulo");
        item.textContent = novoTexto;
        
        const estavaFeito = element.querySelector(".input-checkbox").checked;
        if (estavaFeito) {
            element.querySelector(".input-checkbox").checked = true
            element.querySelector(".checkbox-customizado").classList.add("checked");
            item.style.textDecoration = "line-through";
        }

        const dataDeCriacao = element.querySelector(".texto-data");
        dataDeCriacao.textContent = gerarData();
    }
}