$(document).ready(function() {
    setTimeout(function(){

        $('#id-titulo').parallax({imageSrc: 'img/pet-cuidado-1.jpg'});

    }, 250);

    // Iniciando o loader quando o usuário chega no elemento
    let dataAteaOffset = $('#id-cachorro').offset();
    let stop = 0; // variavel para parar o evento de scroll quando acontece uma vez

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();

        if(scroll > (dataAteaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop=1;
        }
    });
});