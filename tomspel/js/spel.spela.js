/*jslint browser:true */
/*global spel: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
spel.spela = function () {
    "use strict";
    var anvandareSvar, enGang,
        position,
        i = 0;
    position = spel.logik.randomNummer();
    console.log(position);
    do {
        anvandareSvar = spel.logik.ingang();
        spel.logik.svarKontroll(anvandareSvar, position, i);
        i = i + 1;
    } while ((i < 3) && (anvandareSvar !== position));
    spel.ui.resultat(spel.logik.resultat(i, anvandareSvar, position));
    enGang = spel.ui.enGangTill();
    if (enGang === "j") {
        spel.spela();
    }
};
spel.spela();