$(function(){

    //사이드 로그인 클릭하면 꺼내거나 넣기
    let sideLogin = 0
    $('.loginToggleS').on('click', function(){
        sideLogin++
        if( sideLogin%2 == 1){
        $('#sideLogin').css({'left':'0px'})
        $('.loginToggleS img').css({'transform':'translateX(-50%) rotateZ(-180deg)'})
        $('.loginToggleS').css({'opacity':'1'})
        }else{
        $('#sideLogin').css({'left':'-300px'})
        $('.loginToggleS img').css({'transform':'translateX(-50%)'})
        $('.loginToggleS').css({'opacity':'0.5'})
        };
    })
    




    //네비게이션
    let sldTitle = $('.sldTitle')
    let sldTitleCount = sldTitle.length
    for(let i = 0 ; i < sldTitleCount ; i++){
        let dot = "<a href='#' class='dot'></a>"
        $(".dots-box").append(dot)



    }

    // 첫번째 이미지에 액티브 클레스 넣고 시작하기
    $(function(){$('.slideImg').eq(nowIdx).addClass('active')})
    //같은 위치의 dot에 엑티브 넣기
    $(function(){$('.dot:first-child').addClass('active')})

    //슬라이드 타이틀 위치 조정 (맨 뒤의 요소와 맨 뒤에서 두번째 요소가 언제나 타이틀 슬라이드 순서상 1, 2번 위치에 와있도록)
    let sldTitlelength = sldTitle.length
    let slideList = $('.slideList')
    $(function(){
        $('.sldTitle').last().prependTo(slideList)
        $('.sldTitle').eq(sldTitlelength-1).prependTo(slideList)
    })
    
    // 슬라이드: 5초마다 첫번째타이틀이 맨 뒤로 이동하는 것을 반복. 그러나 슬라이드에 호버하면 멈춤
    const intervalTime = 2000
    let slideArea = $('.slideArea')
    let nowIdx = 0
    let index = 1
    //5초마다 첫번째 슬라이드 이미지가 맨 뒤로 이동하게 끔.
    function move(){
        $('.slideImg').eq(nowIdx).appendTo(slideArea)
        $('.slideImg').eq(nowIdx).addClass('active')
        $('.slideImg').eq(nowIdx-1).removeClass('active')
        $('.sldTitle').eq(nowIdx).appendTo(slideList)

        $(".dots-box .dot").removeClass('active')
        $(".dots-box .dot").eq(index++).addClass('active')
        let max = $(".dots-box .dot").length;
        if( index == max )
            index = 0
    }

    $(".sldBtn .prev").on('click', function(){
        $('.slideImg').eq(-1).prependTo(slideArea)
    })
    
    
    //그 움직임을 함수  startSlide() 라고 정해줌. 그리고 그 움직임의 이름은 slideMove임.
    let slideMove
    // 슬라이드 시작하는 함수
    function startSlide(){slideMove = setInterval(move, intervalTime)}
    //슬라이드 멈추는 함수
    function stopSlide(){clearInterval(slideMove);}
    //마우스 호버,리브 했을때 멈추고 시작하는걸 설정해줌.
        $('.slide').hover(stopSlide,startSlide)
    //창 켜졌을때 바로 시작할 수 있도록 하게 해줌.
    startSlide()

    
    
    












    //신규게임 자세히 보기 열고 닫기
    $('.goToHomepage').click(function(){
        $('.newGameMore').css({'z-index': '250'})
        $('.ng1More').css({'display': 'block'})
    })

    $('.ng1_closeBtn').click(function(){
        $('.newGameMore').css({'z-index': ''})
        $('.ng1More').css({'display': 'none'})
    })




})
