//captura o DOM
const botaoImagem = document.getElementById("upload-btn");
const imagemPerfil = document.getElementById("image-upload");



//Evento do click para acessar o botao da imagem
botaoImagem.addEventListener("click", () => {
   imagemPerfil.click()

})


// função para acessar os arquivos usando promise que é uma promessa que usou o resolve e reject alem de precisar do
//Filereader para ler os arquivos e retornar o valor do arquivo 
function LendoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome:arquivo.name})
        }
        leitor.onerror = () => {
            reject(`erro na leitura do arquivo ${arquivo.name}`)
        }
        leitor.readAsDataURL(arquivo)
    })
}

//acessou o DOM das imagens para mudar a foto
//acessou o DOM para mudar o nome da tag p e input

const imagemDescricao = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

//Aqui usou o evento change para acesar o evento click usou o async (assincronas) para acessar o arquivo sem que o site pare
//delcarou uma variavel e buscou o evento target para acessar o elemento html 
// usou o await que é o compelemento do async que espera a assincronidade ser concluida
//try para executar o codigo que pode da erro 
//catch que se da erro mostra uma mensagem

imagemPerfil.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0]
    if(arquivo) {
        try {
            const conteudoDoArquivo = await LendoArquivo(arquivo);
            imagemDescricao.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        } catch(erro) {
            console.erro("Erro na leitura do arquivo");
        }
    }
})

//Declarou variavel e resgatou o dom


const inputTags = document.getElementById("input-tags");
const listaTags = document.getElementById("lista-tags");

// Fez um evento de teclado quando pertar enter previne que a tela se atualiza 
// faz duas condiçoes se perta enter previse o envio 
// declara uma const para acesar o valor do input para aceitar uma tag nova 
// faz um createlement para criar uma nova tag e resgta o valor da tag 

inputTags.addEventListener("keypress", (evento) => {
    if(evento.key === "Enter") {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();
        if(tagTexto !== "") {
            const tagNova = document.createElement("li");
            tagNova.innerHTML = `<p>${tagTexto}</p> <img src="./img/close-black.svg" class ="remove-tag">`
            listaTags.appendChild(tagNova);
            inputTags.value = "";
        }
    }
})

const enviarCadastro = document.getElementById("botao-publicar");
enviarCadastro.addEventListener("click", () => {
    alert("Cadastro enviado");
})