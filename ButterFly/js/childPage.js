$(function(){
    // 选集、花絮
    $('.player_side_hd ul li').eq(0).mouseenter(function(){
        $('.player_side_hd ul li').eq(1).removeClass('side_hdcurrent');
        $(this).addClass('side_hdcurrent');
        $('.player_side_bd').eq(1).removeClass('xs');
        $('.player_side_bd').eq(0).addClass('xs');
    });
    $('.player_side_hd ul li').eq(1).mouseenter(function(){
        $('.player_side_hd ul li').eq(0).removeClass('side_hdcurrent');
        $(this).addClass('side_hdcurrent');
        $('.player_side_bd').eq(0).removeClass('xs');
        $('.player_side_bd').eq(1).addClass('xs');
    });

    // list_current
    $('.mod_recomitem_list li').click(function(){
        $(this).addClass('list_current').siblings().removeClass('list_current');
    });

    $('.mod_playlist ul li').click(function(){
        $(this).addClass('xzys').siblings().removeClass('xzys');
    });
});