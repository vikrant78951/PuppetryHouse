/* Sticky Menu */
    var winwidth = $(window).width();
    if(winwidth > 960){
    $('#velcro-header').data('size','big');
    $(window).scroll(function(){
        if($(document).scrollTop() > 0)
        {
            if($('#velcro-header').data('size') == 'big')
            {
                $('#velcro-header').data('size','small');
                $('#velcro-header').stop().animate({height:'75px'},350);
                // $('#velcro-header .logo').stop().animate({marginTop:'-10px'},350);
                // $('.logo').stop().animate({marginTop:'10px'},350);
                $('#velcro-header .menu').stop().animate({top:'0px'},350);
                $('.menu').stop().animate({top:'-5px'},350);
            }
        }
        else
        {
            if($('#velcro-header').data('size') == 'small')
            {
                $('#velcro-header').data('size','big');
                $('#velcro-header').stop().animate({height:'80px'},200);
                // $('#velcro-header .logo').stop().animate({marginTop:'5px'},200);
                // $('.logo').stop().animate({marginTop:'15px'},200);
                $('#velcro-header .menu').stop().animate({top:'0px'},200);
                $('.menu').stop().animate({top:'0px'},200);
            }  
        }
    });
    }
/* Sticky Menu */

/* Scroll to top button */
    $('.scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
    });
/* Scroll to top button */

/* Menu */
    $('#superfish').superfish({
        delay:       100,                              // one second delay on mouseout
        animation:   {opacity:'show',height:'show'},   // fade-in and slide-down animation
        speed:       400,                              // animation speed
        speedOut:    0,                                // out animation speed
    });
/* Menu */

/* Animation */
    $(window).scroll(function() {
        $(".animated-area").each(function() {
            if($(window).height() + $(window).scrollTop() - $(this).offset().top > 0) {
                $(this).trigger("animate-it");
            }
        });
    });
    $(".animated-area").on("animate-it", function() {
        var cf = $(this);
        cf.find(".animated").each(function() {
            $(this).css("-webkit-animation-duration","0.9s");
            $(this).css("-moz-animation-duration","0.9s");
            $(this).css("-ms-animation-duration","0.9s");
            $(this).css("animation-duration","0.9s");
            $(this).css("-webkit-animation-delay",$(this).attr("data-animation-delay"));
            $(this).css("-moz-animation-delay",$(this).attr("data-animation-delay"));
            $(this).css("-ms-animation-delay",$(this).attr("data-animation-delay"));
            $(this).css("animation-delay",$(this).attr("data-animation-delay"));
            $(this).addClass($(this).attr("data-animation"));
        });
    });
/* Animation */

/* Responsive Menu */
var navigation = responsiveNav("#responsive-menu", {
    animate: true,        // Boolean: Use CSS3 transitions, true or false
    transition: 600,      // Integer: Speed of the transition, in milliseconds
    label: "",        // String: Label for the navigation toggle
    customToggle: "",     // Selector: Specify the ID of a custom toggle
    openPos: "relative",  // String: Position of the opened nav, relative or static
    jsClass: "js",        // String: 'JS enabled' class which is added to <html> el
    init: function(){},   // Function: Init callback
    open: function(){},   // Function: Open callback
    close: function(){}   // Function: Close callback
});
/* Responsive Menu */

/* Isotope */
$(window).load(function(){
          var $container = $('.portfolio');
          $container.isotope({
            filter: '*',
            layoutMode : 'sloppyMasonry',
          });
          $('.portfolioFilter a').click(function () {
            $('.portfolioFilter .current').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
              filter: selector,
              animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
              }
            });
            return false;
          });
    });   

   
/* Isotope */

/* Skill */
        $(window).load(function () {
      jQuery(document).ready(function () {
    jQuery('.skill-div').waypoint(function(){
        set_width = jQuery(this).attr('data-skill');
        jQuery(this).stop().animate({'width' : set_width + '%'},1400);
    },{offset: 'bottom-in-view'});             
      });
 });
/* Skill */

/* Flex Slider (Testimonial Customers) */
        $(window).load(function () {

      jQuery(document).ready(function () {
        jQuery('.testi-slider.flexslider').flexslider({
          animation: "fade",
          slideshow: true,
          slideshowSpeed: 10000,
        });
      
        jQuery('.next-slider').click(function () {
          jQuery('.flexslider.pf-carousel').flexslider("next");
        });
      
        jQuery('.prev-slider').click(function () {
          jQuery('.flexslider.pf-carousel').flexslider("prev");
        });
      });
    });
/* Flex Slider (Testimonial Customers) */

/* Tooltip  */
jQuery(function ($) {
    $('.tooltip_s').tooltip()
});
/* Tooltip  */

/* Tabs */
                  jQuery('.shortcode_tabs').each(function (index) {
                    var i = 1;
                    jQuery('.shortcode_tab_item_title').each(function (index) {
                      jQuery(this).addClass('it' + i);
                      jQuery(this).attr('whatopen', 'body' + i);
                      jQuery(this).addClass('head' + i);
                      jQuery(this).parents('.shortcode_tabs').find('.all_heads_cont').append(this);
                      i++;
                    });
                    var i = 1;
                    jQuery('.shortcode_tab_item_body').each(function (index) {
                      jQuery(this).addClass('body' + i);
                      jQuery(this).addClass('it' + i);
                      jQuery(this).parents('.shortcode_tabs').find('.all_body_cont').append(this);
                      i++;
                    });
                  });
                  jQuery('.shortcode_tabs .all_body_cont div:first-child').addClass('active');
                  jQuery('.shortcode_tabs .all_heads_cont div:first-child').addClass('active');
                  
                  jQuery('.shortcode_tab_item_title').click(function () {
                    jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_body').removeClass('active');
                    jQuery(this).parents('.shortcode_tabs').find('.shortcode_tab_item_title').removeClass('active');
                    var whatopen = jQuery(this).attr('data-open');
                    jQuery(this).parents('.shortcode_tabs').find('.' + whatopen).addClass('active');
                    jQuery(this).addClass('active');
                  });
/* Tabs */

/* Counter Number */
(function($) {
    $.fn.countTo = function(options) {
        options = options || {};

        return $(this).each(function() {
            var settings = $.extend({}, $.fn.countTo.defaults, {
                from: $(this).data('from'),
                to: $(this).data('to'),
                speed: $(this).data('speed'),
                refreshInterval: $(this).data('refresh-interval'),
                decimals: $(this).data('decimals')
            }, options);
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
                    increment = (settings.to - settings.from) / loops;
            var self = this,
                    $self = $(this),
                    loopCount = 0,
                    value = settings.from,
                    data = $self.data('countTo') || {};

            $self.data('countTo', data);
            if (data.interval) {
                clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
            render(value);
            function updateTimer() {
                value += increment;
                loopCount++;
                render(value);
                if (typeof(settings.onUpdate) == 'function') {
                    settings.onUpdate.call(self, value);
                }
                if (loopCount >= loops) {
                    $self.removeData('countTo');
                    clearInterval(data.interval);
                    value = settings.to;

                    if (typeof(settings.onComplete) == 'function') {
                        settings.onComplete.call(self, value);
                    }
                }
            }
            function render(value) {
                var formattedValue = settings.formatter.call(self, value, settings);
                $self.html(formattedValue);
            }
        });
    };
    $.fn.countTo.defaults = {
        from: 0, // the number the element should start at
        to: 0, // the number the element should end at
        formatter: formatter, // handler for formatting the value before rendering
        onUpdate: null, // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };
    function formatter(value, settings) {
        return value.toFixed(settings.decimals);
    }
}(jQuery));
    var count = 0;
    var datanumber;

    if ($(window).width() > 479) {
        $('.number-counter').bind('inview', function(event, visible) {
            if (visible === true & count === 0) {
                count++;
                $('.number-counter').each(function() {
                    datanumber = $(this).attr('data-number'),
                            $(this).find('.number-count').delay(6000).countTo({
                        from: 0,
                        to: datanumber,
                        speed: 1500,
                        refreshInterval: 75
                    });
                });
            } else {
            }
        });
    } else {
        $('.number-count').each(function() {
            $(this).html($(this).parent().attr('data-perc'))
        })
    }

/* Counter Number */

/* Portfolio Hover */
    $('.port-hover').each(function() {
        $(this).hoverdir({
            hoverDelay: 5
        });
    });
/* Portfolio Hover */

/* Quotes */
  jQuery('.bxslider').bxSlider({
    mode: 'fade',
    touchEnabled: true,
    oneToOneTouch: true,
    pagerCustom: '#bx-pager',
    nextSelector: '#bx-next',
    prevSelector: '#bx-prev',
    auto: true
  });

/* Quotes */

/* Vegas Slider */
$.vegas('slideshow', {
        backgrounds: [
            {src: '/puppetryhouse/assets/images/slide/slide1.jpg', fade: 2100},
            {src: '/puppetryhouse/assets/images/slide/slide2.jpg', fade: 2100},
            {src: '/puppetryhouse/assets/images/slide/slide3.jpg', fade: 2100},
            {src: '/puppetryhouse/assets/images/slide/slide4.jpg', fade: 2100},
            {src: '/puppetryhouse/assets/images/slide/slide5.jpg', fade: 2100},
        ]
            })('overlay', {});
/* Vegas Slider */
            
/* Promo Text in Vegas Slider */
$(function() {
    function heroInit() {
        var promotext = jQuery('.promotext'),
                ww = jQuery(window).width(),
                wh = jQuery(window).height(),
                heroHeight = wh;

        promotext.css({
            height: heroHeight + "px",
        });

        var heroContent = jQuery('.promotext .promo-slide'),
                contentHeight = heroContent.height(),
                parentHeight = promotext.height(),
                topMargin = (parentHeight - contentHeight) / 2;

        heroContent.css({
            "margin-top": topMargin + "px"
        });
    }

    jQuery(window).on("resize", heroInit);
    jQuery(document).on("ready", heroInit);

    var current = 1;
    var height = jQuery('.promo').height();
    var numberDivs = jQuery('.promo').children().length;
    var first = jQuery('.promo h1:nth-child(1)');
    setInterval(function() {
        var number = current * -height;
        first.css('margin-top', number + 'px');
        if (current === numberDivs) {
            first.css('margin-top', '0px');
            current = 1;
        } else
            current++;
    }, 3000);
});
   $(document).ready(function(){
      $(".promo-text .rotate").textrotator({
          animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
          speed: 3500
      });
    });
/* Promo Text in Vegas Slider */

/* Preloader */
var images = {

 'Background':     '/puppetryhouse/assets/img/loader.png'
 };
Royal_Preloader.config({
        mode:           'text', // 'number', "text" or "logo"
        text:           'PuppetryHouse - The house of Puppet Master',
        images:         images,
        timeout:        10,
        showInfo:       false,
        showPercentage: false,
        opacity:        1,
        background:     ['#fff'], // ['#000000', '#FF0000', '#0097AA', '#F29500', '#C23916', '#94C849', '#6FA014', '#91009B'],
    });
$(document).ready(function(){

   setTimeout(function(){

       $(".hide-2sec").show();
       $(".promo-btn").show();

   }, 2000);

});
/* Preloader */








