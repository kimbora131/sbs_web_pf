$(function () {


    // 스와이퍼 시작!
    const swiper = new Swiper('.swiper', {
        
        direction: 'horizontal',        // 슬라이드 방향 : 'vertical', 'horizontal'
        loop: true,                     // 반복여부
        autoplay: {                     // 자동재생    
            delay: 1000,                // 슬라이드 당 지연시간 (ms) 
            pauseOnMouseEnter: true,    // 슬라이드에 마우스 올려두면, 자동재생 멈춤
            disableOnInteraction: true, // 인터렉션(화살표,드래그,...) 중의 자동재생 비활성화여부
        },


        slidesPerView: 1,               // 보여지는 슬라이드 개수
        spaceBetween: 0,               // 슬라이드 간 여백
        
        /* 이펙트 */
        // fade
        /*
        effect: 'fade',               
        fadeEffect: {
            crossFade: false,           
        },
        */


        // coverflow
        /*
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 30,
            slideShadows: false,
        },
        */


        // cube
        /*
        effect: 'cube',
        cubeEffect: {
            slideShadows: true,
        },
        */


        /*
        effect: 'flip',
        filpEffect: {
            slideShadows: true,
        },
        */


        // cards
        /*
        effect: 'cards',
        cardsEffect: {
            
        },
        */


        // creative
        /*
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: ['-100%', 0, 0],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
        */




        // 페이지 네이션 (• • • • •)
        pagination: {
            el: '.swiper-pagination',       // 페이지 네이션이 적용될 요소 (선택자)
            type: 'bullets',            // 'bullets'        : • • • 
                                            // 'fraction'       : (현재번호/전체번호) 
                                            // 'progressbar'    : 진행률(게이지)
                                            // 'custom'         
            clickable: true,                // 페이지 네이션 클릭 가능 여부
        },


        // 네비게이션 화살표
        navigation: {
            nextEl: '.swiper-button-next',   // 다음 화살표가 적용될 요소
            prevEl: '.swiper-button-prev',   // 이전 화살표가 적용될 요소
        },


        // 스크롤바
        scrollbar: {
            el: '.swiper-scrollbar',        // 스크롤바가 적용될 요소
            hide: true,                     // 스크롤바 숨김(직접 움직일 때는 보이고, 그외에는 숨김)
            draggable: true,                // 스크롤바 드래그 가능 여부
            snapOnRelease: true,            // 스크롤바를 놓을 때, 슬라이드 위치 맞춤
        },
    });


})