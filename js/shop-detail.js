$(function(){
    imageResize();
    heightResize();
    buyButton();

    //swiper - swiper.min.js
    var mySwiper = new Swiper('.swiper-container-main', {
        direction: 'horizontal',
        loop: true
    });

    //썸네일 - swiper.thumbnails.js
    swiperThumbs(mySwiper, {
        // Our default options
        element: 'swiper-thumbnails',
        activeClass: 'is-active',
    })
})

$(window).resize(function(){
    imageResize();
    heightResize();
    buyButton();
})


//구매버튼 사이즈 변경
function buyButton() {
    var media = matchMedia("only screen and (min-width: 768px)");

    var width = $(window).width();
    var button_width = width - 76;

    if(!media.matches) {
        $("li.buy.kr-ver").css({"width":button_width});
    } else {
        $("li.buy.kr-ver").css({"width":"274px"});
    }
}

//메인 이미지 리사이즈
function imageResize() {
    var media1 = matchMedia("only screen and (max-width: 768px)");
    var media2 = matchMedia("only screen and (max-width: 1024px) and (min-width:768px)");
    var media3 = matchMedia("only screen and (max-width: 1320px) and (min-width:1024px)");

    var width = $(window).width();

    if(media1.matches) {
        $(".krsd-main-image-area").css({"width":"100%", "margin-left":"0px"});
        $(".d-context.kr-ver").css({"padding-right":"15px"});
        $(".swiper-thumbnails-wrapper").css({"right":"0"});
    } else if(media2.matches) {
        var contextRight = width - 984;
        contextRight = (contextRight < 0)?0:contextRight;
        swiperWidth = 590;

        if(contextRight <= 0) {
            swiperWidth = width - 378;
        }

        $(".krsd-main-image-area").css({"width":swiperWidth, "margin-left":"15px"});
        $(".d-context.kr-ver").css({"padding-right":contextRight});
        $(".swiper-thumbnails-wrapper").css({"right":"0"});

    } else if(media3.matches){
        var contextRight = width - 1245;
        var swiperLeft = 240;
        var thumbnailRight = 120;
        var swiperWidth = 600;

        contextRight = (contextRight < 0)?0:contextRight;

        if(contextRight <= 0) {
            swiperLeft = width - 1005;
            swiperLeft = (swiperLeft < 140)?140:swiperLeft;
        }

        if(swiperLeft <= 160) {
            thumbnailRight = width - 1045;
            thumbnailRight = (thumbnailRight < 100)?100:thumbnailRight;
        }

        if(thumbnailRight <= 100) {
            swiperWidth = width - 545;
        }

        $(".krsd-main-image-area").css({"width":swiperWidth, "margin-left":swiperLeft});
        $(".d-context.kr-ver").css({"padding-right":contextRight});
        $(".swiper-thumbnails-wrapper").css({"right":thumbnailRight});
    } else {
        $(".krsd-main-image-area").css({"width":"600px", "margin-left":"240px"});
        $(".d-context.kr-ver").css({"padding-right":"70px"});
        $(".swiper-thumbnails-wrapper").css({"right":"120px"});
    }

    $(".krsd-main-image-area figure").css({"height":$(".krsd-main-image-area").width()});
}

//스와이프 썸네일 변경
function heightResize() {
    var media = matchMedia("only screen and (max-width: 1024px)");
    var imgHeight = $(".krsd-main-image-area").height();
    var imgWidth = $(".krsd-main-image-area").width();


    if(media.matches) {
        $(".swiper-thumbnails-wrapper").css({"height":"inherit"});
        $(".swiper-thumbnails-wrapper").css({"width":imgWidth});
    } else {
        $(".swiper-thumbnails-wrapper").css({"height":imgHeight});
        $(".swiper-thumbnails-wrapper").css({"width":"inherit"});
    }
}