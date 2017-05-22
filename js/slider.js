var controllers = document.getElementsByClassName("slide__controll-item");
var slider = document.getElementsByClassName("section1__slider")[0];

for (var i = 0; i < controllers.length; i++){
	controllers[i].setAttribute("slide-number", i);

	controllers[i].onclick = function(){
	
		for (var j = 0; j < controllers.length; j++){
			controllers[j].removeAttribute("id");
		}
		
		this.setAttribute("id", "slide-active");

		slider.style.marginLeft = (-1254 * this.getAttribute("slide-number")) + "px";
		slider.style.transition = "all 1.0s";
	}
};
