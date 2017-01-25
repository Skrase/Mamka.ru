$(document).ready(function () {


	$("#show-more-foot-navs").click(function (e) {
		e.preventDefault();
		var navs = $("#footer #footer-nav .footer-nav-column ul li");
		console.log(navs);
		$(this).toggleClass("active")
		for (var i = 0; i < navs.length; i++) {
			if ( i > 5 ) {

				
				if( $("#show-more-foot-navs").hasClass("active") ){
					$(navs[i]).css("display", "block");	
				}else{
					$(navs[i]).css("display", "none");	
				}
			}
		}
	});

	$(".login-to-registration button").click(function (e) {
		e.preventDefault();
		$("#login-modal").fadeOut(300);
		$("#registration").fadeIn(300);
	});

	$(".registration-to-login button").click(function (e) {
		e.preventDefault();
		$("#registration").fadeOut(300);
		$("#login-modal").fadeIn(300);
	});


	$(".sidebar-one-levlel-button").click(function () {
		$(this).toggleClass("active").next().slideToggle(300)
	});

	$(".sidebar-filter-button").click(function () {
		$(this).next().slideToggle(300)
	});

	$("#sidebar-categories-open").click(function () {
		$(this).toggleClass("active").next().slideToggle(300)
	});



	$(".modal-open").click(function () {
		// $("#login-modal").fadeToggle(300);
		// $("#modal-backing").fadeToggle(300);

		$("#" + $(this).data("modal")).fadeToggle(300);
		$("#modal-backing").fadeToggle(300);
	});


	$(".close-modal").click(function () {
		$(this).parent().fadeToggle(300);
		$("#modal-backing").fadeToggle(300);
	});


	$(".small-product-image").click(function () {
		$("#big-product-image img").attr("src", $(this).children("img").attr("src"))
	});


	$("#menu-button").click(function () {
		$("#main-nav").toggleClass("active");
		$("#menu-button").toggleClass("active");
	});


	$(".tab-button").click(function () {
		if( !$(this).hasClass("active") ){
			var tabButtons = $(this).parent().children(".tab-button"),
				tabContents = $(this).parent().parent().children(".tabs-contents").children(".tab-content");

			$(tabButtons).removeClass("active");
			$(tabContents).removeClass("active");
			$(this).addClass("active");

			for (var i = 0; i < tabButtons.length; i++) {
				if ( $(tabButtons[i]).hasClass("active") ) {
					$(tabContents[i]).addClass("active")
				}
			}
		}
	});


	$("#search-button").click(function () {
		$("#search-form input").toggleClass("active");
		$("#main-nav li").toggleClass("removed");
		$(this).toggleClass("active");
		focusTimeout = setTimeout(function() {
			$("#search-form input").focus();
		}, 150);
		// console.log("333");
	});

	$("#show-all-cities").click(function () {
		$("#all-cities").slideToggle(300);
	});

	$(".count-picker .minus").click(function (e) {
		e.preventDefault();
		count = parseInt($(this).parent().children(".count-counter").text());
		if (count > 1) {
			$(this).parent().children(".count-counter").text(count - 1);
			$(this).parent().children("input").val(count - 1);
		}
	});

	$(".count-picker .plus").click(function (e) {
		e.preventDefault();
		count = parseInt($(this).parent().children(".count-counter").text());
		$(this).parent().children(".count-counter").text(count + 1);
		$(this).parent().children("input").val(count + 1);
	});


	$("#sidebar-categories a.with-subcategory").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active").next().slideToggle(300);
	});


	var dropdownTimeout;

	$('.dropdown-show').mouseenter(function () {
		clearTimeout(dropdownTimeout);
		dropdownTimeout = setTimeout(function() {
			$(".dropdown-menu").addClass("active");
		}, 200);
	});

	$('.dropdown-menu').mouseenter(function () {
		clearTimeout(dropdownTimeout);
		dropdownTimeout = setTimeout(function() {
			$(".dropdown-menu").addClass("active");
		}, 200);
	});

	$('.dropdown-menu').mouseleave(function () {
		clearTimeout(dropdownTimeout);
		dropdownTimeout = setTimeout(function() {
			$(".dropdown-menu").removeClass("active");
		}, 200);
	});

	$('.dropdown-show').mouseleave(function () {
		clearTimeout(dropdownTimeout);
		dropdownTimeout = setTimeout(function() {
			$(".dropdown-menu").removeClass("active");
		}, 200);
	});


	$('.masonry-grid').masonry({
	  // columnWidth: 170,
	  columnWidth: '.a-z',
	  itemSelector: '.a-z'
	});

	$(".home-banner-slider-wrapper").owlCarousel({
		items: 1,
		dots: true,
		nav: true,
		navText: ['','']
	});

	// $('.my-range').slider({
	// 			range: true,
	// 			min: $(this).data("min"),
	// 			max: $(this).data("max"),
	// 			step: $(this).data("step"),
	// 			values: $(this).data("values"),
	// 			slide: function(event, ui) {
	// 				// $('.v-min').text( '$' + ui.values[0].toFixed(2) );
	// 				// $('.v-max').text( '$' + ui.values[1].toFixed(2) );
	// 				$(this).parent().parent().children(".clear").children(".price-from").children("input").val( ui.values[0] );
	// 				// $('.price-to input').val( ui.values[1]);
	// 				$(this).parent().parent().children(".clear").children(".price-to").children("input").val( ui.values[1] );
					
	// 			}
	// });

	// // write default amount states
	// $('.price-from input').val( $(".my-range").slider("values", 0) );
	// $('.price-to input').val( $(".my-range").slider("values", 1) );
	// // $('.v-max').text( '$' + $(".my-range").slider("values", 1) );


	function checkCurr(d) {
		if(window.event){
			if(event.keyCode == 37 || event.keyCode == 39){
				return;
			} 
		}
		d.value = d.value.replace(/\D/g,'');
	}


	$(".price-to input").keyup(function() {
		checkCurr(this);



	});
	$(".price-to input").blur(function() {
		var range = $(this).parent().parent().next().children(".my-range");
		var values = range.data("values");
		// values[0] = $(this).val();
		// $(this).parent().parent().next().children(".my-range").attr("data-values", values)
		var value1= $(this).parent().parent().children(".price-from").children("input").val();
		var value2= $(this).val();
		var max = range.data("max");
		     
		if (value2 > max) {
			value2 = max;
			$(this).val(max)
		}
		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$(this).val(value2);
		}
		range.slider("values",1,value2);
		


	});

	$(".price-from input").keyup(function() {
		checkCurr(this);
		var range = $(this).parent().parent().next().children(".my-range");
		var value1= $(this).val();
		var value2= $(this).parent().parent().children(".price-to").children("input").val();
		 
		if(parseInt(value1) > parseInt(value2)){
		    value1 = value2;
		    $(this).val(value1);
		}
		range.slider("values",0,value1); 
	});


	var ranges = $('.my-range');
	for (var i = 0; i < ranges.length; i++) {
		$(ranges[i]).slider({
					range: true,
					min: $(ranges[i]).data("min"),
					max: $(ranges[i]).data("max"),
					step: $(ranges[i]).data("step"),
					values: $(ranges[i]).data("values"),
					slide: function(event, ui) {
						// $('.v-min').text( '$' + ui.values[0].toFixed(2) );
						// $('.v-max').text( '$' + ui.values[1].toFixed(2) );
						$(this).parent().parent().children(".clear").children(".price-from").children("input").val( ui.values[0] );
						// $('.price-to input').val( ui.values[1]);
						$(this).parent().parent().children(".clear").children(".price-to").children("input").val( ui.values[1] );
						
					}
		});

		$('.price-from input').val( $(".my-range").slider("values", 0) );
		$('.price-to input').val( $(".my-range").slider("values", 1) );
		$(ranges[i]).parent().parent().children(".clear").children(".price-from").children("input").val( $(ranges[i]).slider("values", 0) );
		$(ranges[i]).parent().parent().children(".clear").children(".price-to").children("input").val( $(ranges[i]).slider("values", 1) );
	}


});