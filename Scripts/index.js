$(document).ready(function() {
    $('.burger-container').click(function() {
        $('.link-burger').toggleClass('open-menu');
        $('.menu').toggleClass('open');
    });
});