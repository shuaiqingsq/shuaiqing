window.onload=function(){

    function $(id){
        return document.getElementById(id);
    }

    function getStyle(obj,attr){
        return getComputedStyle(obj,null)[attr];
    }

    var list = document.getElementById('list');
    var lis = list.getElementsByTagName('li');
    var ollis = document.getElementById('olli').children;
    var w = parseInt(getStyle(lis[0],'width'));
    var uleft = 0;
    var a = 0;
    list.addEventListener('touchstart',function(ev){
        clearInterval(timer);
        var ex = ev.changedTouches[0].pageX;
        uleft = this.offsetLeft;

        list.addEventListener('touchmove', function(ev){
            var dis = ev.changedTouches[0].pageX-ex;
            list.style.left=uleft+dis+'px';
        });

        list.addEventListener('touchend',function(ev){
            a=Math.round(this.offsetLeft/w);
            a=index;
            if(a>0){
                a=0;
            }else if(a<-(lis.length-1)){
                a=-(lis.length-1);
            }
            list.style.left=a*w+'px';
            timer=setInterval(dy,3000);
        });
    });

    var leader = 0,target = 0;
    var index = 0;
    function ld(index){
        for (var i = 0; i < ollis.length; i++) {
                ollis[i].className="";
            }
        ollis[index].className="cur";
        target = index*-innerWidth;
        setInterval(function(){
            leader = leader+(target-leader)/10;
            list.style.left=leader+"px";
        }, 50);
    }

    for (var i = 0; i < ollis.length; i++) {
        ollis[i].index=i;
        ollis[i].onmouseover=function(){
            index=this.index;
            ld(this.index);
        }
    }

    function dy(){
     index++;
        if(index>3){
            index=0;
        }
        ld(index);   
    }

    var timer = setInterval(dy,5000);
}