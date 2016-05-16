window.addEventListener("load", function(){
	var load_screen = document.getElementById("load_screen");
    $("#loader").delay(1000).fadeOut(1950);
    setTimeout(function(){$("#load_screen").fadeOut(2000)}, 2000);
});