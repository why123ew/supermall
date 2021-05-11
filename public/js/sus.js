$(function() {
    $('.back').on('click', function() {

        window.location.replace('/index.html')

    })

    $('.go').on('click', function() {

        window.location.replace('/res.html')

    })




    $('#tui').on('click', function() {

        $.ajax({

            type: 'get',
            url: '/logout',
            success: function(response) {

                window.location.replace('/login.html')

            }

        })

    })



})