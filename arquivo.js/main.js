class Livro{
    constructor(titulo){
        this.titulo = titulo
        console.log("Novo livro adicionado!")
    }
    
    exibirInformacoes(){
        console.log(`titulo: ${this.titulo}`);
    }
}
 
class Biblioteca{
    constructor(){
        this.livros = [];
    }
    adicionarLivros(livro){
        this.livros.push(livro);
    }
    removerLivro(livro){
        this.livros = this.livros.filter(livro => livro.aluno != livro);
        console.log(`livro com o titulo ${titulo} remvido`)
    }
    exibirLivros(){
        const lista = document.getElementById("listaLivro")
        lista.innerHTML = "";
        this.livros.forEach(livro => {
            const li = document.createElement("li");
            li.textContent = livro.exibirInformacoes();
            lista.appendChild(li);
            console.log(biblioteca.exibirLivros(livro));
            console.log("Exibir livros!")
        });
    }
}
let biblioteca = new Biblioteca

const btnAdd = document.querySelector('.btnAdd');
btnAdd.addEventListener('click', () => {

    const titulo = document.getElementById('titulo').value;

    if (titulo) {
        const livro = new Livro(titulo);
        biblioteca.adicionarLivros(livro);
        console.log('Cheguei no IF')

    } else {
        alert('Preencha o campo de título.');
    }
    });

const bntExi = document.querySelector('.bntExi');
    bntExi.addEventListener('click', () => {
    biblioteca.exibirLivros();
    console.log('bntExi')
});