setInterval(() => {
    const nav = document.getElementsByClassName('head-nav')
    const wrapper_description = document.getElementsByClassName('head-description')
    const screenWidth = window.screen.width
    if ((pageYOffset>=60) && (screenWidth>767)){
        nav[0].style.position = 'fixed'
        nav[0].style.top = 0
        wrapper_description[0].style.marginTop = '60px'
    }else{
        nav[0].style.position = 'relative'
        wrapper_description[0].style.marginTop = '0'
    }
 }, 0);

document.addEventListener('wheel',function(event){
    const headTop = document.getElementsByClassName('head-top')
    if ((event.deltaY<-30) && (pageYOffset == 0) && (window.screen.width > 1024)){
        headTop[0].style.marginTop = '0px'
    }else if (window.screen.width > 1024){
        headTop[0].style.marginTop = '-150px'
    }else if ((window.screen.width < 768) && (event.deltaY<0) && (pageYOffset > 100)){
        headTop[0].style.position = 'fixed'
        headTop[0].style.top = '0'
    }else if ((window.screen.width < 768) && (event.deltaY>0) && (pageYOffset > 100)){
        headTop[0].style.position = 'relative'
        headTop[0].style.top = '0'
    }else if ((pageYOffset < 100) && (window.screen.width < 768)){
        headTop[0].style.position = 'relative'
        headTop[0].style.top = '0'
    }
})
$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burg').toggleClass('open')
        $('.menu-burger__header').toggleClass('open-menu');
    });
});