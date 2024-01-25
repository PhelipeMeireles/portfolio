let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;

function adivinharNumero() {
  let palpite = document.getElementById("palpite").value;
  let resultado = document.getElementById("resultado");

  if (palpite == numeroAleatorio) {
    resultado.innerHTML = "Parabéns! Você acertou o número!";
    document.getElementById("botao").disabled = true;
  } else if (palpite < numeroAleatorio) {
    resultado.innerHTML = "O número é maior. Tente novamente.";
    tentativas--;
  } else {
    resultado.innerHTML = "O número é menor. Tente novamente.";
    tentativas--;
  }

  if (tentativas == 0) {
    resultado.innerHTML = "Suas tentativas acabaram. O número era " + numeroAleatorio + ".";
    document.getElementById("botao").disabled = true;
  }
}

