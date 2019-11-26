// JavaScript Document

//讓捲軸用動畫的方式移動到到指定的位罝======================
$(function(){
	
	$(".scrollgo").click(function(){
		
		var sGoTo = $(this).attr("rel"); //取得目標物的id class
		var $body = (window.opera) ? (document.compatMode === "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		
		$body.animate({
			scrollTop: $(sGoTo).offset().top
		}, 1000);
		
		return false;
	});
});

//gototop
$(function(){
	
	var iScrollPointA = 0;  //回到某一個點
	var iScrollPointB = 700;  //滾到某一個點
	
	var sGototopHtml = '<div class="gototop">TOP</div>';

	$("body").append(sGototopHtml);
	$(".gototop").hide();
	
	$(window).scroll(function(){
		if( $(window).scrollTop() > iScrollPointB) {
			$(".gototop").show();	
		} else {
			$(".gototop").hide();	
		};
	});
	
	
	// 讓捲軸用動畫的方式移動到到指定id位罝
	$(".gototop").click(function(){
		var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //修正 Opera 問題
		$body.animate({scrollTop: iScrollPointA}, 1000);
		return false;
	});
	
});


//頁籤 推薦閱讀 news.htm=====================================
$(function(){
 
	//初始
	$(".tab_title a").eq(0).addClass("current");

	$(".tab_title a").on("click",function(e){
		e.preventDefault();
		var iNo = $(this).index();
		$(".tab_content .piece").eq(iNo).show().siblings().hide();
		$(".tab_title a").eq(iNo).addClass("current").siblings().removeClass("current");
	});
});