/ criar a variavel com as cores dos botões..
var corBotoes = ["vermelho","azul","verde","amarelo"];

var sequenciajogoComputador = [];

var sequenciajogoUsuario = [];

var inicio = false;

var nivel = 0;

$(".botao").click(function () {
  var corEscolhidaUsuario = $(this).attr("id");
  sequenciajogoUsuario.push(corEscolhidaUsuario);
  playSound(corEscolhidaUsuario);
  animatePress(corEscolhidaUsuario);
  checkAnswer(sequenciajogoComputador.length - 1);  
} )
