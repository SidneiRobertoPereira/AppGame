var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 20;
var tempoView = 0;

var nivelJogo = window.location.search;
nivelJogo = nivelJogo.replace("?", "");

if (nivelJogo === "normal") {
  tempoView = 2500;
}

if (nivelJogo === "dificil") {
  tempoView = 2000;
}

if (nivelJogo === "chucknorris") {
  tempoView = 1500;
}

function ajustaTamanhoPalcoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

//é preciso encapsular os comandos abaixo em uma função para exibição no body
function posicaoRondomica() {
  //removendo o elemento anterior.
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();
    if (vidas > 3) {
      window.location.href = "fim_de_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }

  //criando as posições rondomicas para exibição do mosquito
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //criando o elemento Html
  var imgMosquito = document.createElement("img");
  imgMosquito.src = "imagens/mosquito.png";
  imgMosquito.className = tamanhoAleatorioImg() + " " + ladoAleatorio();
  imgMosquito.style.left = posicaoX + "px";
  imgMosquito.style.top = posicaoY + "px";
  imgMosquito.style.position = "absolute";
  imgMosquito.id = "mosquito";
  imgMosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(imgMosquito);
}

function tamanhoAleatorioImg() {
  var classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";

    case 1:
      return "mosquito2";

    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
