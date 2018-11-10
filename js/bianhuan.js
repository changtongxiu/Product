$(function () {
    // $('.bianhuan').hide()
    $('#pictrue1 .col-md-3').mouseenter(function () {
        var index = $(this).index();
        $('.hover_xiao').click(function () {
            $('.bianhuan img').attr('src','images/product'+index+'_big.jpg')
                .parents().fadeIn('slow')
                .css({
                opacity: '1',
                transaction: '.3s',
                zIndex:'1'
            })
        })
        $('.bianhuan').click(function (e) {
            e.stopPropagation()
            // e.stopPropagation();
            $('.bianhuan').css({
                display:'none'
            })
        })
        $('body').click(function () {
            // $('.bianhuan').trigger('click')
        })
    })
})


//     $('.hover_xiao').on('click',function () {
//         var index = $(this).index();
//         console.log(index)
//         console.log ($('.hover_xiao'))
//     })
// })
// $(function () {
//     $('.hover_xiao').click(function (e) {
//         e.stopPropagation();
//         $('.bianhuan').css({
//             opacity: '1',
//             transaction: '.3s',
//             zIndex:'1'
//         })
//     })

// })