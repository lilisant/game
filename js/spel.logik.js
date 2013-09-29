/*jslint browser:true */
/*global spel: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
spel.logik = {};
//Skapa ett random nummer mellan 1 och 9
spel.logik.randomNummer = function () {
    "use strict";
    var position;
    position = Math.floor((Math.random() * 9) + 1);
    return position;
};
//Varna för en fel ingång
spel.logik.ingang = function () {
    "use strict";
    var svar;
    while (true) {
        do {
            svar = Number(spel.ui.fraga());
        } while (isNaN(svar));
        if ((svar > 0) && (svar < 10)) {
            break;
        }
    }
    return svar;
};
//Kontrollera användarens svar
spel.logik.svarKontroll = function (anvandareSvar, position, i) {
    "use strict";
    if (anvandareSvar === position) {
        spel.ui.korrekt();
    } else {
        if (i === 2) {
            spel.ui.forlora();
        } else {
            spel.ui.felSvar(i);
        }
    }
};
//Beräkna poäng
spel.logik.resultat = function (i, anvandareSvar, position) {
    "use strict";
    var points;
    switch (i) {
    case 1:
        points = 3;
        break;
    case 2:
        points = 2;
        break;
    case 3:
        if (anvandareSvar === position) {
            points = 1;
        } else {
            points = 0;
        }
        break;
    }
    return points;
};
//PROGRAM LOGIK