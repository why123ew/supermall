$(function() {

    $('.login2>a').click(function() {
        var index = $(this).index();
        $('.login1 li').eq(index).show().siblings().hide();

        $(this).addClass('color').siblings().removeClass('color')


    })
    $('.regi main .name input').blur(function() {
        var te = /^[a-zA-Z0-9_-]{4,16}$/;
        if ($(this).val().trim() == 0) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("用户名不能为空 ")

        } else if (!(te.test($(this).val()))) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("用户名不正确")

        }

    })


    $('.regi main .password input').blur(function() {
        // var pass = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if ($(this).val().trim() == 0) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("密码不能为空")

        } else if (!(pass.test($(this).val()))) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("密码格式不正确")

        }
    })
    $('.login main .name input').blur(function() {
        // var te = /^[a-zA-Z0-9_-]{4,16}$/;
        if ($(this).val().trim() == 0) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("用户名不能为空 ")
        } else if (!(te.test($(this).val()))) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("用户名不正确")
        }

    })

    $('.login main .password input').blur(function() {
        // var pass = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if ($(this).val().trim() == 0) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("密码不能为空")
        } else if (!(pass.test($(this).val()))) {

            $(this).siblings('span').addClass('shibai').removeClass('hege').html("密码格式不正确")
        }
    })
    $('.check1 input').change(function() {
        if ($(this).prop('checked') == false) {

            $('.regi main button').attr('disabled', true);
            $('.regi main button').attr('disabled', false).css('background-color', "")

        } else if ($(this).prop('checked') == true) {

            $('.regi main button').attr('disabled', false).css({
                'background-color': "rgb(197, 141, 20)",
                'color': 'white'

            })
        }

    })
    $('.check1 input').change(function() {
        if ($(this).prop('checked') == false) {

            $('.login main button').attr('disabled', true);
            $('.login main button').attr('disabled', false).css('background-color', "")

        } else if ($(this).prop('checked') == true) {

            $('.login main button').attr('disabled', false).css({
                'background-color': "rgb(197, 141, 20)",
                'color': 'white'

            })
        }

    })
    var te = /^[a-zA-Z0-9_-]{4,16}$/;
    var pass = /^[a-zA-Z0-9_-]{4,16}$/;

    function serializeToJosn(from) {
        var result = {};
        var f = from.serializeArray();

        f.forEach(function(item) {
            result[item.name] = item.value;

        })
        return result;
    }
    // 用户注册
    $('#userForm').submit(function() {
        var result = serializeToJosn($(this))
        console.log(result);

        if (result.name.trim().length == 0 || !te.test(result['name'])) {
            alert("用户名格式不正确")
            return false;
        } else if (result.password.trim().length == 0 || !pass.test(result['password'])) {

            alert('密码格式不对')
            return false;
        }

        $.ajax({
            // type: "post",
            // url: "http://localhost:3001/zhuce",
            // data: result,
            success: function(response) {
                // console.log()

                alert('注册成功')
            }
        })


    })

    $('.go').click(function() {
        $('.login1 li').eq(1).show().siblings().hide();
        $('#denglu').addClass('color');
        $('#zhuce').removeClass('color')


    })
    $('.back').click(function() {
        $('.login1 li').eq(0).show().siblings().hide();
        $('#zhuce').addClass('color');
        $('#denglu').removeClass('color')


    })


    $('.denglu').on('click', function() {



        if ($('#userName').val().trim().length == 0 || !te.test($('#userName').val())) {
            alert("用户名格式不正确");
            return false;
        } else if ($('#userPassword').val().trim().length == 0 || !pass.test($('#userPassword').val())) {

            alert('密码格式不对');
            return false;
        }

        $.ajax({
            type: 'post',
            url: '/login1',
            data: {
                name: $('#userName').val(),
                password: $('#userPassword').val()


            },
            success: function(res) {
                console.log(res)
                if (res !== 'admin') {

                    window.location.replace('/res.html')
                    var isLogin = ture;
                } else {
                    window.location.replace('/admin.html')

                }
            }



        })



    })




})