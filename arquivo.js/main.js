class Livro{
    constructor(titulo){
        this.titulo = titulo
        console.log("Novo livro adicionado")
    }
    
    exibirInformacoes(){
        console.log('titulo: ${this.titulo}');
    }
}

class Biblioetca{
    constructor(){
        this.livros = []
    }
    adicionarLivros(livro){
        this.livros.push(livro);
    }
    removerLivro(livro){
        this.livros = this.livros.filter(livro => livro.aluno != livro);
    }
    exibirLivros(){
        this.livros.forEach(livro => livro.exibirInformacoes());
    }
}

// let biblioteca = new Biblioetca();
// let livro1 = new Livro('O Senhor dos Anéis');
// biblioteca.adicionarLivros(livro1);

// let livro2 = new Livro('Diário de Anne Frank');
// biblioteca.adicionarLivros(livro2);

// console.log('Livros na biblioteca:');
// biblioteca.exibirLivros();

// biblioteca.removerLivro(1);

// console.log('Livros após remoção: ');
// biblioteca.exibirLivros();
// document.write()

document.addEventListener("DOMContentLoaded", () => {
    const biblioteca
})
const btnAdd = document.querySelector('.btnAdd');
btnAdd.addEventListener('click', () => {

    const titulo = document.getElementById('titulo').value;

    if (titulo) {
        const novolivro = new Livro(titulo);
        biblioetca.adicionarLivros(novolivro);

    }

console.log('conexão realizada!!!!');


console.log(titulo);
document.write(titulo)


})