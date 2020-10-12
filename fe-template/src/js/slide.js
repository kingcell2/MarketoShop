$(function () {
    $(".slider .owl-carousel").owlCarousel({
        items: 1,
        dots: true,
        nav: true,
        navText: [
            "<i style='color: #065fbd' class='fas fa-arrow-left'></i>",
            "<i style='color: #065fbd' class='fas fa-arrow-right'></i>"
        ],
    });
});
$(function () {
    $(".best-deal .content .owl-carousel").owlCarousel({
        items: 3,
    });
});
$(function () {
    $(".computer .owl-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: [
            "<i style='color: #53a1f8' class='fas fa-arrow-left'></i>",
            "<i style='color: #53a1f8;' class='fas fa-arrow-right'></i>"
        ],
        animateOut: "fadeOut",

    });
});
$(function () {
    $(".recently .content .owl-carousel").owlCarousel({
        items: 6,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
    });
});
$(function () {
    $(".group-products .owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        //autoplay: true,
        //autoplayTimeout: 5000,
        navText: [
            "<i style= 'color: #777777' class='fas fa-chevron-left'></i>",
            "<i style= 'color: #777777' class='fas fa-chevron-right'></i>"
        ],
        // animateOut: "fadeOut",
        // animateOut: "fadeIn",
    });
});
$(function () {
    $(".women .owl-carousel").owlCarousel({
        items: 5,
        dots: false,
        nav: true,
        navText: [
            "<i style='color: #333333' class='fas fa-chevron-left'></i>",
            "<i style='color: #333333' class='fas fa-chevron-right'></i>"
        ],
        loop: true,
    });
});