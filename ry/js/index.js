$(function(){
     // 轮播图
    var timer = null,i=0;
    function banner(i){
        $(".carousel ul").stop(false,true).animate({left:-i*1903+"px"},1000);
    }
    timer=setInterval(lb,3000);
    function lb(){
        i++;
        if(i==$('.carousel ul li').length){
            i=0;
        }
        banner(i);
    }
    $('.banner_left').click(function(){
        if(i>0){
            i--;
            banner(i);
        }
    });
    $('.banner_right').click(function(){
        if(i<$('.carousel ul li').length-1){
            i++;
            banner(i);
        }
    });

    $(".business .container ul li").mouseenter(function(){
        $(this).css("marginTop","-20px");
    });
    $(".business .container ul li").mouseleave(function(){
        $(this).css("marginTop","0px");
    });

    $(function(){
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop>300){
                $(".nav").addClass("xs");
            }else{
                $(".nav").removeClass("xs");
            }
            if(scrollTop>10){
                $(".business .container ul li").eq(0).animate({marginTop:0+"px"},600);
                $(".business .container ul li").eq(1).animate({marginTop:0+"px"},700);
                $(".business .container ul li").eq(2).animate({marginTop:0+"px"},800);
                $(".business .container ul li").eq(3).animate({marginTop:0+"px"},900);
            }
            if(scrollTop>300){
                $(".t .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>350){
                $(".n .container .row").animate({marginTop:0+"px"},2000);
            }
            if(scrollTop>550){
                $(".all_case .container .row").animate({marginTop:0+"px"},2000);
            }
            if(scrollTop>1050){
                $(".swiper_slide .store").animate({marginTop:0+"px"},2000);
                $(".swiper_slide .store .col_md1").animate({left:0+"px"},2000);
                $(".swiper_slide .store .col_md2").animate({right:60+"px"},2000);
            }
            if(scrollTop>1500){
                $(".swiper_store_pag .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2000){
                $(".t1 .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2300){
                $(".n1 .container .row").animate({marginTop:0+"px"},1000);
            }

            if(scrollTop>2300){
                $(".newsitem .col_md3").animate({left:0+"px"},1000);
                $(".newsitem .col_md4").animate({right:0+"px"},1000);
            }
            if(scrollTop>2500){
                $(".t2 .container .row").animate({marginTop:0+"px"},1000);
            }
            if(scrollTop>2800){
                $(".contact .col_md5").animate({left:0+"px"},1000);
                $(".contact .col_md6").animate({right:0+"px"},1000);
            }
            if(scrollTop>2800){
                $("footer .container .row").animate({marginTop:0+"px"},1000);
            }
        });
    });

    $(".case_nav ul li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".swiper_store_pag .container span").click(function(){
        $(this).addClass("clickk").siblings().removeClass("clickk");
    });


});