$(function() {
    $.ajax({

        type: 'get',
        url: '/res1',
        success: function(response) {
            var html = template('tpl', { response })
            $('tbody').append(html)

        }

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