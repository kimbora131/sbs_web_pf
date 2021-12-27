$(function(){
    // 스크롤 방향 감지
    let prev = $(this).scrollTop()  
    let move = 80
    let leftMin = -800
    let leftMax = 1200



    $(window).on('scroll', function(){
        let now = $(this).scrollTop()                   //현재 스크롤 위치
        // let left = $('.scroll-title').css('left')       //단위포함 left값



        let titleOffset = $('.scroll-title').offset()
        console.log('now:'+now);
        console.log('left:'+titleOffset.left);
        console.log('titleOffset:' + JSON.stringify(titleOffset));

        //scroll-title 인터렉션
        //-1400px < left < 1400px
        if( now > prev && titleOffset.left > leftMin && now < 1000){
            console.log('아래');
            $('.scroll-title').css('left',titleOffset.left-=move)


        }else if( now < prev && titleOffset.left < leftMax && now < 1000){
            console.log('위');
            $('.scroll-title').css('left',titleOffset.left+=move)
        }

        //스크롤 방향에 따른 헤더 슬라이드
        if (now > prev){
            $('header').slideUp()
        } else if (now < prev){
            $('header').slideDown()
        }

        //따라다니는 플로팅 버튼
        $('.floating').stop().animate({'bottom': -now + 15}, 300)
   
        


        // 이전 위치 갱신
        prev = now


    })

    $('.floating').on('click',function(){
        //스크롤 맨 위로 이동
        $('html').animate({'scroll-top': 0}, 1000)
    })

})