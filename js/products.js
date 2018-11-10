$(function move() {
    $('#pictrue1 .col-md-3').stop().animate({}, function () {
        $('#pictrue1 .col-md-3').css({
            transform: 'scale(1)',
            transition: '.5s linear'
        })
    })
    // 第二个
    var active = true;
    $('#con_t li').eq(1).on('click', function () {
        move()
        if (active) {

            $('.wu,.pizze,.pasta,.drink,.ham').stop().animate({}, function () {
                $(this).css({
                    transform: 'scale(0)',
                    transition: '.5s linear',
                })
            })
            $('.ginger').eq(1).animate({
                transform: 'scale(1)',
                left: '-25%',
                top: '-622px',

                transition: '.5s linear'
            })
            $('.ginger').eq(0).animate({
                left: '-25%',
                transform: 'scale(1)',
                transition: '.5s linear'
            })
            active = false;
        }
    })
    $('#con_t li').eq(1).siblings().click(function () {
        active = true;
        $('.ginger').eq(1).css({
            left: '0',
            top: '0'
        })
        $('.ginger').eq(0).css({
            left: '0',
            left:'0'
        })

    })
    // three
    var active1 = true;

    $('#con_t li').eq(2).on('click', function () {
        if (active1) {
            move()
            $('.wu,.ginger,.pasta,.drink,.ham').stop().animate({}, function () {
                $(this).css({
                    transform: 'scale(0)',
                    transition: '.5s linear',
                })
            })
            $('.pizze').eq(1).animate({
                transform: 'scale(1)',
                left: '-25%',
                top: '-312px',

                transition: '.5s linear'
            })
            $('.pizze').eq(0).animate({
                left: '-50%',
                transform: 'scale(1)',
                transition: '.5s linear'
            })
            active1 = false;
        }
    })
    $('#con_t li').eq(1).siblings().click(function () {
        active1 = true;
        $('.pizze').eq(1).css({
            left: '0',
            top: '0'
        })
        $('.pizze').eq(0).css({
            left: '0',
            right:'0'
        })
    })
    // four
    var active2 = true;

    $('#con_t li').eq(3).on('click', function () {
        if (active2) {
            move()
            $('.wu,.ginger,.pizze,.drink,.ham').stop().animate({}, function () {
                $(this).css({
                    transform: 'scale(0)',
                    transition: '.5s linear',
                })
            })
            $('.pasta').eq(1).animate({
                transform: 'scale(1)',
                left: '-50%',
                top: '-312px',

                transition: '.5s linear'
            })
            $('.pasta').eq(2).animate({
                transform: 'scale(1)',
                left: '-25%',
                top: '-623px',

                transition: '.5s linear'
            })
            $('.pasta').eq(0).animate({
                // display:'none',
                left: '-75%',
                transform: 'scale(1)',
                transition: '.5s linear'
            })
            active2 = false;
        }
    })
    $('#con_t li').eq(3).siblings().click(function () {
        active2 = true;
        $('.pasta').eq(1).css({
            left: '0',
            top: '0'
        })
        $('.pasta').eq(2).css({
            left: '0',
            top: '0'
        })
        $('.pasta').eq(0).css({
            left: '0',
            top:'0'
        })
    })

    // five
    var active3 = true;
    $('#con_t li').eq(4).on('click', function () {
        move()
        if (active3) {

            $('.wu,.pizze,.pasta,.ginger,.ham').stop().animate({}, function () {
                $(this).css({
                    transform: 'scale(0)',
                    transition: '.5s linear',
                })
            })
            $('.drink').eq(1).animate({
                transform: 'scale(1)',
                left: '0',
                top: '-622px',

                transition: '.5s linear'
            })
            $('.drink').eq(0).animate({
                left: '0%',
                top:'-312px',
                transform: 'scale(1)',
                transition: '.5s linear'
            })
            active3 = false;
        }
    })
    $('#con_t li').eq(4).siblings().click(function () {
        active3 = true;
        $('.drink').eq(1).css({
            left: '0',
            top: '0'
        })
        $('.drink').eq(0).css({
            left: '0',
            top: '0'
        })

    })
// six
    var active4 = true;
    $('#con_t li').eq(5).on('click', function () {
        move()
        if (active4) {

            $('.wu,.pizze,.pasta,.ginger,.drink').stop().animate({}, function () {
                $(this).css({
                    transform: 'scale(0)',
                    transition: '.5s linear',
                })
            })
            $('.ham').eq(1).animate({
                transform: 'scale(1)',
                left: '0',
                top: '-622px',

                transition: '.5s linear'
            })
            $('.ham').eq(0).animate({
                left: '0%',
                top:'-312px',
                transform: 'scale(1)',
                transition: '.5s linear'
            })
            active4 = false;
        }
    })
    $('#con_t li').eq(5).siblings().click(function () {
        active4 = true;
        $('.ham').eq(1).css({
            left: '0',
            top: '0'
        })
        $('.ham').eq(0).css({
            left: '0',
            top: '0'
        })

    })
    // one
    $('#con_t li').eq(0).on('click', function () {
        move()
    })
})


