/*jslint browser:true */
/*global $: false, spel: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
spel.logik = {};
var hittat = 0, // inicializa variable
    timer = 0, //cuenta el tiempo
    idTimer = 0, // para lo que se escribe en la id timer html
    idBilden = "", // para evaluar lo que hay en el id de squaresContainer div
    oppnaBilden = "",
    klickat = 0,
    audio;
spel.logik.audioFel = function () {
    "use strict";
    audio = document.querySelector("#fel");
    audio.load();
    audio.play();
};
spel.logik.audioKorrekt = function () {
    "use strict";
    audio = document.querySelector("#korrekt");
    audio.load();
    audio.play();
};
spel.logik.timerCount = function () {
    "use strict";
    timer = timer + 1;
    $("#timer").html(" " + timer);
    if (hittat < 10) { //mantiene el contador activo
        idTimer = setTimeout('spel.logik.timerCount()', 1000); // escribe en html del id timer, espera 1 segundo
    }
};
spel.logik.random = function (av, till) {
    "use strict";
    return Math.floor(Math.random() * (till - av + 1) + av); // random pics
};
spel.logik.mix = function () {
    "use strict";
    var bilder = $(".squaresContainer").children(),
        bild = $(".squaresContainer > div:first-child"),
        i,
        j,
        randomIndex,
        bilderArray = new Array();
    for (i = 0; i < bilder.length; i = i + 1) {
        bilderArray[i] = $("#" + bild.attr("id") + " img").attr("src");
        bild = bild.next();
    } //mete fotos en array
    bild = $(".squaresContainer > div:first-child");
    for (j = 0; j < bilder.length; j = j + 1) {
        randomIndex = spel.logik.random(0, bilderArray.length - 1); //las mezcla en funcion random
        $("#" + bild.attr("id") + " img").attr("src", bilderArray[randomIndex]); //las mete en array
        bilderArray.splice(randomIndex, 1); // method that changes the content of an array, adding new elements while removing old elements.
        bild = bild.next();
    }
};
spel.logik.startSpel = function () { //resetea todo
    "use strict";
    klickat = 0;
    $("img").hide();
    $("img").removeClass("opacity");
    $("#msgT").remove();
    $("#msgC").remove();
    $("#counter").html(" " + klickat);
    $("#timer").html("0");
    idBilden = "";
    oppnaBilden = "";
    hittat = 0;
    timer = 0;
    clearTimeout(idTimer);
    spel.logik.mix();
    spel.logik.timerCount();
    $(".squaresContainer > div").click(spel.logik.utvardering);
    return false;
};
spel.logik.utvardering = function () {
    "use strict";
    var id,
        aktuellaBilden;
    id = $(this).attr("id");
    if ($("#" + id + " img").is(":hidden")) {
        $(".squaresContainer > div").unbind("click", spel.logik.utvardering);
        $("#" + id + " img").slideDown('fast');
        if (oppnaBilden === "") {
            idBilden = id;
            oppnaBilden = $("#" + id + " img").attr("src"); //toma el atributo del source 
            setTimeout(function () {
                $(".squaresContainer > div").bind("click", spel.logik.utvardering);
            }, 400); //espera 0.4 segundos
        } else {
            aktuellaBilden = $("#" + id + " img").attr("src");
            if (oppnaBilden !== aktuellaBilden) {
                // Cerrar abiertas
                spel.logik.audioFel();
                setTimeout(function () {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + idBilden + " img").slideUp('fast');
                    idBilden = ""; //vacia variable
                    oppnaBilden = ""; //vacia variable
                }, 400); //espera 0.4 segundos
            } else {
                // Coinciden!!
                spel.logik.audioKorrekt(); // sonido de correcto
                $("#" + id + " img").addClass("opacity"); // agrega opacidad en main.css
                $("#" + idBilden + " img").addClass("opacity"); //agrega opacidad en main.css
                hittat = hittat + 1; // suma cuantos lleva encontrados
                idBilden = ""; //vacia variable
                oppnaBilden = ""; //vacia variable
            }
            setTimeout(function () {
                $(".squaresContainer > div").bind("click", spel.logik.utvardering);
            }, 400); //espera 0.4 segundos
        }
        klickat = klickat + 1; //summa los clicks
        $("#counter").html(" " + klickat); //imprime las veces que se ha clickeado
        if (hittat === 10) { // cuando encuentra a las 10 fotos manda a resultado
            spel.ui.resultat();
        }
    }
};
//PROGRAM LOGIK