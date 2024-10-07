const containerListaFeito = document.getElementById("container-lista-feito");

export function verificarListaFeito(listaFeito) {
    if (listaFeito.childElementCount === 0) {
        containerListaFeito.style.display = "none";
    } else {
        containerListaFeito.style.display = "block";
    }
}