/* =======================================
                Preloader
======================================== */

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(150).fadeOut();
});

$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
          responsive: {
            // break point from 0 to up
            0: {
                items: 1
            },
            480: {
                items:2
            }
        }
    });
});

/* =======================================
                Progress bar
======================================== */
$(function () {

    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);
        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/* =======================================
                Responsive Tabs
======================================== */
$(function () {
    $("#types-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/* =======================================
                Isotops
======================================== */
$(window).on('load', function () {

    //Initialize isotop
    $("#isotope-container").isotope({});

    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        //get filter value
        var filterValue = $(this).attr('data-filter');

        //filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});


/* =======================================
               Magnifier
======================================== */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


/* =======================================
               Testimonials
======================================== */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});
/* =======================================
               Stats
======================================== */
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});

/* =======================================
               Clients
======================================== */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        loop: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // break point from 0 to up
            0: {
                items: 2
            },
            480: {
                items:3
            },
            768: {
                items: 6
            }
        }
    });
});
/* =======================================
               Google Map
======================================== */
$(window).on('load', function () {
    // Map Variables
    var addressString = 'Shahdara Lahore';
    var myLatlng = {
        lat: 31.561920,
        lng: 74.348083
    };

    // 1. Render Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: myLatlng
    });

    // Add Marker

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    });

    //Add Info Window
    var infowindow = new google.maps.infoWindow({
        content: addressString
    });

    // Show infowindow when user click on marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
});

/* =======================================
               Navigation
======================================== */
/*  white Navigation */
$(function () {

    // show hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        //Show hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //Show white nav
            $("nav").addClass("white-nav-top");

            // Show back to top button
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");

            // hide back to top button
            $("#back-to-top").fadeOut();
        }
    }
});


/* Smooth scrolling */
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //get section id like #about, #services, #team ect.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 50
        }, 1250, "easeInOutExpo");
    });
});
/* =======================================
               Mobile Menu
======================================== */
$(function() {
    // Show mobile navigation
    $("#mobile-nav-open-btn").click(function(){
       $("#mobile-nav").css("height", "100%"); 
    });
    
    // hide mobile navigation
    $("#mobile-nav-close-btn, #mobile-nav a").click(function(){
       $("#mobile-nav").css("height", "0%"); 
    });
    
});

/* =======================================
                Animation
======================================== */
$(function() {
    new WOW().init();
});

$(window).on('load', function () {
   $("#home-heading-1").addClass("animate__animated animate__fadeInLeft"); 
   $("#home-heading-2").addClass("animated fadeInLeft");
   $("#home-text").addClass("animated zoomIn");
});

























