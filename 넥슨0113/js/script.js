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
    $(".dot:first-child").addClass('active')

    
    // 5초마다 첫번째타이틀이 맨 뒤로 이동하는 것을 반복. 그러나 슬라이드에 호버하면 멈춤
    const intervalTime = 2000
    let slide = $('.slide')
    let slideList = $('.slideList')

    function autoTitleSlide(){
        autoTitle = setInterval(function(){
            $('.sldTitle:first-child').appendTo(slideList)
        }, intervalTime)}

        autoTitleSlide()



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
