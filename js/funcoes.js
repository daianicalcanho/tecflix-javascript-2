//array
let filmes = ["simplesmente-acontece.jpg" , "joker.jpg" , "antes_de_vc.jpg", "mm1984.jpg"];

for(let i = 0; i < filmes.length; i++){
    document.write("<img src=img/" + filmes[i] + ">");
}

function AdicionarFilme(){
    let campoFilme = document.querySelector("#filme"); 
    let imagemFilme = campoFilme.value;

    if(imagemFilme.endsWith(".jpg")){
        ListarFilmesNaTela(imagemFilme);
    }else{
        alert("Isso não é uma imagem!");
    }
    
}

function ListarFilmesNaTela(imagem){
    let listaFilmes = document.querySelector("#listaFilmes");
    let elementoFilme = "<img src=" + imagem + ">";
    console.log(elementoFilme);
    listaFilmes.innerHTML +=  elementoFilme;
}
