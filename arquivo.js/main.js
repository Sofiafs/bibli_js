class Livro{
    constructor(titulo){
        this.titulo = titulo
        console.log("Novo livro adicionado")
    }
    
    exibir(){
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
}