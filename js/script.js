
/* ハンバーガーメニュー */
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

/* トップ画像のスライダー */
$(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
});

/* FAQの回答部分 */
$(function(){
    $('.js-accordion').on('click',function(){
        $(this).next().slideToggle();
    });
});

/* 各sectionのフェードイン */
$(function () {
    $(window).scroll(function () {
        var wHeight = $(window).height();
        var scrollAmount = $(window).scrollTop();
        $('.fadein').each(function () {
            var targetPosition = $(this).offset().top;
            if(scrollAmount > targetPosition - wHeight + 10) {
                $(this).addClass("scrollin");
            }
        });
    });
});
