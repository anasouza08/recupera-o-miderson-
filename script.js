// Gráfico simples com Canvas
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

// Dados fictícios
const dados = {
  labels: ["Campo", "Cidade"],
  valores: [70, 30]
};

function desenharGrafico() {
  const total = dados.valores.reduce((a, b) => a + b, 0);
  let anguloInicial = 0;

  dados.valores.forEach((valor, index) => {
    const angulo = (valor / total) * (2 * Math.PI);
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.arc(200, 100, 100, anguloInicial, anguloInicial + angulo);
    ctx.closePath();
    ctx.fillStyle = index === 0 ? "#4caf50" : "#2196f3";
    ctx.fill();
    anguloInicial += angulo;
  });
}
desenharGrafico();

// Quiz
function responderQuiz(resposta) {
  const resultado = document.getElementById("resultado");
  if (resposta === "certo") {
    resultado.innerText = "✅ Correto! Campo e cidade se complementam.";
    resultado.style.color = "green";
  } else {
    resultado.innerText = "❌ Quase... pense na cooperação!";
    resultado.style.color = "red";
  }
}