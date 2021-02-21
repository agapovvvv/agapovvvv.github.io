const mouse = document.getElementsByClassName('mouse')
setInterval(() => {
    if (pageYOffset > 300){
        mouse[0].style.opacity = '0'
    }else{
        mouse[0].style.opacity = '1'
    }
}, 0);