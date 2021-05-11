$(function() {

    $('#sub').on('click', function() {


        if ($("input[name='sex']:checked").length === 0) {
            alert('请完成选项1')
            return false
        }
        if ($("input[name='age']:checked").length === 0) {
            alert('请完成选项2')
            return false
        }
        if ($("input[name='level']:checked").length === 0) {
            alert('请完成选项3')
            return false
        }

        if ($("input[name='is']:checked").length === 0) {
            alert('请完成选项4')
            return false
        }
        if ($(".five input[type='checkbox']:checked").length === 0) {
            alert('请完成选项5')
            return false
        }
        if ($(".six input[type='checkbox']:checked").length === 0) {
            alert('请完成选项6')
            return false
        }
        if ($("input[name='app1']:checked").length === 0) {
            alert('请完成选项7')
            return false
        }
        if ($("input[name='good']:checked").length === 0) {
            alert('请完成选项8')
            return false
        }
        if ($(".nine input").val().trim().length === 0) {
            alert('选项9不能为空')
            return false
        }
        var formData = new FormData($('#dataForm')[0]);
        $.ajax({

            type: 'post',
            url: '/data',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                // console.log(responses)

                window.location.replace('/sus.html')
            }



        })


    });

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