setInterval(() => {
    const nav = document.getElementsByClassName('head-nav')
    const headTop = document.getElementsByClassName('head-top')
    const conteiner = document.getElementsByClassName('conteiner')
    if ((window.screen.width < 768) && (pageYOffset >= 50)){
        headTop[0].style.position = 'fixed'
        conteiner[0].style.marginTop = '50px'
    } else if ((window.screen.width < 768) && (pageYOffset < 50)){
        headTop[0].style.position = 'relative'
        conteiner[0].style.marginTop = '0'
    }

    if ((pageYOffset>=60) && (window.screen.width>767)){
        nav[0].style.position = 'fixed'
        nav[0].style.top = 0
        conteiner[0].style.marginTop = '60px'
    }else if (window.screen.width>767){
        nav[0].style.position = 'relative'
        conteiner[0].style.marginTop = '0px'
    }
    document.addEventListener('wheel',function(event){
        const headTop = document.getElementsByClassName('head-top')
        if ((event.deltaY<-30) && (pageYOffset == 0) && (window.screen.width > 1024)){
            headTop[0].style.marginTop = '0px'
        }else if (window.screen.width > 1024){
            headTop[0].style.marginTop = '-150px'
        }
    })
 }, 0);
$(document).ready(function() {
    $('.menu-burger__header').click(function() {
        $('.menu-burg').toggleClass('open')
        $('.menu-burger__header').toggleClass('open-menu');
    });
});
