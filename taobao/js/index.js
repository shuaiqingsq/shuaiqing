$(function(){
    $('.search').mouseenter(function() {
        $(this).children('.iconfont').css('display','none');
    });

    $('.search').mouseleave(function() {
        if($(this).children('input').val()==''){
            $(this).children('.iconfont').css('display','block');
        }
    });

    $('.advertisement .iconfont').click(function(){
        $('.advertisement').css('display','none');
    });

    
});