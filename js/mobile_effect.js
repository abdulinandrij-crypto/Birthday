$(document).ready(function(){
    $('#turn_on').click(function(){
        $('body').css('background-color', '#3D3231');
        $('.bulb').addClass('bulb-glow-yellow'); // Додай класи для всіх кольорів
        $(this).fadeOut().promise().done(function(){
            $('#play').fadeIn();
        });
    });

    $('#play').click(function(){
        $('.song')[0].play();
        $(this).fadeOut().promise().done(function(){
            $('#show_all').fadeIn();
        });
    });

    $('#show_all').click(function(){
        $(this).fadeOut();
        // Послідовна поява
        $('.bannar').fadeIn(1000).promise().done(function(){
            $('.cake').fadeIn(1000).promise().done(function(){
                $('.message').fadeIn(1000).promise().done(function(){
                    $('.album-photo').each(function(i) {
                        $(this).delay(1000 * i).fadeIn(1000);
                    });
                });
            });
        });
    });
});