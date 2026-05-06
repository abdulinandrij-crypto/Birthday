$(document).ready(function() {
    // 1. Світло
    $('#btn_light').click(function() {
        $('body').addClass('bg-peach');
        $('#b_yellow').addClass('glow-yellow');
        $('#b_red').addClass('glow-red');
        $('#b_blue').addClass('glow-blue');
        $('#b_green').addClass('glow-green');
        $('#b_pink').addClass('glow-pink');
        $('#b_orange').addClass('glow-orange');
        
        $(this).fadeOut(300, function() { $('#btn_music').fadeIn(500); });
    });

    // 2. Музика
    $('#btn_music').click(function() {
        $('.song')[0].play();
        $(this).fadeOut(300, function() { $('#btn_decor').fadeIn(500); });
    });

    // 3. Банер
    $('#btn_decor').click(function() {
        $('#mobile_banner').fadeIn(1000);
        $(this).fadeOut(300, function() { $('#btn_cake').fadeIn(500); });
    });

    // 4. Торт
    $('#btn_cake').click(function() {
        $('#mobile_cake').fadeIn(1000);
        $(this).fadeOut(300, function() { $('#btn_msg').fadeIn(500); });
    });

    // 5. Текст + запалювання свічки
    $('#btn_msg').click(function() {
        $('.fuego').fadeIn(500); // Запалили свічку
        $('#mobile_message').fadeIn(1000);
        $(this).fadeOut(300, function() { $('#btn_photos').fadeIn(500); });
    });

    // 6. Лента фотографій
    $('#btn_photos').click(function() {
        $('#mobile_photos').css('display', 'flex').hide().fadeIn(1500);
        $(this).fadeOut(300);
    });
});
