$(document).ready(function() {
    $('.burger-container').click(function() {
        $('.link-burger').toggleClass('open-menu');
        $('.menu').toggleClass('open');
    });
    $('#menuOOO').click(function() {
        $('#OOO').toggleClass('open');
    });
    $('#menuIP').click(function() {
        $('#IP').toggleClass('open');
    });
    $('#menuOther').click(function() {
        $('#Other').toggleClass('open');
    });
    $("#menuOOO").click(function() {
        $('.arrow-OOO').toggleClass("open");
    });
    $("#menuIP").click(function() {
        $('.arrow-IP').toggleClass("open");
    });
    $("#menuOther").click(function() {
        $('.arrow-Other').toggleClass("open");
    });
    setInterval(() => {
        if (pageYOffset >200){
            $('.mouse').css({'opacity':'0'});
        } else{
            $('.mouse').css({'opacity':'1'});
        }
    }, 0);
    $(window).scroll(function(){
        if (pageYOffset>150){
            $('.goUp').addClass('see')
        }else{
            $('.goUp').removeClass('see')
        }
    });
});