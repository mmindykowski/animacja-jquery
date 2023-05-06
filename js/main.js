$(document).ready(function() {
    const square = $('#square');

    $('.click-button').click(function() {
        square.animate({width: '100px', height: '100px'}, 1500);
        square.animate({left: '100px'}, 1500, function() {
            $(this).html('<h2>Animacja zakończona</h2>');
            $(this).css('background-color', 'blue');
       
        });
    });
});