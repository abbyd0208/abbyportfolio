// JavaScript Document

	/*========================下拉選單*/
	$(function(){
	
		var iWinW;
		
		var bMenuStatus = 0; 
		var BtnOpen = $(".btn_switch .btn_open");
		var BtnClose = $(".btn_switch .btn_close");
		
		//一開始選單就要被寫進去，會是跟wrapper平行的結構
		$(".wrapper").after('<div class="wrapper_overlap"></div>');
		
		/*選單下拉*/
		function fnDropDown(){
			$(".nav_1 ul.menu li ul.sub").hide();
			$(this).find(".sub").show();
		};
		
		/*選單收起*/
		function fnDropUp(){
			$(".nav_1 ul.menu li ul.sub").hide();
		};
		
		//fn 選單開
		function fnNav_1Open(){
			bMenuStatus = 1; 
			$(".wrapper_overlap").fadeIn(200)	
			$(".wrapper").css({"overflow":"hidden"});
			$(".nav_1").stop().animate({"left":"0"});
			$(".btn_switch").stop().animate({"left":"205"});
			BtnOpen.hide();
			BtnClose.show();
		}	
		
		//fn 選單關
		function fnNav_1Close(){
			bMenuStatus = 0; 
			$(".wrapper_overlap").fadeOut(200)	
			$(".wrapper").css({"overflow":"auto"});
			$(".nav_1").stop().animate({"left":"-200"})
			$(".btn_switch").stop().animate({"left":"10px"});
			BtnOpen.show();
			BtnClose.hide();
		}
	
		$(window).resize(function(){
			iWinW = $(this).width();
			
			if(iWinW > 768){
				$(".nav_1 ul.menu li").off("click");
				$(".nav_1 ul.menu li").on("mouseover", fnDropDown);
				$(".nav_1 ul.menu li").on("mouseout", fnDropUp);
				BtnOpen.off("click");
				BtnClose.off("click");
				$(".header .nav_1").css({"left":"auto","right":"0px"})
				
			}else{
				//alert("手機板");
				$(".nav_1 ul.menu li").off("mouseover mouseout")
				$(".nav_1 ul.menu li").on("click", fnDropDown);
				BtnOpen.on("click",fnNav_1Open);
				BtnClose.on("click",fnNav_1Close);
				$(".header .nav_1").css({"left":"-200px"})
				
			}
		}).trigger("resize");
	
			
	
		/*overlap黑色展開*/
		$(".wrapper_overlap").on("click", function(){
			if( bMenuStatus===1 ){fnNav_1Close()}
		});
	
		//歸零，當手機旋轉的時候，nav會被關起來
		$(window).on("orientationchange",function(){
			if( bMenuStatus === 1){fnNav_1Close()}
		});
	});
	
	/*========================圖集*/
    $(function(){
        $('.gallery_1 .run .inner').bxSlider({
			adaptiveHeight : false,
			pause : 5000,
			speed:1000, 
			auto: true,
			autoStart : true,
			touchEnabled : true
		});
		
    });
	

	$(function(){
		
		$('.gallery_2 .run .inner').bxSlider({
			slideWidth:540,
			pagerCustom: ".gallery_2 .pager",
			touchEnabled : true
		});
	});
	
	/*faq=====================================================*/
	 
	 //標題展開內文
	$(function(){
		
		//一開始全部隱藏
		$(".faq_content .box1 .sub").hide();
		
		//點選展開
		$(".faq_content h3").on("click",function(){
			$(".faq_content .box1 .sub").hide();
			$(this).next(".sub").show();
			$(this).find("i").css({"color":"gray"})
		});
	});
	
	//點側欄換答案
	$(function(){
	
		//一開始全部隱藏
		$(".faq_content .box1").hide();
		$(".faq_content .box1").eq(0).show();
		$("#faq_list").find("li").on("click",function(e){
			e.preventDefault();
			$(".faq_content .box1").hide();
			var iNo=$(this).index();

			$(".faq_content .box1").eq(iNo).show();
			
		});

	});
	
	//點側欄換答案
	$(function(){
	
		//一開始全部隱藏
		$(".faq_content .box1").hide();
		$(".faq_content .box1").eq(0).show();
		$("#faq_list_m").find("li").on("click",function(e){
			e.preventDefault();
			$(".faq_content .box1").hide();
			var iNo=$(this).index();

			$(".faq_content .box1").eq(iNo).show();
			
		});

	});
	
	
	//ifram自適應

	$(document).ready(function () {
	$('iframe[src*="docs.google.com"]').wrap('<div class="youtubecontent" />');
	});

	//固定右側 滑出選單
	
	$(function(){
		$(".sider_scroll .sider_tab").on("mouseover",function(){
			$(".sider_scroll").stop().animate({"right":"0px"})
		});
		
		$(".sider_scroll").on("mouseleave",function(){
			$(".sider_scroll").stop().animate({"right":"-250px"})
		});
	
	});
	
					