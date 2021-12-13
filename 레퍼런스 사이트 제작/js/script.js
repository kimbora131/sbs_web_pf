$(function(){
    //스크롤 애니메이션
    $('.animate').scrolla({
        mobile: true,   //모바일 버전 활성화
        once: false     //true : 한번만, false : 계속
    })

    //슬라이드
    $('.visual .slide').slick({
        arrows:false,               //화살표 사용여부
        dots:true,                  //네비게이션 사용여부    
        autoplay:true,              //자동재생
        fade:true,                  //페이드인 효과
        autoplaySpeed:5000,         //재생시간 5000ms = 5초
        pauseOnHover:false,         //마우스 오버 시 멈춤 여부
        pauseOnFocus:false          //포커스시 멈춤 여부
    })

    //모바일 네비게이션
    $('header .open').on('click', function() {
        $('body').css({'overflow' :  'hidden'})
        $('header .bg').css({'display' :  'block'})
        $('header nav').addClass('on')
    })

    //X버튼 클릭 이벤트
    $('header .close').on('click', function() {
        $('body').css({'overflow' :  'auto'})
        $('header .bg').css({'display' :  'none'})
        $('header nav').removeClass('on')
    })


    //헤더 스크롤 배경 넣기
    let scrollValue = 0
    scrollValue = $(document).scrollTop()


    function fixHeader() {
        //스크롤 위치가 200px 초과하면, 배경 넣어주기
        if(scrollValue > 200) {
            $('header').addClass('on')
        }else{
            $('header').removeClass('on')
        }
    }

    //스크롤 위치 감지 이벤트
    $(window).ㅆon('scroll resize', function(){
        scrollValue = $(document).scrollTop()
        fixHeader()
    })
})