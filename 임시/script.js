
let index = 0       // 멀티슬라이드 순서
let pause = false   // 멀티슬라이드 일시중지, true이면, 일시중지

$(function() {

    // 메인 슬라이드
    $('.slide-container').slick({
        dots: true,
        arrows: false,

        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:500,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 1,                // 보여질 슬라이드 개수
        slidesToScroll: 1,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤
    })

    // 인기 상품 슬라이드
    $('.product-slide').slick({
        dots: false,
        arrows: true,

        autoplay: true,                 // 자동재생 여부
        autoplaySpeed: 3000,            // 자동재생 슬라이드 시간
        infinite: true,                 // 무한 반복 
        speed:800,                      // 슬라이드가 전환되는 시간


        // centerMode: true,            // 센터 모드
        // centerPadding: '60px',       // 센터 모드 시, 내부여백
        slidesToShow: 4,                // 보여질 슬라이드 개수
        slidesToScroll: 4,              // 스크롤될 슬라이드 개수


        pauseOnDotsHover: true,         // 페이지네이션 호버 시 자동재생 멈춤
        pauseOnFocus: true,             // 포커스 시, 자동재생 멈춤
        pauseOnHover: true,             // 호버 시, 자동재생 멈춤
    })

    // 3초마다 멀티 슬라이드 타이머 적용
    let slide = setInterval(multSlide, 3000)
    

    // 멀티 슬라이드 네비게이션
    $('.left-box .nav li').on('click', function() {
        // index() : 해당요소의 순서를 출력
        let num = $(this).index()
        index = num
        pause = false       // 슬라이드 일시중지 해제
        multSlide()
        pause = true        // 슬라이드 일시중지
        
        // 3초 후에, 일시중지 해제
        setTimeout(function(){
            pause = false
        }, 3000)
    })

})

// 슬라이드
function multSlide() {

    if( pause )
        return;     // 함수 종료

    index++

    // left-box - 네비게이션
    $('.left-box .nav li').removeClass('active')
    $('.left-box .nav li:nth-child(' + index + ')').addClass('active')

    // left-box - 상품 제목
    $('.left-box .title ul li').removeClass('active')
    $('.left-box .title ul li:nth-child(' + index + ')').addClass('active')

    // left-box -  상품 설명
    $('.left-box .info ul li').removeClass('active')
    $('.left-box .info ul li:nth-child(' + index + ')').addClass('active')

    // left-box - 상품 이미지
    $('.left-box .img ul li').removeClass('active')
    $('.left-box .img ul li:nth-child(' + index + ')').addClass('active')

    // center-box 
    $('.center-box ul li').removeClass('active')
    $('.center-box ul li:nth-child(' + index + ')').addClass('active')

    if( index == 4 )
        index = 0
}