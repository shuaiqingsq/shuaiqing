$(function(){
    // 轮播图
    var timer = null,i=0;
    function banner(i){
        $('.body_banner ul li').eq(i).fadeIn(500).siblings('li').fadeOut();
        $('.cnav ul li').eq(i).addClass('current').siblings('li').removeClass('current');
    }
    timer=setInterval(lb,3000);
    function lb(){
        i++;
        if(i==$('.cnav ul li').length){
            i=0;
        }
        banner(i);
    }
    $('.cnav ul li').mouseenter(function(){
        clearInterval(timer);
        var index=$(this).index();
        i=index;
        banner(i);
    });
    $('.cnav ul li').mouseleave(function(){
       timer=setInterval(lb,3000); 
    });


    // 鼠标滑过
    $('.mod_row_box ul li .pic').mouseover(function(){
        if ($(this).children('.figure_keyframes').length>0) {
            $(this).children('img').css('display','none');
            $(this).children('.figure_keyframes').css('display','block');
            var x=event.offsetX;
            $('.figure_keyframes_value_inner').css('width',x+'px');
            if(x<30){
                $('.figure_keyframes img').css({'left':'0px','top':'0px'});
            }else if(x>=30&&x<=60){
                $('.figure_keyframes img').css({'left':'-360px','top':'0px'});
            }else if(x>60&&x<=90){
                $('.figure_keyframes img').css({'left':'-750px','top':'0px'});
            }else if(x>90&&x<=120){
                $('.figure_keyframes img').css({'left':'0px','top':'-204px'});
            }else if(x>120&&x<=150){
                $('.figure_keyframes img').css({'left':'-360px','top':'-204px'});
            }else if(x>150&&x<=180){
                $('.figure_keyframes img').css({'left':'-750px','top':'-204px'});
            }else if(x>180&&x<=210){
                $('.figure_keyframes img').css({'left':'0px','top':'-408px'});
            }else if(x>210&&x<=240){
                $('.figure_keyframes img').css({'left':'-360px','top':'-408px'});
            }
        };
    });
    
    $('.mod_row_box ul li .pic').mouseleave(function(){
        $(this).children('img').css('display','block');
        $(this).children('.figure_keyframes').css('display','none');
    });

    // 隐藏视频部分
    $('.mod_row_box ul li').mouseenter(function(){
        if ($(this).children('.layer_video_content').length>0) {
            $(this).css('overflow','visible');
            $(this).children('.layer_video_content').css('display','block');
            $(this).children('.layer_video_content').children('.figure_video_outlink').children('.figure_video').children('video').get(0).play();
        }
    });
    $('.mod_row_box ul li').mouseleave(function(){
        $(this).css('overflow','hidden');
        $(this).children('.layer_video_content').css('display','none');
        $(this).children('.layer_video_content').children('.figure_video_outlink').children('.figure_video').children('video').trigger("pause");
    });

    // 登录出现
    $('.dl').click(function(){
        $('.login').css('display','block');
        $('.bg').css('display','block');
    });
    $('.figure_login_btn').click(function(){
        $('.login').css('display','block');
        $('.bg').css('display','block');
    });

    var flag = true;
    // 是否自动登录
    $('.low_login').click(function() {
        if(flag==true){
            flag=false;
            $('.low_login').children('a').addClass('uncheck');
            $('.low_login').children('a').removeClass('checked');
        }else if(flag==false){
            flag=true;
            $('.low_login').children('a').addClass('checked');
            $('.low_login').children('a').removeClass('uncheck');
        }
    });

    // QQ或微信登录
    $('.headerul ul li').eq(0).click(function(){
        $('.headerul ul li').eq(1).removeClass('logincurrent');
        $(this).addClass('logincurrent');
        $('.login .web_qr_login').css('display','block');
        $('.login .bottom').css('display','block');
        $('.login_iframe_wx').css('display','none');
    });
    $('.headerul ul li').eq(1).click(function(){
        $('.headerul ul li').eq(0).removeClass('logincurrent');
        $(this).addClass('logincurrent');
        $('.login .web_qr_login').css('display','none');
        $('.login .bottom').css('display','none');
        $('.login_iframe_wx').css('display','block');
    });

    // 登录
    // var namereg = /^[\u4e00-\u9fa5]{2,3}$/g;
    $('.zh').focus(function(){
        $('.uinArea .input_tips').css('display','none');
    });
    $('.zh').blur(function(){
        if($('.zh').val()==""){
            $('.uinArea .input_tips').css('display','block');
        }
    });
    $('.pwd').focus(function(){
        $('.pwdArea .input_tips').css('display','none');
    });
    $('.pwd').blur(function(){
        if($('.pwd').val()==""){
            $('.pwdArea .input_tips').css('display','block');
        }
    });
    // 登录正则
    var zhreg = /^\d{5,10}$/g;
    $('.btn').click(function(){
        var zh = $('.zh').val();
        var pwd = $('.pwd').val();
        if(zhreg.test(zh)&&pwd!=""){
            window.location.href="index.html";
        }else{
            alert("账号或密码有误！");
        }
        
    });
    // 点击关闭
    $('.btn_close').click(function(){
        $('.login').css('display','none');
        $('.bg').css('display','none');
    });
    // 返回顶部
    $(function(){
        $(window).scroll(function(){
            var scrollTop = $(this).scrollTop();
            if(scrollTop>500){
                $('header').css('position','fixed');
                $('header').addClass('headerys');
                $(".mod_fixedtool").show();
            }else if(scrollTop<500){
                $('header').css('position','absolute');
                $('header').removeClass('headerys');
                $(".mod_fixedtool").hide();
            }
        });
    });
});