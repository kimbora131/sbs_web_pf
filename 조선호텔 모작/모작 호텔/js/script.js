

$(function() {

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


})