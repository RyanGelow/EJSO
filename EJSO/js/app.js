function myFunction() {
	var x = document.getElementById("navbar");
	if (x.className === "topnav") {
		x.className += "responsive";
	} else {
		x.className = "topnav";
	}
}

$(document).scroll(function() {
	if 
($(document).scrollTop() > 80) {
	$(".ejso_logo").addClass("shrink");
	$(".soca").addClass("backsoca")
	}
	else
	{
	$(".ejso_logo").removeClass("shrink");
	$(".soca").removeClass("backsoca");
	}
})