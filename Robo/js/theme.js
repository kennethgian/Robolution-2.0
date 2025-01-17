/*
 * Sticky navbar
 * 
 */
  	
// When the user scrolls the page, execute navbarSticky
window.onscroll = function() {navbarSticky()};

// Get the navbar
var navbar = document.getElementsByClassName("navbar")[0];

// Get the offset position of the navbar
var sticky = navbar.offsetTop ? navbar.offsetTop : navbar.offsetHeight;

function toggleNavbarTheme () {
    if (navbar.classList.contains("navbar-dark")) {
		navbar.classList.add("navbar-light");
		navbar.classList.remove("navbar-dark");
	} else if (navbar.classList.contains("navbar-light")) {
		navbar.classList.add("navbar-dark");
		navbar.classList.remove("navbar-light");
	}
}


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navbarSticky(isSticky) {
  if (isSticky == undefined) {
	  isSticky = (window.pageYOffset >= sticky);		
  }
		
  if (isSticky) {
	  if (!navbar.classList.contains("sticky")) {
		navbar.classList.add("sticky");
		toggleNavbarTheme();
	  } 
  } else {
	  if (navbar.classList.contains("sticky")) {
		navbar.classList.remove("sticky");
		toggleNavbarTheme();
	  }
  }
}


////DARKMODE TOGGLE/////

function setCookie(name, value) {
  document.cookie = name + "=" + value + ";";
  // try to set cookie to all subdomains
  document.cookie = name + "=" + value + ";path=/;domain=." + window.location.host.replace(/^.*?\./, '') + ";";
}

function toggleDarkMode() {
  let theme = $("html").attr("data-bs-theme");
  let themeIcon = $("#theme-icon");

  if (theme == "dark") {
      theme = "light";
      themeIcon.removeClass("la-moon-o").addClass("la-sun-o");
  } else if (theme == "light" || theme == "auto" || !theme) {
      theme = "dark";
      themeIcon.removeClass("la-sun-o").addClass("la-moon-o");
  } else {
      theme = "auto";
  }

  $("html").attr("data-bs-theme", theme);
  setCookie("theme", theme);
}

$(document).ready(function () {
  let theme = $("html").attr("data-bs-theme");
  let themeIcon = $("#theme-icon");

  if (theme && (theme == "dark" || document.cookie.indexOf("theme=dark") > 0)) {
      themeIcon.removeClass("la-sun-o").addClass("la-moon-o");
  } else {
      themeIcon.removeClass("la-moon-o").addClass("la-sun-o");
  }

  $("#color-theme-switch").click(function () {
      toggleDarkMode();
  });
});










// product page
$('.quantity').on('click', '.btn-plus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return ++value;
	}).change();
	return false;
});

$('.quantity').on('click', '.btn-minus', function (e) {
	$("input[type=number]", this.parentNode).val(function( index, value ) {
	  return Math.max(--value, 1);
	}).change();
	return false;
});

function zoom(e) {
    var img = e.currentTarget;
    offsetX = e.offsetX || (e.touches ? e.touches[0].pageX : 0);
    offsetY = e.offsetY || (e.touches ? e.touches[0].pageY : 0);
	
	x = offsetX / img.offsetWidth * 100; 
	y = offsetY / img.offsetHeight * 100; 
	img.style.backgroundPosition = x + "% " + y + "%";
}

$('div.zoom').on('mousemove', zoom);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', { scope: '/' })
        .then(function (registration){console.log('Service worker registered successfully');})
        .catch(function (e){console.error('Error during service worker registration:', e);});
}


