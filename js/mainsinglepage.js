$(document).ready(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    $('#main-menu').onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollThreshold: 0.5,
        scrollSpeed: 750,
        filter: "",
        easing: "swing"
    });

    $('ul.navbar-nav li a').click(function (e) {
        $('ul.navbar-nav li.active').removeClass('active')
        $(this).parent('li').addClass('active')
    })
});
