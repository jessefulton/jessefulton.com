
$(document).ready(function () {
	var slideshow = null;
	
	$('#main-media-link').lightBox({
    	overlayBgColor: '#000',
    	overlayOpacity: 0.9,
    	imageBlank: '/scripts/jquery/plugins/jquery.lightbox-0.5/images/lightbox-blank.gif',
    	imageLoading: '/scripts/jquery/plugins/jquery.lightbox-0.5/images/lightbox-ico-loading.gif',
    	imageBtnClose: '/scripts/jquery/plugins/jquery.lightbox-0.5/images/lightbox-btn-close.gif',
    	imageBtnPrev: '/scripts/jquery/plugins/jquery.lightbox-0.5/images/lightbox-btn-prev.gif',
    	imageBtnNext: '/scripts/jquery/plugins/jquery.lightbox-0.5/images/lightbox-btn-next.gif',
    	containerResizeSpeed: 500
    });
	
	
	$('#main-media-link, #click-to-hover').hover(
		function() {$("#click-to-hover").show();}
		, function() {$("#click-to-hover").hide();}
	);

	try {
	   	$(".tiny-thumbs li:first img").closest("li").addClass("active");
	}
	catch (e) {}
	
	if ($(".tiny-thumbs li img").size() > 1 && $(".tiny-thumbs li img.type-swf").size() == 0) {
    	
    	if (false) { //$.browser.msie && (parseInt($.browser.version) == 6)) {
    	
    	}
		else {    	
        	slideshow = window.setInterval(function() {
        		if ($(".tiny-thumbs li.active").next().size() == 1) {
        			$(".tiny-thumbs li.active + li img").click();
        		}
        		else { 
        			$(".tiny-thumbs li:first img").click();
        		}
        	}, 5000);
        }
	}
	

	$(".tiny-thumbs li img.type-image").each(function() {
		var pimg = new Image();
		pimg.src = $(this).attr("src").replace("_t.", "_m.");
	});
	
	$("#click-to-hover").click(function(){$("#main-media-link").click()});
	
    $(".tiny-thumbs li a, #main-media-link, #click-to-hover").click(function(event) {
    	if (slideshow && (event.button != undefined)) {
    		slideshow = window.clearInterval(slideshow);
    	}
    	return false;
    });
    
    $(".tiny-thumbs li a").click(function() {
    	$(".tiny-thumbs li").removeClass("active");
    	$(this).closest("li").addClass("active");
    
    	if ($(this).hasClass("type-image")) {
			var newSrc = $(this).attr("data-med-src"); // $(this).attr("src").replace("_t.", "_m.");
			var largeSrc = $(this).attr("data-large-src") || newSrc.replace("_m.", "_l.");
			var w = $(this).attr("data-med-width"),
				h = $(this).attr("data-med-height");


			$('#main-media-link').attr("href", largeSrc);
			
			$("#media-space img").fadeOut(500, function() {
				console.log(w + ", " + h);
				$("#media-space img").attr({
					"src": newSrc,
					"width": parseInt(w),
					"height": parseInt(h)
				});
				$("#media-space img").fadeIn(500);
			});	
		}
		else {
			//...
		}
    });
    
    try {
    	$('#main-media-link').attr("href", $("#media-space img").attr("src").replace("_m.", "_l."));
    }
    catch(e) {}
    
});