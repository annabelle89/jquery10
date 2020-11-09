$(document).ready(function() {
    /*Lorsque la souris survole le bouton...*/
    $('#mouseRed').mouseenter(function() {
        /*...On met le texte en rouge*/
        $('#text').css('color', 'red');
    });

    /*Lorsque la souris quitte le bouton...*/
    $("#mouseRed").mouseleave(function() {
        /*...On remet le texte en noir*/
        $('#text').css('color', '#000000');
    });

    $('#mouseBlue').mouseenter(function() {
        $('#text').css('color', 'blue');
    })
    $('#mouseBlue').mouseleave(function() {
        $('#text').css('color', '#000000');
    })
});