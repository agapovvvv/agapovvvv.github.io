$(document).ready(function() {
    $('.burger-container').click(function() {
        $('.link-burger').toggleClass('open-menu');
        $('.menu').toggleClass('open');
    });
    $('#menuOOO').click(function() {
        $('#OOO').toggle(300);
    });
    $('#menuIP').click(function() {
        $('#IP').slideToggle(300);
    });
    $('#menuOther').click(function() {
        $('#Other').slideToggle(300);
        
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

    $(window).scroll(function(){
        if (pageYOffset>150){
            $('.goUp').addClass('see')
        }else{
            $('.goUp').removeClass('see')
        }
        if (pageYOffset >200){
            $('.mouse').css({'opacity':'0'});
        } else{
            $('.mouse').css({'opacity':'1'});
        }
    });
    
});