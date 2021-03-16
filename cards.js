$(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    const colors = ['plum','#39C591','rgb(78, 122, 242)','#EB7F71']
    let i = getRandomInt(0,3)
    $('.title').each(function () {
         $(this).css({'background':String(colors[i])})
         i++ 
         if (i == 4){
             i = 0
         }
    });
    
    $('.content, .title').click(function () {
        const id = $(this).parent().attr('id')[5] + $(this).parent().attr('id')[6]
        const card = '#card-'+id
        let row = Math.ceil(id/3)
        if ($(card).hasClass('full') == false){
            if ($('.card').hasClass('full')){
                $('.card').css({'opacity':'0'})
                setTimeout(() => {
                    $('.card').removeAttr('style')
                    $('.card').removeClass('full')
                }, 300);
            }
            $('.card').css({'opacity':'0'})
            $(card).css({'opacity':'1','transform':'rotateY(90deg)'})
            setTimeout(() => {
                $(card).css({'grid-column-start':'1'})
                $(card).css({'grid-column-end':'4'})
                $(card).css({'grid-row':String(row)})
                $(card).css({'opacity':'1','transform':'rotateY(0deg)'})
                $('.card').css({'opacity':'1'})
                $(card).addClass('full')
            }, 300);
        }else if ($(card).hasClass('full') == true){
            $('.card').css({'opacity':'0'})
            $(card).css({'opacity':'1','transform':'rotateY(90deg)'})
            setTimeout(() => {
                $(card).removeAttr('style')
                $('.card').css({'opacity':'1'})
                $(card).removeClass('full')
            }, 300);
        }
    });
    $('body, .cards').click(function () {
        if ($('.card').hasClass('full')){
            $('.card').css({'opacity':'0'})
            setTimeout(() => {
                $('.card').removeAttr('style')
                $('.card').removeClass('full')
            }, 300);
        }
    });
    $('button[id|=bye]').click(function(){
        alert(1)
    });
})