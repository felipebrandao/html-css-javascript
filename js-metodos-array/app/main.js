let livros = []
const endpointDaAPI = 'https://raw.githubusercontent.com/felipebrandao/html-css-javascript/main/js-metodos-array/livros.json'
getBuscarLivrosDaAPI()

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    livros = await res.json()
    livros = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}
