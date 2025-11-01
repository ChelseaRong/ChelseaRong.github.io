$(".nav-link").click(function() {
    // $('.hidden').hide();
    $('.hidden').addClass('fully-hidden');
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
    $(this.getAttribute('href')).removeClass('fully-hidden');
    $(this.getAttribute('href')).fadeIn(650);
    return false;
});
