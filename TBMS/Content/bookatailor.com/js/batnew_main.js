(function ($) {
 "use strict";
	
$(document).ready(function(){
	
/*---------------------
 1. slicknav
--------------------- */	
	$('#mobile-menu').slicknav({	
		allowParentLinks: true
	});	
	$(".bag-icon1").on('click', function(){
        $(".shopping-cart1").slideToggle();
		$(".top-account").css("display","none");
		$(".top-search").css("display","none");
		$(".log_top-account").css("display","none");
		$(".shopping-cart").css("display","none");
		$(".xicon").css("display","block");
    });
	
	$(".bag-icon").on('click', function(){
        $(".shopping-cart").slideToggle();
		$(".top-account").css("display","none");
		$(".top-search").css("display","none");
		$(".log_top-account").css("display","none");
		$(".shopping-cart1").css("display","none");
		$(".xicon").css("display","block");
    });
	$(".lock-icon").on('click', function(){
        $(".top-account").slideToggle();
		$(".shopping-cart").css("display","none");
		$(".top-search").css("display","none");
		$(".log_top-account").css("display","none");
		$(".shopping-cart1").css("display","none");
		$(".xicon").css("display","block");
    });
	$(".log-icon").on('click', function(){
        $(".log_top-account").slideToggle();
		$(".top-account").css("display","none");
		$(".shopping-cart").css("display","none");
		$(".top-search").css("display","none");
		$(".shopping-cart1").css("display","none");
		$(".xicon").css("display","block");
    });
	$(".search-icon").on('click', function(){
        $(".top-search").slideToggle();
		$(".shopping-cart").css("display","none");
		$(".top-account").css("display","none");
		$(".log_top-account").css("display","none");
		$(".shopping-cart1").css("display","none");
		$(".xicon").css("display","block");
    });
	
	$(".xicon").on('click', function(){
        $(".xicon").slideToggle();
		$(".shopping-cart").css("display","none");
		$(".top-account").css("display","none");
		$(".log_top-account").css("display","none");
		$(".top-search").css("display","none");
		$(".shopping-cart1").css("display","none");
		$(".xicon").css("display","block");
    });
	
	$(".nav-open").on('click', function(){
        $(".main-menu-area").fadeToggle(2000);
    });
	$(".nav-close").on('click', function(){
        $(".main-menu-area").css("display","none");
    });
	
/*---------------------
 3. tooltip
--------------------- */	
	$('[data-toggle="tooltip"]').tooltip(); 
	
/*---------------------
 3. TOP Menu Stick
--------------------- */
	var s = $("#sticker");
	var pos = s.position();					   
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("stick");
		} else {
			s.removeClass("stick");	
		}
	});

/*---------------------
  scrollUp
--------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });	

/*---------------------
Projects filter with shuffle.js
--------------------- */
$('.portfolio-content').shuffle( { itemSelector: '.project' });
	
	$('.portfolio-menu .btn').on('click', function() {
		
		var filterBtn = $(this),
			isActive = filterBtn.hasClass( 'active' ),
			group = isActive ? 'all' : filterBtn.data('group');

		// Hide current label, show current label in title
		if ( !isActive ) {
			$('.portfolio-menu .active').removeClass('active');
		}

		filterBtn.toggleClass('active');

		// Filter elements
		$('.portfolio-content').shuffle( 'shuffle', group );
	});
/*---------------------
Image Zoom
--------------------- */
	$('.simpleLens-big-image').simpleLens({
		loading_image: 'demo/images/loading.gif'
	});
	
/*---------------------
fancybox
--------------------- */	
	$('.fancybox').fancybox();
	
/*---------------------
 1. owl-carousel
--------------------- */
    $(".testimonials-list").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
 /*---------------------
 2. owl-carousel
--------------------- */
  $(".product-carousal").owlCarousel({
	
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],
    itemsMobile : [767,1],
 
  });
 /*---------------------
 3. owl-carousel
--------------------- */
  $(".blog-carosul").owlCarousel({
	
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : false,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :true,
    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,2],
    itemsMobile : [767,1],
 
  });
 /*---------------------
 4. owl-carousel
--------------------- */
  $(".band-logo-area").owlCarousel({
	
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 7,
    itemsDesktop : [1199,7],
    itemsDesktopSmall : [979,5],
    itemsMobile : [767,1]
 
  });
/*---------------------
5. owl-carousel
--------------------- */
  $(".product-carousal-home-2").owlCarousel({
	
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    itemsMobile : [767,1]
 
  });
/*---------------------
6. owl-carousel
--------------------- */
  $(".blog-carosul-home2").owlCarousel({
	
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 4,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,3],
    itemsMobile : [767,1]
 
  });
/*---------------------
7. owl-carousel
--------------------- */
  $(".blog-carosul-home-3").owlCarousel({

    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 2,
    itemsDesktop : [1199,2],
    itemsDesktopSmall : [979,2],
    itemsMobile : [767,1]
 
  });
/*---------------------
8. owl-carousel
--------------------- */
  $(".product-carousal-5").owlCarousel({
	
      autoPlay: false, //Set AutoPlay to 3 seconds
	  navigation : true,
	  navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  pagination :false,
      items : 8,
      itemsDesktop : [1199,8],
      itemsDesktopSmall : [979,8]
 
  });
/*---------------------
9. owl-carousel
--------------------- */
  $(".blog-carosul-6").owlCarousel({

	autoPlay: false, //Set AutoPlay to 3 seconds
	navigation : true,
	navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	pagination :false,
	items : 4,
	itemsDesktop : [1199,4],
	itemsDesktopSmall : [979,4]
 
  });

/*---------------------
10. owl-carousel
--------------------- */
  $(".post-slider").owlCarousel({
  
    autoPlay: false, //Set AutoPlay to 3 seconds
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :true,
    items : 1,
    itemsDesktop : [1199,1],
    itemsDesktopSmall : [979,1],
    itemsMobile : [767,1]
 
  });
/*---------------------
11. owl-carousel
--------------------- */
  $(".logo-brand-carosol").owlCarousel({
    
    autoPlay: false, //Set AutoPlay to 3 seconds
    loop:false,
    navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    pagination :false,
    items : 5,
    itemsDesktop : [1199,5],
    itemsDesktopSmall : [979,5]
 
  });

  /* --------------------------------------------------------
   payment-accordion
* -------------------------------------------------------*/ 
  $(".payment-accordion").collapse({
    accordion:true,
    open: function() {
    this.slideDown(550);
    },
    close: function() {
    this.slideUp(550);
    }   
  });
  /* --------------------------------------------------------
   FAQ-accordion
* -------------------------------------------------------*/ 
  $('.panel-heading a').on('click', function() {
    $('.panel-default').removeClass('actives');
    $(this).parents('.panel-default').addClass('actives');
  });
/*-------------------------
  showlogin toggle function
--------------------------*/
   $( '#showlogin' ).on('click', function() {
        $( '#checkout-login' ).slideToggle(900);
     }); 
  
/*-------------------------
  showcoupon toggle function
--------------------------*/
   $( '#showcoupon' ).on('click', function() {
        $( '#checkout_coupon' ).slideToggle(900);
     });

/*-------------------------
  Create an account toggle function
--------------------------*/
   $( '#cbox' ).on('click', function() {
        $( '#cbox_info' ).slideToggle(900);
     });
   
/*-------------------------
  Create an account toggle function
--------------------------*/
   $( '#ship-box' ).on('click', function() {
        $( '#ship-box-info' ).slideToggle(1000);
     });

/*---------------------
 about-counter
--------------------- */	
    $('.about-counter').counterUp({
        delay: 50,
        time: 3000
    });	

/*---------------------
PRICE FILTER
--------------------- */
$(function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 45 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });
/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	

});

})(jQuery);



/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.7.8 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2017, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}function c(a,b){var c={};for(var d in a)d in b&&(c[d]=a[d],delete a[d]);return c}function d(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var e=[],f=function(b){return e=a.grep(e,function(a){return a!==b&&a.$instance.closest("body").length>0})},g={allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,name:1,referrerpolicy:1,scrolling:1,sandbox:1,src:1,srcdoc:1,width:1},h={keyup:"onKeyUp",resize:"onResize"},i=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[h[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},j=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(h,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,i)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<button class="'+e+"-close-icon "+d.namespace+'-close" aria-label="Close">',d.closeIcon,"</button>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return b.is("iframe")&&c.$instance.addClass(c.namespace+"-iframe"),c.$instance.removeClass(c.namespace+"-loading"),c.$instance.find("."+c.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0],b[0])?"":b),c.$content=b.addClass(c.namespace+"-inner"),c},open:function(b){var c=this;if(c.$instance.hide().appendTo(c.root),!(b&&b.isDefaultPrevented()||c.beforeOpen(b)===!1)){b&&b.preventDefault();var d=c.getContent();if(d)return e.push(c),j(!0),c.$instance.fadeIn(c.openSpeed),c.beforeContent(b),a.when(d).always(function(a){c.setContent(a),c.afterContent(b)}).then(c.$instance.promise()).done(function(){c.afterOpen(b)})}return c.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,d=a.Deferred();return c.beforeClose(b)===!1?d.reject():(0===f(c).length&&j(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),d.resolve()})),d.promise()},resize:function(a,b){if(a&&b){this.$content.css("width","").css("height","");var c=Math.max(a/(this.$content.parent().width()-1),b/(this.$content.parent().height()-1));c>1&&(c=b/Math.floor(b/c),this.$content.css("width",""+a/c+"px").css("height",""+b/c+"px"))}},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var e=new a.Deferred,f=a("<iframe/>"),h=d(this,"iframe"),i=c(h,g);return f.hide().attr("src",b).attr(i).css(h).on("load",function(){e.resolve(f.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),e.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=JSON.parse(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d),i=function(g){var i=a(g.currentTarget),j=a.extend({$source:b,$currentTarget:i},e.readElementConfig(b[0],h.namespace),e.readElementConfig(g.currentTarget,h.namespace),d),k=f||i.data("featherlight-persisted")||new e(c,j);"shared"===k.persist?f=k:k.persist!==!1&&i.data("featherlight-persisted",k),j.$currentTarget.blur&&j.$currentTarget.blur(),k.open(g)};return b.on(h.openTrigger+"."+h.namespace,h.filter,i),i},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return f(),a.grep(e,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;b.autoBind&&(a(b.autoBind).each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(c){if(!c.isDefaultPrevented()){var d=b.attach(a(c.currentTarget));d(c)}}))},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},beforeOpen:function(b,c){return a(document.documentElement).addClass("with-featherlight"),this._previouslyActive=document.activeElement,this._$previouslyTabbable=a("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=a("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(b,c){return a(c).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),b(c)},afterClose:function(c,d){var e=c(d),f=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(b,c){a(c).attr("tabindex",f._previousWithTabIndices[b])}),this._previouslyActive.focus(),0===b.opened().length&&a(document.documentElement).removeClass("with-featherlight"),e},onResize:function(a,b){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),a(b)},afterContent:function(a,b){var c=a(b);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c),this},a(document).ready(function(){b._onReady()})}(jQuery);








