var dropdown_list = document.getElementsByClassName("section__faq__question");

for (var i = dropdown_list.length - 1; i >= 0; i--) {
	dropdown_list[i].onclick = function() {

		if (this.getAttribute('id')=='active-answer'){
			for (var j = dropdown_list.length - 1; j >= 0; j--) { 
				dropdown_list[j].parentElement.childNodes[1].removeAttribute("id");
				dropdown_list[j].parentElement.childNodes[3].style.height = "0px";
				this.style.color = "white";
				this.style.borderColor = "white";

				
				//this.parentElement.parentElement.childNodes[j].childNodes[j].style.color = "white";
				// console.log(this.parentElement.parentElement.childNodes[j]);
			}
		}
		else{

			for (var j = dropdown_list.length - 1; j >= 0; j--) {
				dropdown_list[j].parentElement.childNodes[1].removeAttribute("id");
				dropdown_list[j].parentElement.childNodes[3].style.height = "0px";
				dropdown_list[j].parentElement.childNodes[1].style.color = "white";
                dropdown_list[j].parentElement.childNodes[1].style.borderColor = "white";
			}

			this.style.color = "#fca211";
			this.style.borderColor = "#fca211";
			// this.parentElement.parentElement.childNodes[j].childNodes[j].style.color = "#fca211";

			var sum_height = 0;
			var current = this.parentElement.childNodes[3];
			
			for (var i = current.childNodes.length - 2; i >= 0; i=i-2) {
				sum_height = sum_height+current.childNodes[i].offsetHeight;
			}
			
			current.style.transition = "all 0.5s";
			current.style.height = sum_height+"px";

			this.setAttribute("id", "active-answer");
		}
	} 
}