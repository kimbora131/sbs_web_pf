

$(function() {

    //햄버거 누르면 메뉴 나오는 이벤트
    let openMenu = 'off'
    $('.open').on('click', function(){
        if( openMenu == 'off') {
            $('header .allMenu').css({ 'display' : 'block' })
            $('header').css({ 'background' : '#fff' })
            $('header a').css({ 'color' : '#000' })
            $('.open img').css({'transform':'translateX(-50%)'},{'transition':'all 0.3s linear'})

            openMenu = 'on'
        } else {
            $('header .allMenu').css({ 'display' : 'none' })
            $('header').css({ 'background' : 'rgba(0,0,0,0)' })
            $('header a').css({ 'color' : '#fff' })
            $('.open img').css({'transform':'translateX(0%)'},{'transition':'all 0.3s linear'})
            openMenu = 'off'
        }
    })

    // ko > en 클릭 이벤트
    $('a.ko').on('click', function() {
        $('a.ko').toggleClass('on')
        $('a.en').toggleClass('on')
    })



    // reservation 클릭 이벤트 
    let reListOn = 'off'
    $('.reList').on('click', function(){

        if( reListOn == 'off') {
            $('.reList ul').css({ 'display' : 'block' })
            reListOn = 'on'
        } else {
            $('.reList ul').css({ 'display' : 'none' })
            reListOn = 'off'
        }
    })


    // 스크롤 감지
    $(window).bind('mousewheel', function() {

        // 페이지 순서번호
        const page = $('.section.active').index() + 1

        // 2,3,5 페이지 일 때 
        if( page == 2 || page == 3 || page == 6 ) {
            $('header').addClass('on')
        } else {
            $('header').removeClass('on')
        }

    })

    
    // 두번째 포스트 슬라이드 버튼 누르면 움직이는거
    let count = 0;
    $('.arrowR').on('click', function(){
        count++
        if((count % 3) <= 2){
            $('.postInner').css({'left':`-${(count%3)*1155}px`})
        }
        if ((count%2) == 0) {
            $('.arrowR').css({'display':'none'})
            $('.arrowL').css({'display':'block'})
        }
    });
    $('.arrowL').on('click', function(){
        count++
        if((count % 3) <= 2){
            $('.postInner').css({'left':`-${(count%3)*1155}px`})
        }
        if ((count%2) == 0) {
            $('.arrowL').css({'display':'none'})
            $('.arrowR').css({'display':'block'})
        }
    });

    })