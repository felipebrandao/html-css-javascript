import { adicionarItem } from "./js/adicionarItem.js";
import { verificarListaFeito } from "./js/verificarListaFeito.js";

const botaoSalvarItem = document.getElementById("adicionar-item");
botaoSalvarItem.addEventListener("click", adicionarItem);

const listaFeito = document.getElementById("lista-feito");
verificarListaFeito(listaFeito);