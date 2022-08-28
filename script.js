$(document).ready(function() {
    $('#input').on('change', function() {
        let value = $(this).val();
        $('ul').append(`<li>${value}<i class="fas fa-check"></i></i> <i class="fas  fa-trash"></i></i></li>`);
        $(this).val('');
    });

    $('ul').on('click', '.fa-check', function() {
        $(this).parent('li').toggleClass('checked');
    });

    $('ul').on('click', '.fa-trash', function() {
        $(this).parent('li').fadeOut(500);
    });
});