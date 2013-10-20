/*jslint browser:true */
/*global $: false, spel: false, alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
spel.spela = {};
$(document).ready(function () {
    "use strict";
    $("img").hide(); //solo si se quiere que la primera vez no se muestren las fotos del html
    $("#buttonStart").click(spel.logik.startSpel);
});