function verificar() {
    var anoAtual = new Date().getFullYear();
    var anoNasc = Number(document.getElementById("anoNasc").value);
    var idade = anoAtual - anoNasc;

    var sexo = document.getElementsByName("sexo");
    var genero = sexo[0].checked ? "Homem" : "Mulher";

    var resultado = document.getElementById("resultado");

    resultado.innerHTML = `Detectamos: ${genero} com ${idade} anos.`;
    resultado.style.textAlign = "center";

    // Criando div para imagem no HTML
    var imagem = document.createElement("img");
    imagem.setAttribute('id', 'foto');
    imagem.style.boxShadow = "3px 3px 10px rgba(0, 0, 0, 0.499)";
    resultado.appendChild(imagem);

    if (genero == "Homem") {
        if (idade >= 0 && idade < 6) {
            imagem.setAttribute('src', 'imagens/m-toddler.jpg');
        }
        else if (idade < 13) {
            imagem.setAttribute('src', 'imagens/m-child.jpg');
        }
        else if (idade < 20) {
            imagem.setAttribute('src', 'imagens/m-teen.jpg');
        }
        else if (idade < 40) {
            imagem.setAttribute('src', 'imagens/m-youngadult.jpg');
        }
        else if (idade < 65) {
            imagem.setAttribute('src', 'imagens/m-adult.jpg');
        }
        else {
            imagem.setAttribute('src', 'imagens/m-elder.jpg');
        }
    }
    else if (genero == "Mulher") {
        if (idade >= 0 && idade < 6) {
            imagem.setAttribute('src', 'imagens/f-toddler.jpg');
        }
        else if (idade < 13) {
            imagem.setAttribute('src', 'imagens/f-child.jpg');
        }
        else if (idade < 20) {
            imagem.setAttribute('src', 'imagens/f-teen.jpg');
        }
        else if (idade < 40) {
            imagem.setAttribute('src', 'imagens/f-youngadult.jpg');
        }
        else if (idade < 65) {
            imagem.setAttribute('src', 'imagens/f-adult.jpg');
        }
        else {
            imagem.setAttribute('src', 'imagens/f-elder.jpg');
        }
    }
}