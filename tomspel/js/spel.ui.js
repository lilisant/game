/*jslint browser:true */
/*global spel: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
spel.ui = {};
spel.ui.fraga = function () {
    "use strict";
    var anvandareSvar;
    anvandareSvar = prompt("INSTRUKTIONER:\n\nNi har 9 alternativ, 3 chanser och en person att hitta.\n\n----------------------------------\n|                    |                   |                   |\n|          1        |         2        |         3        |\n|                    |                   |                   |\n----------------------------------\n|                    |                   |                   |\n|          4        |         5        |         6        |\n|                    |                   |                   |\n----------------------------------\n|                    |                   |                   |\n|          7        |         8        |         9        |\n|                    |                   |                   |\n----------------------------------\n\nVälj ett nummer för att hitta TOM: \n");
    return anvandareSvar;
};
spel.ui.korrekt = function () {
    "use strict";
    alert("Holy shit! Ni hittade mig!");
    window.document.location.href = 'tom.html';
};
spel.ui.felSvar = function (i) {
    "use strict";
    alert("Ni gissar fel! Ni har bara " + (2 - i) + " chanser kvar");
};
spel.ui.forlora = function () {
    "use strict";
    alert("Holy crap! Ni suger!");
};
spel.ui.enGangTill = function () {
    "use strict";
    var play = prompt("vill ni spela en gång till (j/n)?");
    return play;
};
spel.ui.resultat = function (points) {
    "use strict";
    alert("Ni har " + points + " poäng!");
};
//USER INTERFACE