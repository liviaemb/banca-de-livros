//pegar o input
//Se sim, mostrar categorias disponíveis, pergunta qual categoria ela escolhe
// Se não, mostrar todos os livros em ordem crescente pelas páginas

const livros = require('./database')
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
  console.log('Essas são as categorias disponiveis:')
  console.log('Poesia', '/Saúde','/Ficção','/Emagrecimento','/Filosofia', '/Autoajuda')

  const entradaCategoria = readline.question('Qual categoria voce escolhe:')

  const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

  console.table(retorno)
} 
else {
   const livrosOrdenados = livros.sort((a,b)=> a.paginas - b.paginas)
  console.log('Essas são todos os livros disponiveis:')
  console.table(livrosOrdenados) 
}
  