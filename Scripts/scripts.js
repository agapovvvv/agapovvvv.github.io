$(document).ready(function() {
    $('.burger-container').click(function() {
        $('.link-burger').toggleClass('open-menu');
        $('.menu').toggleClass('open');
    });
    setInterval(() => {
        if (pageYOffset >200){
            $('.mouse').css({'opacity':'0'});
        } else{
            $('.mouse').css({'opacity':'1'});
        }
    }, 0);
});