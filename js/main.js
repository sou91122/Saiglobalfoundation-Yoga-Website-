(function ($) {
	"use strict";
    jQuery(document).ready(function($){
        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $('[data-toggle="tooltip"]').tooltip();
        // sticky header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1) {
                $('#header-area').addClass("sticky");
            } else {
                $('#header-area').removeClass("sticky");
            }
        });
        // sticky header
        // Activities Carousel starts //
        $("#activities-carousel").owlCarousel({
            dots:false,
            nav:true,
            items:2,
            touchDrag: true,
            smartSpeed:1000,
            autoplay:true,
            loop:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            },
            navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
        });
        // Activities Carousel ends //
    });
}(jQuery));	