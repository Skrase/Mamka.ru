$(document).ready(function(){$("#show-more-foot-navs").click(function(e){e.preventDefault();var t=$("#footer #footer-nav .footer-nav-column ul li");console.log(t);for(var n=0;n<t.length;n++)n>5&&$(t[n]).css("display","block")}),$(".login-to-registration button").click(function(e){e.preventDefault(),$("#login-modal").fadeOut(300),$("#registration").fadeIn(300)}),$(".registration-to-login button").click(function(e){e.preventDefault(),$("#registration").fadeOut(300),$("#login-modal").fadeIn(300)}),$(".sidebar-one-levlel-button").click(function(){$(this).toggleClass("active").next().slideToggle(300)}),$(".sidebar-filter-button").click(function(){$(this).next().slideToggle(300)}),$("#sidebar-categories-open").click(function(){$(this).toggleClass("active").next().slideToggle(300)}),$(".modal-open").click(function(){$("#"+$(this).data("modal")).fadeToggle(300),$("#modal-backing").fadeToggle(300)}),$(".close-modal").click(function(){$(this).parent().fadeToggle(300),$("#modal-backing").fadeToggle(300)}),$("#small-product-image img").click(function(){$("#big-product-image").attr("src",$(this).attr("src"))}),$("#menu-button").click(function(){$("#main-nav").toggleClass("active"),$("#menu-button").toggleClass("active")}),$(".tab-button").click(function(){if(!$(this).hasClass("active")){var e=$(this).parent().children(".tab-button"),t=$(this).parent().parent().children(".tabs-contents").children(".tab-content");$(e).removeClass("active"),$(t).removeClass("active"),$(this).addClass("active");for(var n=0;n<e.length;n++)$(e[n]).hasClass("active")&&$(t[n]).addClass("active")}}),$("#search-button").click(function(){$("#search-form input").toggleClass("active"),$("#main-nav li").toggleClass("removed"),$(this).toggleClass("active"),focusTimeout=setTimeout(function(){$("#search-form input").focus()},150)}),$("#show-all-cities").click(function(){$("#all-cities").slideToggle(300)}),$(".count-picker .minus").click(function(e){e.preventDefault(),count=parseInt($(this).parent().children(".count-counter").text()),count>1&&($(this).parent().children(".count-counter").text(count-1),$(this).parent().children("input").val(count-1))}),$(".count-picker .plus").click(function(e){e.preventDefault(),count=parseInt($(this).parent().children(".count-counter").text()),$(this).parent().children(".count-counter").text(count+1),$(this).parent().children("input").val(count+1)}),$("#sidebar-categories a").click(function(e){e.preventDefault(),$(this).parent().toggleClass("active")});var e;$(".dropdown-show").mouseenter(function(){clearTimeout(e),e=setTimeout(function(){$(".dropdown-menu").addClass("active")},200)}),$(".dropdown-menu").mouseenter(function(){clearTimeout(e),e=setTimeout(function(){$(".dropdown-menu").addClass("active")},200)}),$(".dropdown-menu").mouseleave(function(){clearTimeout(e),e=setTimeout(function(){$(".dropdown-menu").removeClass("active")},200)}),$(".dropdown-show").mouseleave(function(){clearTimeout(e),e=setTimeout(function(){$(".dropdown-menu").removeClass("active")},200)}),$(".masonry-grid").masonry({columnWidth:".a-z",itemSelector:".a-z"}),$(".home-banner-slider-wrapper").owlCarousel({items:1,dots:!0,nav:!0,navText:["",""]}),$(".my-range").slider({range:!0,min:0,max:1e5,step:500,values:[0,1e5],slide:function(e,t){$(".price-from input").val(t.values[0]),$(".price-to input").val(t.values[1])}}),$(".price-from input").val($(".my-range").slider("values",0)),$(".price-to input").val($(".my-range").slider("values",1))});