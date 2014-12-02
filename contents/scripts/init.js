// Foundation
// ----------
$(document).foundation();

$(function() {

    // ### sticky footer fix
    //
    // via https://gist.github.com/spilliams/2697774
    var stickyFooter = function() {
        $(".footer, .push").height($(".footer .row").height()+"px");
        $("#wrapper").css({'margin-bottom':(-1*$(".footer .row").height())+"px"});
    }
    window.onresize = stickyFooter;

    
    // ### dropdown hide when content inside is clicked
    $(document).on('click', '.f-dropdown', function(){
        if ($(this).hasClass('open')) {
            $(this).trigger('mouseenter').trigger('mouseleave');
        }                    
    });
    
});


// // Processing
// // -----------
// // 
// // When window is resized, adjust & reload the processing sketch
// $(function() {

//     var resizePJS = function() {
//         var pjs = Processing.getInstanceById('static-canvas');
//         if (pjs) {
//             pjs.resizeSketch(window.innerWidth, window.innerHeight);
//         }
//     };
    
//     if (typeof(window.orientation) === "undefined" ) {
//         $(window).resize(resizePJS);
//     }
//     // iOS Safari is firing resize on scroll, so disable redraw/size adjust...
//     else {
//         //$(window).on("onorientationchange", resizePJS);
//     }

// })

// Mixitup jQuery plugin
// ---------------------
var applyFiltering = function() {
    // initialize project filtering
    $('.listing').mixitup({
        effects: ['fade', 'blur', 'rotateX'],//,'scale'],
        easing: 'snap',
        layoutMode: 'list',
        
        listEffects: null,
        targetDisplayGrid: 'inline-block',
        targetDisplayList: 'block',
        gridClass: '',
        listClass: '',
        
        transitionSpeed: 1000
    });
    console.log("initialized");
};

$(function() {
    applyFiltering();
});



// PJAX
// ------

$(function() {
    // initialize pjax
    if ($.support.pjax) {
        var container = $("#main");

        $(document).on('click', 'a', function(evt) {
            if ( $(this).attr("href").toLowerCase().indexOf("http") === 0 
                || $(this).data("pjax") === "no") {
                return true;
            }
            $("#main").fadeOut(250, function() {
                $.pjax.click(evt, {
                    container: container,
                    "fragment": "#main",
                    "timeout": 3000
                });
            });
            return false;

        });

        $(document).on('pjax:complete', function(evt, xhr, status, data) {
            $("#main .slideshow-wrapper").on("orbit:ready", function(evt) {
                var orbit = this;
                
                setTimeout(function() { 
                    $(orbit).find('[data-orbit-slide="1"]').eq(0).click();
                    //orbit.compute_dimensions();
                }, 350);
            });

            console.log(data);
            if (data.url.match(/\/portfolio\/$/)) {
                $("body").attr("class", "portfolio");
            }
            else if (data.url.match(/\/portfolio\/.+$/)) {
                $("body").attr("class", "project");
            }
            else {
                $("body").attr("class", "home");   
            }

            // console.log("BODY CLASS:" + document.getElementById("main").getAttribute("data-body-class"));
            //$("#main").attr('data-body-class'));

            $("#main").fadeIn(250, function() { });
            $("#main .slideshow-wrapper").foundation("orbit");

            // re-enable mixitup plugin
            applyFiltering();

            //google analytics call on page change
            if( window._gaq ) {
                _gaq.push(['_trackPageview', window.location.href]);
            }

        });

    }
});
