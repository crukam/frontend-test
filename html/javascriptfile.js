window.requestAnimFrame = (function(){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

var width = screen.width,
    height = screen.height,
    checkScreenSize = function () {
        if (screen.width !== width || screen.height !== height) {
            width = screen.width;
            height = screen.height;
            $(window).trigger('resolutionchange');
        }
    };

(function loop(){
  requestAnimFrame(loop);
  checkScreenSize();
})();
function mobileRender(){
	$('#menulabel').removeClass().addClass('menuactive')
	$('#search').removeClass().addClass('search-collapsed');
	$('#search').attr('placeholder',' ');
	$('#weblogo').css({'marginLeft':'0%','height':'5%'});
	$('.topnavigation').css({'height':'100px'});
	$('#togglebutton').css({'backgroundColor':'#ff7f27'});
	$('#menulabel').css({'fontSize':'large','fontWeight':'bold'});
	$('.contact').css({'margin':'0px 0px 0px 0px','max-width': '100%','height': 'auto','border-bottom':'1px solid black'});
	$('.info').css({'margin':'0px 0px 0px 0px','max-width': '100%','height': 'auto','border-bottom':'1px solid black'})
	
}

function desktopRender(){
	 $('#search').removeClass().addClass('search-input');
	 $('#search').attr('placeholder','Search entire store here... ');
	 $('#menulabel').removeClass().addClass('disabledmenulabel'); 
	 $('.contact').css({'border':'none'});
	 $('.info').css({'border':'none'});
	
}
$(document).ready(function(){
	(window.width<768)? mobileRender():desktopRender();
});

$(window).bind('resolutionchange', function(){
    
	(window.width<768)? mobileRender():desktopRender();
		
});