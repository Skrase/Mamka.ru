$(document).ready(function () {


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


	$("#small-product-image img").click(function () {
		$("#big-product-image").attr("src", $(this).attr("src"))
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







	$('.my-range').slider({
				range: true,
				min: 0,
				max: 100000,
				step: 500,
				values: [0, 100000],
				slide: function(event, ui) {
					// $('.v-min').text( '$' + ui.values[0].toFixed(2) );
					// $('.v-max').text( '$' + ui.values[1].toFixed(2) );
					$('.price-from input').val( ui.values[0] );
					$('.price-to input').val( ui.values[1]);
				}
	});

	// write default amount states
	$('.price-from input').val( $(".my-range").slider("values", 0) );
	$('.price-to input').val( $(".my-range").slider("values", 1) );
	// $('.v-max').text( '$' + $(".my-range").slider("values", 1) );






});