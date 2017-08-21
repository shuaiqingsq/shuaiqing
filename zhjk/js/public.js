$(function(){
    var dp = false;
    $('.nav_main ul li').eq(0).click(function(){
        if(dp==true){
            dp=false;
            $(this).addClass('hoverbg');
            $(this).children('.xdh').css('display','block');
        }else if(dp==false){
            dp=true;
            $(this).removeClass('hoverbg');
            $(this).children('.xdh').css('display','none');
        }
    });

    //轮播图
    var timer = null,i=0;
    function banner(i){
        $('.banner_pic ul li').eq(i).fadeIn(500).siblings().fadeOut();
        $('.dian ol li').eq(i).addClass('dianclass').siblings().removeClass('dianclass');
        $('.cb ul li').eq(i).addClass('hovera').siblings().removeClass('hovera');
    }
    timer=setInterval(lb,3000);
    function lb(){
        i++;
        if(i==$('.banner_pic ul li').length){
            i=0;
        }
        banner(i);
    }
    $('.dian ol li').mouseenter(function(){
        clearInterval(timer);
        var index=$(this).index();
        i=index;
        banner(i);
    });
    $('.dian ol li').mouseleave(function(){
        timer=setInterval(lb,3000); 
    });
    $('.cb ul li').mouseenter(function(){
        clearInterval(timer);
        var index=$(this).index();
        i=index;
        banner(i);
    });
    $('.cb ul li').mouseleave(function(){
       timer=setInterval(lb,3000); 
    });

    $('.left').click(function() {
        if(i>0){
            i--;
            banner(i);
        }
    });
    $('.right').click(function() {
        if(i<$('.banner_pic ul li').length-1){
            i++;
            banner(i);
        }
    });
});