$(function(){
    new MouseScroll({
        // conBox: ".content",
        // conBoxPage: ".page",
        // navList: ".nav",
        // navListItem: ".nav li"
    })
})

function MouseScroll(o){
    this.conBox = o.conBox || ".content";
    this.conBoxPage = o.conBoxPage || ".content .page";
    this.navList = o.navList || ".nav";
    this.navListItem = o.navListItem || ".nav li";
    this.headerList = o.headerList || ".list ";
    this.headerListItem = o.headerListItem || ".list li";
    this.init();
}

MouseScroll.prototype.init = function(){
    var that = this;
    var num = 0,timer = null;
    var prtsc = $(that.conBoxPage).length - 1;

    $(document).mousewheel(function(e,d){
        window.clearTimeout(timer);
        timer = setTimeout(scroll,300);

        function scroll(){
            num -= d;
            if(num > prtsc){
                num = prtsc;
            }
            if(num < 0){
                num = 0;
            }

            $(that.conBox).stop().animate({top:-num*100+"%"},1000)
            $(that.navListItem).eq(num).addClass("current").siblings().removeClass("current");
        }
    })

    $(that.navListItem).on("click",function(){
        var index = $(this).index();

        $(this).addClass("current").siblings().removeClass("current");
        $(that.conBox).stop().animate({top: -index*100+"%"}, 1000);

        num = index;
    })

    $(that.headerListItem).on("click",function(){
        var index = $(this).index();

        $(that.navListItem).eq(index).addClass("current").siblings().removeClass("current");
        $(this).addClass("current").siblings().removeClass("current");
        $(that.conBox).stop().animate({top: -index*100+"%"}, 1000);

        num = index;
    })

}
