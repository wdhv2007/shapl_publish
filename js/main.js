// JavaScript Document
// JavaScript Document
'use strict';

$(document).ready(function(){

    /*---------When you clicked these things, It prevents a screen from jumping up.----------*/
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    /*------------------------------------------HEADER----------------------------------------*/
    
        /* HEADER-STICKY-WRAPPER */
    /*$("#header-sticky-wrapper").sticky({topSpacing:0});*/
    
    
        /* GNB-CLICK */
    /*$('#gnb > ul li.gnb-search > a').click(function(){
        $('#gnb > ul ul.gnb-sub-search').toggleClass('on');
        $('#gnb > ul ul.gnb-sub-menu').removeClass('on');
        $('#gnb > ul ul li.shop ul.gnb-shop-sub-menu').removeClass('on');
        $('ul.sign-help-center-menu').removeClass('on');
        $('#gnb > ul ul li.design ul.gnb-design-sub-menu').removeClass('on');
    });*/

    
        /* KEYWORDS-LIST-SEARCH-CLEAR */
    /*var $ipt = $('input.search'),
    $clearIpt = $('span.search-clear'),
    $clearIpt2 = $('button.header-btn-shaplWhiteBorder');


    $ipt.keyup(function(){
        $('span.search-clear').toggle(Boolean($(this).val()));
        
        if($('ul.keywords-list').addClass('on2')) {
            $('ul.search-sub-menu li.all-category, ul.search-sub-menu li.staffPicked, div.search-btn').css('display', 'none');
        };
        $('div.keyword-container').addClass('on2');
    });

    $clearIpt.toggle(Boolean($ipt.val()));
    $clearIpt.click(function(){
        $('input.search').val('').focus();
        $('div.keyword-container').removeClass('on2');
        $(this).hide();
        if($('ul.keywords-list').removeClass('on2')) {
            $('ul.search-sub-menu li.all-category, ul.search-sub-menu li.staffPicked, div.search-btn').css('display', 'block');
        };
    });
    
    $clearIpt2.click(function(){
        $('input.search').val('').focus();
        $('div.keyword-container').removeClass('on2');
        $('span.search-clear').hide();
        $('#gnb > ul ul.gnb-sub-search').removeClass('on');
    });*/
    
    
        /* STAFFPICKED-SUB-MENU */
    /*$('li.staffPicked > a').click(function(){
	
		if($('div.staffPicked-sub-menu').addClass('on1')) {
            $('#search-mobile-container').removeClass('on1');
        };
	});*/

	/*$('div.staffPicked-sub-menu > span.back > a').click(function(){
	
		if($('div.staffPicked-sub-menu').removeClass('on1')) {
            $('#search-mobile-container').addClass('on1');
        };
	});*/
    
    
        /* CATEGORY-SUB-MENU */
    /*$('li.all-category > a').click(function(){

        if($('div.category-sub-menu').addClass('on1')) {
            $('#search-mobile-container').removeClass('on1');*/
            /*$('#search-mobile-container').css('opacity', '0');*/
        /*};
	});*/

	/*$('div.category-sub-menu > span.back > a').click(function(){
	
        if($('div.category-sub-menu').removeClass('on1')) {
            $('#search-mobile-container').addClass('on1');
        };
	});*/
    
    
        /* MOBILE-NAV-CLICK *//* 0702 */
    /*$('#gnb > ul > li.gnb-menu > a').click(function(){
        if ($(window).width() <= 768) {
            $('#nav-mobile-container').addClass('on');
            $('#nav-mobile-container').css('box-shadow', '30px 0 30px 0 rgba(0, 0, 0, 0.19)');
            $('body').addClass('fixed');
            $('body').css({'overflow':'hidden'});
        }
	});*/

	/*$('.headerGnb-btn-close').click(function(){
        $('#nav-mobile-container').removeClass('on');
        $('#nav-mobile-container').css('box-shadow', 'none');
        $('body').removeClass('fixed');
        $('body').css({'overflow':''});
	});*/
    
    
        /* SEARCH-MENU */
    /*$('ul.search-menu > li.design > a').click(function(){
            $('li.design').addClass('on');
            $('li.shop').removeClass('on');
        
    });*/

    /*$('ul.search-menu > li.shop > a').click(function(){
            $('li.shop').addClass('on');
            $('li.design').removeClass('on');
    });*/
    
    
        /* SEARCH-SUB-MENU */
    /*$('#gnb > ul > li.gnb-search > a').click(function(){
	    if ($(window).width() <= 768) {
            $('#search-mobile-container').addClass('on1');
            $('body').addClass('fixed');
        }
	});*/

    
	/*$('button.headerSearch-btn-cancel').click(function(){
        if ($(window).width() <= 768) {
            $('#search-mobile-container').removeClass('on1');
            $('body').removeClass('fixed');
        }
	});*/
    
    
        /* UL.CATEGORY-SUB-MENU-LI-DIV-UL-LI */
    /*$('ul.search-sub-menu li div ul li').one("click", function(){
        
        var alt = $( "ul.search-sub-menu li div ul li:nth-child(n)" );
        $( "ul.search-sub-menu li div ul li a" ).click(function() {
            $( this ).css( "background", "url(images/icon/group-23.svg) right top 10px no-repeat" );
            $( this ).css( "color", "#466dff" );
        });
    });*/
    
    
        /* SELECTBOX-OPTIONS */
    /*$.fn.setCustomizedSelectbox = function() {
        var $selectbox = $(this),
            $optionbox = $selectbox.children("ul.selectbox-options"),
            $options = $optionbox.children("li");
        var isOpened = false;

        function _onToggleOptionBox(event) {
            event.stopPropagation();

            var target = event.target;

            if($.inArray(target, $options) !== -1) {
                if(isOpened) return toggleOptionItem(target);
                isOpened = true;
            } else {
                if(!isOpened) return;
                isOpened = false;
            }

            $optionbox.toggleClass("opened");
        }

        function _onCloseOptionBox(event) {
            event.stopPropagation();

            var $this = $(this),
                $target = $(event.target);

            if(($.inArray(event.target, $options) !== -1 || $target.is($this)) && isOpened) {
                $optionbox.toggleClass("opened");
                isOpened = false;
            }
        }

        function toggleOptionItem(selected) {
            var $selectedItem = $(selected),
                value = $selectedItem.data();
                value = value && value.value || null;

            console.log(value);

            if(!$selectedItem.hasClass("selected")) {
                $options.removeClass("selected");
                $selectedItem.addClass("selected");
                $selectedItem.trigger("onSorterSelected");
            }

            $selectbox.trigger("click");

            return;
        }

        $selectbox.on("click", _onToggleOptionBox);
        $optionbox.on("mouseleave", _onCloseOptionBox);
    }

    $(document).ready(function() {
        $("#selectbox").setCustomizedSelectbox();
        $("#selectbox2").setCustomizedSelectbox();
        $("#selectbox3").setCustomizedSelectbox();
    });*/

    
    /*-------------------------------------INTRO---------------------------------------*/
    var i =0;
    var len = $(".panel>li").length;
    var isAnimated = false; 
    var timer;  


    //네비버튼 클릭시 
    $(".navi>li").on("click",function(e){
        e.preventDefault();
      
        var curNum = $(".panel>li.on").index();
        i = $(this).index();

        stop();
        //클릭한 패널 순서가 현재 패널순서보다 크면 
        if(curNum>i){
            doPrev(i);  //next함수 호출      
        }else{
            doNext(i);   //prev함수 호출   
        }
    });


   //다음버튼 클릭시
   $(".next").on("click",function(e){
      e.preventDefault();
      i = $(".panel>li.on").index();

      if(i==len-1){
         i=0;
      }else{
         i++;
      }
      stop();
      doNext(i);      
   });


   //이전버튼 클릭시
   $(".prev").on("click",function(e){
      e.preventDefault();
      i = $(".panel>li.on").index();

      if(i==0){
         i=len-1;
      }else{
         i--;
      }

      stop();
      doPrev(i);
   });


   $(".start").on("click",function(e){
      e.preventDefault();      
      start(i);
   });

   $(".stop").on("click",function(e){
      e.preventDefault();
      stop();
   })


   /*-------------------함수 선언-------------------*/
   //prev 함수
   function doPrev(i){      
      if(!isAnimated){
         isAnimated=true;
         prevSlide(i);
         activateBtn(i);
      }
   }


   //next 함수
   function doNext(i){
      if(!isAnimated){
         isAnimated=true;
         nextSlide(i);
         activateBtn(i);
      }
   }


   //이전패널 이동함수
   function prevSlide(i){
      $(".panel>li").not(".on").css("left","-100%");
      $(".panel>li.on").stop().animate({"left":"100%"},1000,function(){
         $(this).css("left","-100%").removeClass("on");
      });
      $(".panel>li").eq(i).stop().animate({"left":"0%"},1000,function(){
         $(this).addClass("on");
         isAnimated = false;
      });
   }


   //다음패널 이동함수
   function nextSlide(i){
      $(".panel>li").not(".on").css("left","100%");
      $(".panel>li.on").stop().animate({"left":"-100%"},1000,function(){
         $(this).css("left","100%").removeClass("on");
      });
      $(".panel>li").eq(i).stop().animate({"left":"0%"},1000,function(){
         $(this).addClass("on");
         isAnimated = false;
      });
   }

   //버튼 활성화 함수
   function activateBtn(i){
      $(".navi>li>a").removeClass("on");
      $(".navi>li").eq(i).children("a").addClass("on");
   }

   
   //자동롤링 시작 함수
   function start(i){
      $(".start").hide();
      $(".stop").show();
     
      timer = setInterval(function(){
         if(i==len-1){
            i=0;
         }else{
            i++;
         }
         doNext(i);
      },2000);
      
   }


   //자동롤링 정지 함수
   function stop(){
      $(".start").show();
      $(".stop").hide();
      clearInterval(timer);
   }
    
    
    /* --------------------------------DESIGN-SHOP-DETAIL--------------------------------------- */
    var total = $("ul.d-info > li").length;
    
    $("ul.d-info > li").each(function(index){
        if (total % 2 === 0) {
            if(index === total - 1 || index === total - 2) {
                $(this).css({"margin-bottom":"0px"});
            };
        } else {
            if(index === total - 1) {
                $(this).css({"margin-bottom":"0px"});
            };
        };
    });    

    
    /*---------------------------------SIGN-IN-UP------------------------------------*/
        /* SIGN-IN-UP-TAB-PC- */
    $(".tab-content").hide();
    $(".tab-content:first").show();
    $("ul.tabs li").click(function (){
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });

    
        /* SIGN-IN-UP-CLOSE */
    $(".close-btn").on("click", function(e){
        e.preventDefault();
        
        $("#sign-in-up-wrapper").stop().fadeOut(300);
        $(".tab-modal-container").stop().fadeOut(300);
    });
    
    
    
    /*-----------------------------DESIGN-DETAIL-POPUP------------------------------*//* 1218작업 예정 */
    var $delay = 1000;
    var i = 0;
    
    /*function like_state(){*/  /* like-btn을 누르지 않으면 나오는 팝업 - 즉, design-detail 화면을 처음 들어갔을 때 나오는 팝업 *//* 1218 */ 
        $("div.like-popup").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
            $("div.like-popup").delay($delay).fadeOut(600);
        });
    /*}*/
    
    /*function thank_state01() {*/  /* like-btn을 1번째, 2번째 누르면 나오는 팝업 - 클릭후 팝업이 나오게 구현*//* 1228 - 1번만 버튼 클릭 */
        $("button.like-btn").click(function(){
            $("div.thank-popup01").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
                $("div.thank-popup01").delay($delay).fadeOut(600);
                
                $("button.like-btn").css({"display":"none"});
                $("button.thank-btn").css({"display":"block"});
            });
        });
    /*}*/
    
    /*function cancel_state() {*/
        $("button.thank-btn").click(function(){
            $("div.cancel-popup").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
                $("div.cancel-popup").delay($delay).fadeOut(600);

                $("button.like-btn").css("display","block");
                $("button.thank-btn").css("display","none");
            })
        })
    /*}*/
    
    /*function cancel_state() {*/   /* thank-btn을 1번째, 2번째, 3번째 누르면 나오는 팝업 - 팝업만 나오게 구현*/
        /*$("button.like-btn").css("display","none");
        $("button.thank-btn").css("display","block");
        
        $("div.cancel-popup").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
            $("div.cancel-popup").delay($delay).fadeOut(600);
            
            $("button.like-btn").css("display","block");
            $("button.thank-btn").css("display","none");
        })*/
    /*}*/
    
    /*function thank_state01_1() {*/    /* like-btn을 1번째, 2번째 누르면 나오는 팝업 - 팝업만 나오게 구현 */
        /*$("div.thank-popup01").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
            $("div.thank-popup01").delay($delay).fadeOut(500);

            $("button.like-btn").css("display","none");
            $("button.thank-btn").css("display","block");
        });
    }*/
    
    /*function thank_state02() {*/  /* like-btn을 3번째 누르면 나오는 팝업 - 클릭후 팝업이 나오게 구현*/        
        /*$("button.like-btn").click(function(){
            $("div.thank-popup02").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
                $("div.thank-popup02").delay($delay).fadeOut(500);

                $("button.like-btn").css("display","none");
                $("button.thank-btn").css("display","block");
            });
        });
    }*/
    
    /*function thank_state02() {*/  /* like-btn을 3번째 누르면 나오는 팝업 - 팝업만 나오게 구현*/        
        /*$("div.thank-popup02").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
            $("div.thank-popup02").delay($delay).fadeOut(500);

            $("button.like-btn").css("display","none");
            $("button.thank-btn").css("display","block");
        });
    }*/

    /*function cancel_state() {*/   /* thank-btn을 1번째, 2번째, 3번째 누르면 나오는 팝업 - 클릭후 팝업이 나오게 구현*/
        /*$("button.like-btn").css("display","none");
        $("button.thank-btn").css("display","block");
    
        $("button.thank-btn").click(function(){
            $("div.cancel-popup").stop().animate({"top":"-180px", "opacity":"1"}, 1300, "easeInOutExpo", function(){
                $("div.cancel-popup").delay($delay).fadeOut(500);
                
                $("button.like-btn").css("display","block");
                $("button.thank-btn").css("display","none");
            });
        });
    }*/
    
    /*function forth_state() {*/    /* like-btn, thank-btn을 4번째부터 누르게 되면 나오는 상황 - 코인은 앞선 3번의 CLICK(좋아요, 취소)으로 소진되었으므로, 여기서부터는  코인 발급을 제외한 LIKE 카운트(제품당 최대 1번)만 가능해집니다.(취소가능) */
        /*$("button.like-btn").css("display","none");
        $("button.thank-btn").css("display","block");
        
        $("button.thank-btn").click(function(){
            $("button.like-btn").css("display","block");
            $("button.thank-btn").css("display","none");
        });
    
        $("button.like-btn").click(function(){
            $("button.like-btn").css("display","none");
            $("button.thank-btn").css("display","block");
        });*/
    /*}*/



    /* --------------------------------BLOG-POPSUBS-WRAPPER--------------------------------------- *//* 0706 - josh */
    /*function subs_do (){*/
    $(".sb-btn-mintBorder").click(function(){
        $(".sb-popSubs-bg").fadeIn({"display":"block"}, 1300, "easeInOutExpo");
        $(".sb-popSubs").fadeIn({"display":"block"}, 1300, "easeInOutExpo");
        $(".blog-popSubs-wrapper").css("z-index","2");
        $(".sb-btn-shaplBlack/*.sb-active*/").click(function(){

            if($(this).hasClass('sb-active')) {
                $(".sb-popSubs").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
                $(".sb-popChoice-container").fadeIn({"display":"block"}, 1300, "easeInOutExpo");
            }

        });
        //$("body").css({"overflow": "hidden"});
    });

    $(".sb-popSubs-close").click(function(){
        $(".sb-popSubs-bg").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".sb-popSubs").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".blog-popSubs-wrapper").css("z-index","0");
        //$("body").css({"overflow": ""});
    });

    $(".popChoice-close").click(function(){
        $(".sb-popSubs-bg").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".sb-popChoice-container").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".blog-popSubs-wrapper").css("z-index","0");
        //$("body").css({"overflow": ""});
    });

    $("#subscribe_email").keyup(function(){
        var value = $(this).val();
        var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        $(".sb-invalid").hide();
        if(regex.test(value)) {
            $(".blogSubs-btn-shaplGray").addClass('sb-active');
        } else {
            $(".blogSubs-btn-shaplGray").removeClass('sb-active');
        }
    })

    $(".sb-popSubs-bg").click(function(){
        $(".sb-popSubs-bg").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".sb-popSubs").fadeOut({"display":"none"}, 1300, "easeInOutExpo");
        $(".sb-popChoice-container").fadeOut({"display":"none"}, 1300, "easeInOutExpo");

        $(".blog-popSubs-wrapper").css("z-index","0");
    })

    $(".blogSubs-btn-shaplGray").click(function(){
        if(!$(this).hasClass('sb-active')) {
            $(".sb-invalid").show();
        } else {
            $('.pop-category-menu').removeClass('sb-checked');
            $('.blogChoice-btn-shaplGray').removeClass('sb-active');
            $(".pop-all-check").removeClass('sb-allChecked');
        }
    })

    $(".pop-category-menu").click(function(){
        $(this).toggleClass('sb-checked');

        if($('.sb-checked').length > 0) {
            $('.blogChoice-btn-shaplGray').addClass('sb-active');
        } else {
            $('.blogChoice-btn-shaplGray').removeClass('sb-active');
        }

        if($('.sb-checked').length == $('.pop-category-menu').length) {
            $('.pop-all-check').addClass('sb-allChecked');
        } else {
            $('.pop-all-check').removeClass('sb-allChecked');
        }
    })

    $(".pop-all-check").click(function(){
        $(this).toggleClass('sb-allChecked');

        //if($('.sb-checked').length != $('.pop-category-menu').length) {
        if($(this).hasClass('sb-allChecked')) {
            $('.pop-category-menu').addClass('sb-checked');
            $('.blogChoice-btn-shaplGray').addClass('sb-active');
        } else {
            $('.pop-category-menu').removeClass('sb-checked');
            $('.blogChoice-btn-shaplGray').removeClass('sb-active');
        }
    })

    $(".sb-btn-shaplWhite").click(function(){
        $("#subscribe_email").val("");
        $('.blogSubs-btn-shaplGray').removeClass('sb-active');
    })
    


    /* --------------------------------BLOG-POPUNSUBS-WRAPPER--------------------------------------- */
    function unSubs_do (){
        $(".sb-btn-shaplWhite").click(function(){
            $(".blog-popUnsubs-wrapper").fadeIn({"display":"block"}, 1300, "easeInOutExpo");
            $("body").css({"overflow": "hidden"});
        });

        $(".sb-unSubs-close").click(function(){
            $(".blog-popUnsubs-wrapper").fadeOut({"display":"none"}, 1300, "easeInOutExpo"); 
            $("body").css({"overflow": ""});
        });
    }
    
    /* --------------------------------CONTEST-RENEWAL--------------------------------------- *//* 1128 */
    
});










