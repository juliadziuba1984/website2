var map_instances = [];
/*-------------OLD Browser Panel---------------------------------------*/
	/*Get browser version*/
	function get_browser(){
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
		if(/trident/i.test(M[1])){
			tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
			return 'IE '+(tem[1]||'');
			}   
		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR\/(\d+)/)
			if(tem!=null)   {return 'Opera '+tem[1];}
			}   
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
		return M[0];
    }

	function get_browser_version(){
		var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];                                                                                                                         
		if(/trident/i.test(M[1])){
			tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
			return 'IE '+(tem[1]||'');
			}
		if(M[1]==='Chrome'){
			tem=ua.match(/\bOPR\/(\d+)/)
			if(tem!=null)   {return 'Opera '+tem[1];}
			}   
		M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
		if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
		return M[1];
    }
	
	
	var browser=get_browser();
	var browser_version=get_browser_version();
/*-------------End OLD Browser Panel---------------------------------------*/	



/*-------------End OLD Browser Panel---------------------------------------*/		

/*-------------video player*/
function InitPlayer(){
	$('.js_videoplayer').each(function() {
			var the_player_wrapper = $(this);
			var the_player = $('video', the_player_wrapper);
			
	
			
			the_player.mediaelementplayer({
				alwaysShowControls: true,
				startVolume: 1,
				features: ['playpause','progress', 'duration','volume','fullscreen'],
				success: function(mediaElement, domObject) {
				
					
					$('.play').on('click', function() {
						 mediaElement.play();
					   });
				}
			});
		});
	$('.mejs-time-current').css('width', '0px');
	
}
/*-------------end video player*/






/*-------------------popup init-------------------*/
function InitPopup(popup){
	popup = $(popup);
	var cls = popup.attr('data-popup');

	$('.custom-popup.'+cls).fadeIn('300');
	$('.custom-popup.'+cls).prev('.custom-overlay').fadeIn('300');	

	if(cls == 'js_video_popup') {
		var video_target = popup.attr('href');
		$('.custom-popup.'+cls).find('video').attr('src', video_target);
		//$('.page').addClass('blur');
		InitPlayer();
		
	}
	
	if(cls==='js_photo_gallery_popup'){
		
	}	
		
}
/*-------------------end popup init-------------------*/


/*-------------ALIGN POPUPS-------------------------*/
function AlignPopup(){
	$('.custom-popup').each(function(){
		if($(this).outerWidth() > $(window).width()-80 && $(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else if($(this).outerHeight()+80 > $(window).height()) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': ($(window).width()-$(this).outerWidth())/ 2 + 'px'
			});
		}
		
		else if($(this).outerWidth() > $(window).width()-80) {
			$(this).css({
				"position": "absolute",
				"top": $(window).scrollTop() + 50 + "px",
				'left': '40px'
			});
		}
		
		else {
			$(this).css('top',($(window).height()-$(this).outerHeight())/ 2 + 'px');
			$(this).css('left',($(window).width()-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'fixed');	
		}
	});
	
	
	
	
	
	if(navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/Blackberry/i) )
    {
	$('.custom-popup').addClass('mobilepopup');
		
	$('.custom-popup').each(function(){
		
			$(this).css('top', 100 +$(window).scrollTop()+ 'px');
			$(this).css('left',(1240-$(this).outerWidth())/ 2 + 'px');
			$(this).css('position', 'absolute');	
		
	});
    }
}
/*-------------END ALIGN POPUPS-------------------------*/






/*-------------read more content*/
function showMoreContent() {
	$('.js_read_more').click(function(e){
		e.preventDefault();	
		$(this).parent().find($('.read_more_content')).slideToggle();
		$(this).toggleClass('active');
	});
}
/*-------------end read more content*/




/*-------------Tabs-------------------*/
function initTabs() {
    var isAnimating = false;
    $('[data-tab]').click(function(e) {
         e.preventDefault();
		$('.js_announce').fadeOut();
		if($(this).hasClass('active')){
			
			}
			else{
        if(!isAnimating) {
            var parent = $(this).closest('.tabs');
            var cls = $(this).attr('data-tab');
            isAnimating = true;
            $('[data-tab]', parent).removeClass('active');
            $(this, parent).addClass('active');

            if($('.hidden_content').hasClass('active')){
                $('.hidden_content.active', parent).fadeOut(300, function(){
                    $('.hidden_content.active', parent).removeClass('active');
                    $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                        isAnimating = false;
                    });  
                    $('.hidden_content'+'#'+cls, parent).addClass('active');
					
					
					
					for(var i = 1; i<=$('.js_swiper_teasers').length; ++i){
						var swiper = new Swiper('.js_swiper_teasers'+i+' .swiper-container', {
							slidesPerView: '3',
							spaceBetween: 0,
							loop: false,
							nextButton: '.js_swiper_teasers'+i+'  .js_swiper_next',
							prevButton: '.js_swiper_teasers'+i+'  .js_swiper_prev',
							mousewheelControl: false
						});
					}
					
					
					
					
					var slider_video = new Swiper('.js_slider_video .swiper-container', {
						slidesPerView: '3',
						spaceBetween: 15,
						loop: false,
						nextButton: '.js_slider_video .js_swiper_next',
						prevButton: '.js_slider_video .js_swiper_prev',
						mousewheelControl: false
					})
					
					
					/*-------------slider news*/
					var slider_news = new Swiper('.js_slider_news_main_sis2 .swiper-container', {
						spaceBetween: 0,
						slidesPerView: 3,
						loop:false,
						direction: 'vertical',
						nextButton: '.js_slider_news_main_sis2 .js_swiper_next',
						prevButton: '.js_slider_news_main_sis2 .js_swiper_prev'
					});
					/*-------------end slider news*/
					
					
					$('.js_small_slider').flexslider({
						animation: "slide",
						controlNav: false,
						animationLoop: false,
						slideshow: false,
						itemMargin: 0,
						prevText: "", 
						mousewheel: true, 
						startAt: 0,
						nextText: "",
						start : function(slider) {
							flexslider = slider;
							 var quantity_html = '<div class="quantity"><span class="js_gallery_current"> ' + (slider.currentSlide + 1) + '</span> из ' + slider.slides.length+'</div>';
							 $('.photo_amount').append(quantity_html);
						},
						after : function(slider) {
							$('.js_gallery_current').html(slider.currentSlide + 1);
						}
					  });
					
					$(window).resize();
                })
				
				
				
				
            }
            else {
                $('.hidden_content'+'#'+cls, parent).fadeIn(300, function() {
                    isAnimating = false;
                }); 
                $('.hidden_content'+'#'+cls, parent).addClass('active');
            }
        }
		
			}
		
    });
	$('.hidden_content.active').fadeIn();	
}
/*-------------end Tabs-------------------*/


/*-------------remove input placeholders on click*/
function ClearPlaceholder(){
	$('input,textarea').focus(function(){
		 $(this).data('placeholder',$(this).attr('placeholder'))
		 $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
		 $(this).attr('placeholder',$(this).data('placeholder'));
	});
}
/*-------------end remove placeholders on click*/



/*-------------custom input type file*/
function ChooseFile(){
	if($('.js_file_input').val()!=""){
		$('.js_file_value').html($('.js_file_input').val());
		$('.js_remove_file').css('display', 'block');
		$('.file_name_holder').css('display', 'inline-block');
	}
}
/*-------------end custom input type file*/


/*show coockie window*/
function showCoockieWindow(){
	$('.coockie_overlay').fadeIn();
	$('.coockie_block').fadeIn();
}
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
/*end show coockie window*/



$( window ).resize(function() {
	AlignPopup();			
});	


$(window).scroll(function() {
	var scrolled_top = $(window).scrollTop();
	if(scrolled_top>115) {
		
	}
	else {
		
	}
});


$(window).load( function() {
	if (browser=='Safari'){
		$( '.tabs.full_width_tabs .tab_links' ).wrapInner('<table width="100%"><tr></tr></table>');
		$( '.tabs.full_width_tabs .tab_links a' ).wrap('<td>  <td>');
		$( '.small_tabls_block .tabs .tab_links a').css('width','100%');
		$( '.tabs.full_width_tabs .tab_links a ').css('display','block');
		$( '.tabs.full_width_tabs .tab_links ').css('display','block');
		$( '.tabs.full_width_tabs .tab_links ').css('width','auto');
	}
});


$(document).ready(function(){
	AlignPopup();
	showMoreContent();
	initTabs();
	ClearPlaceholder();
	
	
	





	
/*show coockie window first time*/	
	var the_coockie_val = getCookie('coockie_window');
	if(!the_coockie_val) {
		showCoockieWindow();
	}
/*show coockie window first time*/		

	

	/*panel for old browser*/
	$('.close_coockie_block, .js_btn_accept_coockie').click(function(e){
		e.preventDefault();
        $(this).parent().parent().fadeOut();
		$('.coockie_overlay').fadeOut();
	});

    $('.js_btn_accept_coockie').click(function(e){
		document.cookie = "coockie_window=on;  path=/";
	});
	/*panel forl old browser*/
	
	
/*-------------switch view*/
if($('.js_viewleft').hasClass('active')){
	$('.js_view_content_1').addClass('active');
	$('.js_view_content_2').removeClass('active');
	$('.js_view_img').removeClass('js_viewright_img');
	$('.js_view_img').addClass('js_viewleft_img');	
}
if($('.js_viewright').hasClass('active')){
	$('.js_view_content_1').removeClass('active');
	$('.js_view_content_2').addClass('active');
	$('.js_view_img').removeClass('js_viewleft_img');
	$('.js_view_img').addClass('js_viewright_img');
	
}
$('.js_viewleft').click(function(e){
		e.preventDefault();
		$('.js_viewright').removeClass('active');
		$('.js_viewleft').addClass('active');
		$('.js_view_content_1').addClass('active');
		$('.js_view_content_2').removeClass('active');
		$('.js_view_img').removeClass('js_viewright_img');
		$('.js_view_img').addClass('js_viewleft_img');	
		$('.list_view_block .block_contacts_1 .block').removeClass('active');
		
		for(var i = 0; i < map_instances.length; i++) {
			google.maps.event.trigger(map_instances[i].map, 'resize');
			map_instances[i].map.setCenter(map_instances[i].center);
		}
});

$('.js_viewright').click(function(e){
		e.preventDefault();
		$('.js_viewleft').removeClass('active');
		$('.js_viewright').addClass('active');
		$('.js_view_content_2').addClass('active');
		$('.js_view_content_1').removeClass('active');
		$('.js_view_img').removeClass('js_viewleft_img');
		$('.js_view_img').addClass('js_viewright_img');
		
		for(var i = 0; i < map_instances.length; i++) {
			google.maps.event.trigger(map_instances[i].map, 'resize');
			map_instances[i].map.setCenter(map_instances[i].center);
		}
		
});

$('.js_view_img').click(function(){
	if($(this).hasClass('js_viewleft_img')){
		$('.js_viewright').click();
	}
	else if($(this).hasClass('js_viewright_img')){
		$('.js_viewleft').click();
	} 
})
/*-------------end switch view*/




/*-------------input type file*/
$('.js_file_input').change(function(){
	ChooseFile();						
})
/*-------------end input type file*/


/*-------------empty form file input*/
$('.js_remove_file').click(function(e){
	 e.preventDefault();		
	 $(this).parent().parent().find('.js_file_value').empty();	
	 $(this).parent().parent().find('.js_file_input').val("");	
	 $('.js_remove_file').css('display', 'none');
});	
/*-------------end empty form file input*/

/*-------------Revealing list click-----------------*/
	$('.js_holder.active').find('.js_block').css('display', 'block');
	$('.js_heading').click(function(e){
		e.preventDefault();
	 	if($(this).parent().hasClass('active')){
			$(this).parent().removeClass('active');
			$(this).parent().find('.js_block').slideUp();
		 }
		 else{
			$(this).parent().addClass('active');
			$(this).parent().find('.js_block').slideDown();
		 }
	});	
		
/*-------------end Revealing list click-----------------*/		
	
	
	
/*-------------scroll to some block*/	
	$('.js_scroll').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		$('body').scrollTo(href, {duration:'slow'});						  
	})
/*-------------end scroll to some block*/	




/*-------------input mask*/
    if($(".js_phone_mask").length > 0){
         $(".js_phone_mask").mask("+7 (999) 999-99-99");
    }
    if($("[name=form_text_23]").length > 0){
         $("[name=form_text_23]").mask("99.99.9999");
    }
/*-------------end input mask*/


/*-------------custom select-------------------*/
	$('.js_select select').styler({
		selectSearch:false
});
/*-------------custom select-------------------*/


/*-----------------------------POPUP-------------------------*/
var flag=true;
var startSlide;

    $('[data-popup]').on('click', function(e){
        e.preventDefault();
		AlignPopup();
		InitPopup($(this));

		/*images gallery carousel*/
		startSlide = parseInt($(this).attr('data-current'));
		if($(this).attr('data-popup')=='js_photo_gallery_popup'){
			if(flag){
			$('#photo_carousel').flexslider({
				animation: "slide",
				controlNav: false,
				animationLoop: true,
				slideshow: false,
				itemWidth: 141,
				itemMargin: 6,
				asNavFor: '#photo_slider',
				prevText: "", 
				mousewheel: false, 
				startAt: 0,
				nextText: ""
			
			  });
	
			  $('#photo_slider').flexslider({
				animation : 'slide',
				controlNav: false,
				animationLoop: false,
				slideshow: false,
				sync: "#photo_carousel",
				startAt: 0,
				prevText: "",     
				nextText: "",
				smoothHeight:false,
				animationSpeed: 300,   
				start: function(slider) {
					AlignPopup();				 
					   flexslider = slider; 
				  }
			  });
			 
			   //flag = false;
			  /*images gallery carousel*/
			 
			}else{
				flexslider.flexAnimate(startSlide);
		   }
		}	
		/*images gallery carousel*/
		startSlide=startSlide+=1;
		$('.popup_gallery_slider .flexslider .slides.small_slides > li:nth-child('+startSlide+')').click();
		$(window).resize();
   });


    $('.custom-overlay, .custom-popup .close, .js_close_popup').on('click',function(e){
		e.preventDefault();	
		$('.custom-overlay').delay(200).fadeOut('300');																		  
		$('.custom-popup').fadeOut('300');	
		
		
		if($('#video_src')){
			//document.getElementById('sert_resourse').innerHTML = '';
			$('.mejs-pause').click();
			
			//$('#video_src').attr('src', '');
		}	

    });
/*-------------END POPUP----------------------------*/





/*-------------OLD Browser Panel---------------------------------------*/	
if (browser=='Firefox'){
		if(browser_version<40){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
			}
	}
	if (browser=='Chrome'){
		if(browser_version<45){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
			}
	}
	if (browser.search("IE")!=-1){
		if(browser_version<=9){
			$('.old_browser_block').addClass('visible');
			$('.old_browser_overlay').addClass('visible');
		}
	}
	if (browser_version.search("Opera")!=-1){
		var res = browser_version.split(" "); 
		if(res[1]<20){
			$('.old_browser_block').addClass('visible');
		}
	}
	if (browser=='Safari'){
		if(browser_version<5){
			$('.old_browser_block').addClass('visible');
			
		}
	}
	/*end Get browser version*/


	/*panel for old browser*/
	$('.close_old_browser_panel').click(function(e){
		e.preventDefault();
		$(this).parent().parent().fadeOut();
		$('.old_browser_overlay').fadeOut();
	});	
	/*panel forl old browser*/

/*-------------END OLD Browser Panel---------------------------------------*/	


/*swiper sliders*/
/*-------------slider news*/
var slider_news = new Swiper('.js_slider_news', {
	spaceBetween: 0,
	slidesPerView: 3,
	loop:false,
	direction: 'vertical',
	nextButton: '.slider_news .js_swiper_next',
	prevButton: '.slider_news .js_swiper_prev'
});
/*-------------end slider news*/

/*-------------slider news*/
var slider_news = new Swiper('.js_slider_news_2', {
	spaceBetween: 0,
	slidesPerView: 4,
	loop:false,
	direction: 'vertical',
	nextButton: '.slider_news_2 .js_swiper_next',
	prevButton: '.slider_news_2 .js_swiper_prev'
});
/*-------------end slider news*/


/*-------------slider news*/
var slider_news = new Swiper('.js_slider_news_main_sis1 .swiper-container', {
	spaceBetween: 0,
	slidesPerView: 3,
	loop:false,
	direction: 'vertical',
	nextButton: '.js_slider_news_main_sis1 .js_swiper_next',
	prevButton: '.js_slider_news_main_sis1 .js_swiper_prev'
});
/*-------------end slider news*/
/*-------------slider news*/
var slider_news = new Swiper('.js_slider_news_main_sis2 .swiper-container', {
	spaceBetween: 0,
	slidesPerView: 3,
	loop:false,
	direction: 'vertical',
	nextButton: '.js_slider_news_main_sis2 .js_swiper_next',
	prevButton: '.js_slider_news_main_sis2 .js_swiper_prev'
});
/*-------------end slider news*/

var swipersmain = new Swiper('.js_main_slider_controls .swiper-container', {
	slidesPerView: '4',
	spaceBetween: 1,
	loop: false,
	nextButton: '.js_main_slider_controls .js_swiper_next',
	prevButton: '.js_main_slider_controls .js_swiper_prev',
	mousewheelControl: false
})

var slider_technologes = new Swiper('.js_slider_technologes .swiper-container', {
	slidesPerView: '3',
	spaceBetween: 15,
	loop: false,
	nextButton: '.js_slider_technologes .js_swiper_next',
	prevButton: '.js_slider_technologes .js_swiper_prev',
	mousewheelControl: false
})

var slider_video = new Swiper('.js_slider_video .swiper-container', {
	slidesPerView: '3',
	spaceBetween: 5,
	loop: false,
	nextButton: '.js_slider_video .js_swiper_next',
	prevButton: '.js_slider_video .js_swiper_prev',
	mousewheelControl: false
})

var main_slider_sis = new Swiper('.js_main_slider_sis .swiper-container', {
	slidesPerView: '1',
	spaceBetween: 0,
	loop: false,
	mousewheelControl: false,
	pagination: '.swiper-pagination',
    paginationClickable: true,
	speed:700,
	autoplay:5000,
	effect: 'fade'
})

for(var i = 1; i<=$('.js_swiper_teasers').length; ++i){
	var swiper = new Swiper('.js_swiper_teasers'+i+' .swiper-container', {
		slidesPerView: '3',
		spaceBetween: 0,
		loop: false,
		nextButton: '.js_swiper_teasers'+i+'  .js_swiper_next',
		prevButton: '.js_swiper_teasers'+i+'  .js_swiper_prev',
		mousewheelControl: false
	});
}
/*end swiper sliders*/


/*main page top slider bottom menu click*/
$('.js_slide_link').click(function(){
	$('.js_slide_link').removeClass('active');
	var index = $(this).index()+1;
	$(this).addClass('active');
	
	$('.slide_block.active').fadeOut(300, function(){
									
	})	
	$('.slide_block:nth-child('+index+')').delay(300).fadeIn(300, function(){
		$('.slide_block:nth-child('+index+')').addClass('active');																		   
	});
})
/*end main page top slider bottom menu click*/
	
	
/*contacts map hovers old version*/

$('.js_map_marker .title').hover(function(){
	$(this).parent().toggleClass('active');								
})

$('.block_contacts_1 .block').mouseover(function(){
	var id = $(this).attr('data-city');
	$('[data-city-map='+id+']').addClass('hover');
})
$('.block_contacts_1 .block').mouseout(function(){
	var id = $(this).attr('data-city');
	$('[data-city-map='+id+']').removeClass('hover');
})
$('.block_contacts_1 .block').mouseover(function(){
	var id = $(this).attr('data-city');
	$('[data-city-map='+id+']').addClass('hover');
})
$('.block_contacts_1 .block').mouseout(function(){
	var id = $(this).attr('data-city');
	$('[data-city-map='+id+']').removeClass('hover');
})
$('.js_map_marker .icon, .js_map_marker .title').mouseover(function(){
	var id = $(this).parent().attr('data-city-map');
	$('[data-city='+id+']').addClass('hover');
})
$('.js_map_marker .icon, .js_map_marker .title').mouseout(function(){
	var id = $(this).parent().attr('data-city-map');
	$('[data-city='+id+']').removeClass('hover');
})
$('.js_map_view_block .js_map_marker .icon, .js_map_view_block .js_map_marker .title').click(function(e){
	e.preventDefault();
	$('.js_map_marker').removeClass('active_marker');
	$(this).parent().addClass('active_marker');
	var id = $(this).parent().attr('data-city-map');
		$('.map_view_block .block_contacts_1 .block').hide()
			$('[data-city='+id+']').css('display','inline-block');	
			$('.block_contacts_1 .block').removeClass('active');
			$('[data-city='+id+']').addClass('active');	
})
/*end contacts map hovers old version*/



/*tooltip*/
if($('.js_tooltip').length>0){
	var content = "";
	$('.js_tooltip').tooltipster({
		 contentAsHTML: true,
		 content: content,
		 //interactive:true,
		 position:'bottom',
		 speed:100,
		 updateAnimation:false,
		 onlyOne:true
		//autoClose:false
	});
	$('.js_tooltip').mouseover(function(){
		content = $(this).find('.tooltip_content').html();
		$(this).tooltipster('content', content);
	})
	
	
	$('.js_tooltip_item_property').tooltipster({
		 contentAsHTML: true,
		 content: content,
		 interactive:false,
		 position:'bottom',
		 speed:100,
		 updateAnimation:false,
		 onlyOne:true
		//autoClose:false
	});
	$('.js_tooltip_item_property').mouseover(function(){
		content = $(this).find('.tooltip_content').html();
		$(this).tooltipster('content', content);
	})
}
/*end tooltip*/

/*main page slider swipe events*/
if($('.main_slider_slides').length>0){
$(".main_slider_slides").swipe( {
	swipeLeft:function(event, direction, distance, duration, fingerCount) {
	$('.js_slide_link.active').next().click();
},
 	swipeRight:function(event, direction, distance, duration, fingerCount) {
	$('.js_slide_link.active').prev().click();
},
 threshold:0
});
}
/*end main page slider swipe events*/

$('ol').wrap( "<div></div>" );

/*-------------validation-------------------*/
	$.validate({
	  form : '.js_validation',
	  /*onError : function() {
            alert('Validation failed');
        },*/
		onSuccess : function() {
			$('.js_call_back_popup').fadeOut();
		   $('.js_message_popup').fadeIn();
		   return false;
        }
        /*onValidate : function() {
        }*/
	});
	

/*-------------end validation-------------------*/	

/*padding from footer*/
var footer_height = $('.footer_holder').height();
$('.header_and_content_holder').css('padding-bottom',footer_height+30+'px');
/*end padding from footer*/

/*sis page small slider*/
if($('.js_small_slider').length>0){
$('.js_small_slider').flexslider({
	animation: "slide",
	controlNav: false,
	animationLoop: false,
	slideshow: false,
	itemMargin: 0,
	prevText: "", 
	mousewheel: false, 
	startAt: 0,
	nextText: "",
	start : function(slider) {
		flexslider = slider;
		 var quantity_html = '<div class="quantity"><span class="js_gallery_current"> ' + (slider.currentSlide + 1) + '</span> из ' + slider.slides.length+'</div>';
		 $('.photo_amount').append(quantity_html);
	},
	after : function(slider) {
		$('.js_gallery_current').html(slider.currentSlide + 1);
		var data = $('.flex-active-slide').find('a').attr('data-current');
		$('.icon_zoom').attr('data-current',data);
	}
  });
}
/*end sis page small slider*/

/*news_block_type_5 hovers*/
$('.news_block_type_5 .block .btn_more').mouseover(function(){
	$(this).parent().find('.title').addClass('hover');	
})
$('.news_block_type_5 .block .btn_more').mouseout(function(){
	$(this).parent().find('.title').removeClass('hover');	
})

$('.news_block_type_5 .block .title').mouseover(function(){
	$(this).parent().find('.btn_more').addClass('hover');	
})
$('.news_block_type_5 .block .title').mouseout(function(){
	$(this).parent().find('.btn_more').removeClass('hover');	
})
/*end news_block_type_5 hovers*/






});