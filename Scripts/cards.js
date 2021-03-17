$(function () {
    const cards = $('.card').length
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function pxChangerTitle() {
        $('.card').each(function () {
            let mid = this.id[5] + this.id[6]
            let cardContent = '#card-'+mid+' .content'
            let cardTitle = '#card-'+mid+' .title'
            let th = 10
            let ch = 125
            if ($(cardTitle).height()>th){
                let cahnger = Number($(cardTitle).height()) - th
                $(cardContent).height(ch - cahnger)
            }
        });
    }
    /*const colors = ['#0178F6','#1D8E63','#F6BC00']
    let i = getRandomInt(0,3)
    $('.card .title').each(function () {
         $(this).css({'background':String(colors[i])})
         i++ 
         if (i == 3){
             i = 0
         }
    });*/
    const timer = 150
    $('.card').click(function () {
        //const id = $(this).parent().attr('id')[5] + $(this).parent().attr('id')[6]
        const id = this.id[5] + this.id[6]
        const card = '#card-'+id
        let row = Math.ceil(id/3)
        if ($(card).hasClass('full') == false){
            if ($('.card').hasClass('full')){
                $('.card').css({'opacity':'0'})
                setTimeout(() => {
                    $('.card').removeAttr('style')
                    $('.card').removeClass('full')
                    pxChangerTitle()
                }, timer);
            }
            $('.card').css({'opacity':'0'})
            $(card).css({'opacity':'1','transform':'rotateY(90deg)'})
            setTimeout(() => {
                $(card).css({'grid-column-start':'1'})
                $(card+' .content').css({'height':'auto'})
                $(card).css({'grid-column-end':'4'})
                $(card).css({'grid-row':String(row)})
                $(card).css({'opacity':'1','transform':'rotateY(0deg)'})
                $('.card').css({'opacity':'1'})
                $(card).addClass('full')
            }, timer);
        }else if ($(card).hasClass('full') == true){
            $('.card').css({'opacity':'0'})
            $(card).css({'opacity':'1','transform':'rotateY(90deg)'})
            setTimeout(() => {
                $(card).removeAttr('style')
                $('.card').css({'opacity':'1'})
                $(card).removeClass('full')
                pxChangerTitle()
            }, timer);
        }
    });
    $('button[id|=bye]').click(function(){
        alert('click')
    });
    pxChangerTitle()
})