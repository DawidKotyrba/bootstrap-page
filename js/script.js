$('.smooth-move, .nav-link, .navbar-brand, .new-button').click(function () {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(sectionTo).offset().top
    }, 1000);
});


$('input[type=submit]', 'a').click(function (e) {
    e.preventDefault();
});