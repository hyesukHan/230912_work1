$(function(){

    // 새창이동

    $('#langBtn').click(function(){
        url = $('#langList').val();
        window.open(url);
    })

    //sc-visual 슬라이드 영역

    const mainSlide1 = new Swiper('.slide-content1 .swiper',{
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        pagination: {
            el: ".slide-content1 .fraction",
            type: "fraction",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          loop:true
    }
    )

    const mainSlide2 = new Swiper('.slide-content2 .swiper',{
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        pagination: {
            el: ".slide-content2 .fraction",
            type: "fraction",
          },
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        loop:true
    })

    mainSlide2.autoplay.stop();
    $('.sc-visual .headline-area').click(function(){
        $('.sc-visual .headline-area').removeClass('on');
        $(this).addClass('on');
        $(this).parent().addClass('on').siblings().removeClass('on');

        //visual영역 슬라이드 탭버튼으로 컨트롤

        if($(this).parent().hasClass('slide-content2')){ //슬라이드 2번이면
            mainSlide1.autoplay.stop();                    
            if($(this).parent().find('.autoplay').hasClass('on')){
                mainSlide2.autoplay.stop();
            }else{
                mainSlide2.autoplay.start();
            }
            
        }else{                                           //슬라이드 1번이면
            mainSlide2.autoplay.stop();
            if($(this).parent().find('.autoplay').hasClass('on')){
                mainSlide1.autoplay.stop();
            }else{
                mainSlide1.autoplay.start();
            }
        }
    })
    
    const mainSlide3 = new Swiper('.sc-banner2 .swiper',{
        // effect:'face',
        spaceBetween: 43,
        slidesPerView: 3,
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        pagination: {
            el: ".fraction",
            type: "fraction",
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        loop:true
    })

    //모든 슬라이드 autoplay 컨트롤
    slideArr = [mainSlide1,mainSlide2,mainSlide3]
    $('.swiper .autoplay').click(function(){

        $(this).toggleClass('on');
        idx=$(this).data('slide');
        if($(this).hasClass('on')){
            slideArr[idx].autoplay.stop();
        }else{
            slideArr[idx].autoplay.start();
        }
    })


    //top버튼 숨김 보임 처리
    $(window).scroll(function(){
        curr = $(this).scrollTop();

        if(curr >= 10){
            $('.btn-top').addClass('show');
        }else{
            $('.btn-top').removeClass('show');
        }
    })

    //top버튼 누르면 상단으로 가기
    fixEl = document.querySelector('.btn-top');
    fixEl.addEventListener('click',()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    })

    $('.navigation .btn-navi').click(function(e){
        e.preventDefault();
  
        if($(this).hasClass('on')){
            $('.navigation .btn-navi').removeClass('on').siblings('.sub').slideUp();
        }else{
            $('.navigation .btn-navi').removeClass('on').siblings('.sub').slideUp();
            $(this).addClass('on').siblings('.sub').slideDown();
        }
    })

    $('.navigation .navi-item-2dept:first-child a').keydown(function(e){
        if(e.keyCode === 9 && e.shiftKey){
            $('.navigation .btn-navi').removeClass('on').siblings('.sub').slideUp();
        }
    })

    $('.navigation .navi-item-2dept:last-child a').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey){
            $('.navigation .btn-navi').removeClass('on').siblings('.sub').slideUp();
        }
    })
 
    $layerPopup = document.querySelector('.top-banner');
    $btnLayerPopupClose = document.querySelector('.top-banner .btn-close');
    $btnLayerPopupTodayHide = document.getElementById('today-del-checkbox');


    if(!$.cookie('testCookie')){
        layerPopupShow();
    }

    $btnLayerPopupClose.addEventListener('click',function(){
        
     
        if($btnLayerPopupTodayHide.checked){
            layerPopupHide(1);
            console.log(1);
        }else{
            layerPopupHide(0);
        }
    })

    function layerPopupShow(){
        $layerPopup.style.display = 'block';
    }

    function layerPopupHide(state){
        $layerPopup.style.display = 'none'

        if(state === 1){
            if($.cookie('testCookie') == undefined){
                $.cookie('testCookie', 'Y', { expires: 1, path: '/' });
            }
        }
    }

    });

    
