var corBotoes = ["vermelho", "azul", "verde", "amarelo"];
var sequenciajogoComputador = [];
var sequenciajogoUsuario = [];
var inicio = false;
var nivel = 0;

$(document).keypress(function () {
  if (!inicio) {
    $("#titulo").text("Nivel " + nivel);
    nextSequence();
    inicio = true;
  } 
});

$(".botao").click(function (){
    var corEscolhidaUsuario = $(this).attr("id");
    sequenciajogoUsuario.push(corEscolhidaUsuario);
    playSound(corEscolhidaUsuario);
    checkAnswer(sequenciajogoUsuario.length - 1);
});

function checkAnswer(currentLevel) {
    if (sequenciajogoComputador[currentLevel] === sequenciajogoUsuario[currentLevel]) {        
        if (sequenciajogoUsuario.length === sequenciajogoComputador.length) {
            setTimeout(function() {
                nextSequence(); 
            }, 2000); 
        }
    } else {
        playSound("wrong");
        $("body").addClass("Game-Over");
        $("#titulo").text("Fim do jogo! Pressione qualquer tecla para Reiniciar.");
        setTimeout(function() {
            $("body").removeClass("Game-Over");
        }, 2000);
        startOver();
    }
}

function nextSequence() {
    sequenciajogoUsuario = [];
    nivel++;
    $("#titulo").text("Nivel " + nivel);
    var numeroAleatorio = Math.floor(Math.random() * 4); 
    var corAleatoriaSorteada = corBotoes[numeroAleatorio]; 
    sequenciajogoComputador.push(corAleatoriaSorteada);

    $("#" + corAleatoriaSorteada)
    .fadeIn(100) 
    .fadeOut(100)
    .fadeIn(100);

    playSound(corAleatoriaSorteada);
}

function animaePress(currentColor){
    $("#" + currentColor).addClass("Pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("Pressed");
    }, 100);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function startOver() {
    nivel = 0;
    sequenciajogoComputador = [];
    inicio = false;
}