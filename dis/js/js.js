// JavaScript Document
$(function(){
	((function(){
		var snum=0;//角标数量
		var ps=0;//屏幕数
		var timer=null;//定时器存放变量
		//屏幕染色模块
		// var colors=['#c1e241','#F60','#A6B8CC','#A6B78C','blue']
		// $('.content>div').each(function(index, element) {
		// 	$(element).css('background',colors[index]);
		// });
		ps=$('.content>div').length-1;
		//插件要求
		/*
			1.滚动事件必须要给document绑定。
			2.滚动事件执行的指令当中需要传递两个参数e,d；
		*/
		//网页一发布，动画自动加载
		// $('.content>div').eq(snum).removeClass('out').siblings().addClass('out');
		//屏幕事件
		$(document).mousewheel(function(e,d){
			window.clearTimeout(timer)
			timer=setTimeout(fn,300)
			//向下滚动D是-1；上上是+1；
			function fn(){
				 snum-=d//创造数据 snum=snum - d;
				 console.log(snum);
				if(snum > ps){
					 snum=ps;
				  }

				  console.log(snum);
				if(snum < 0){ snum=0 }
				$('.content').stop().animate({top: -snum*100+'%' },1000)//屏幕的工作
				$('.nav li').eq(snum).addClass('current').siblings().removeClass();//角标的工作
				// $('.content>div').eq(snum).removeClass('out').siblings().addClass('out');
			}
		})
		//角标点击事件
		$('.nav li').click(function(e) {
			var index = $(this).index();
			$(this).addClass('current').siblings().removeClass();
			$('.content').stop().animate({top:-index*100+'%'},1000);
			// $('.content>div').eq(index).removeClass('out').siblings().addClass('out');
			snum=index;
		});
		//导航点击事件
		$('.list li').click(function(e) {
			var index = $(this).index();

			$('.content').stop().animate({top:-index*100+'%'},1000);
			snum=index;
			// $('.content>div').eq(snum).addClass('out').removeClass('out').siblings().addClass('out');
			$('.nav li').eq(snum).addClass('current').siblings().removeClass();//角标的工作
		});
	})());



























})
