/*!
 * Project Custom JS
 * Author : Ahmed Abdel Moula
 */
$((function(){if($("body, #axc-main").hasClass("header-above")){let e=$("#axc-header .wrapper").outerHeight();console.log(e),$("body").css({"padding-top":e+"px"})}if(document.addEventListener("click",(function(e){e.target.classList.contains("hamburger-toggle")&&e.target.children[0].classList.toggle("active")})),"Showroom"===$("title").text().trim()){var e=$('.navbar-nav a:contains("Showroom")');e.length>0&&e.addClass("active")}$("#axc-header a[href*='#']:not([href='#'])").on("click",(function(e){e.preventDefault(),$("#axc-header").find("a.active").removeClass("active"),$(this).addClass("active");$("#axc-header .wrapper").outerHeight();if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){let e=$(this.hash);if(e=e.length?e:$("[name="+this.hash.slice(1)+"]"),e.length){let a=e.offset().top;$(window).width()<992&&(a-=40),$("html, body").animate({scrollTop:a},500)}}})),$(window).width()<992&&$("#navbar-content a").on("click",(function(){$(".hamburger").removeClass("active"),$("#navbar-content").animate({height:0},300,(function(){$(this).removeClass("show")}))})),$("#top-animate").on("click",(function(){return $("html, body").animate({scrollTop:0},"slow"),!1})),$(document).on("scroll",(function(){$(document).scrollTop()>16?$("#axc-header").addClass("shrink"):$("#axc-header").removeClass("shrink")}))}));