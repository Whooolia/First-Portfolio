window.onscroll = function(){
	scrollToTop();
}

function scrollToTop() {
	if(document.documentElement.scrollTop > 150) {
		document.getElementById("back-to-top").style.display = "block";
	} else {
		document.getElementById("back-to-top").style.display = "none";
	}
};


var button = document.querySelector("button");
	button.addEventListener("click", function() {
});

document.querySelector(".menu h3 a.myself").addEventListener("click", function() { 
    document.querySelector(".aboutMe").scrollIntoView({behavior: "smooth", block: "start"}); 
});

document.querySelector(".menu h3 a.whyMe").addEventListener("click", function() { 
    document.querySelector(".why").scrollIntoView({behavior: "smooth", block: "start"}); 
});

document.querySelector(".menu h3 a.contactMe").addEventListener("click", function() { 
    document.querySelector(".contact").scrollIntoView({behavior: "smooth", block: "start"}); 
});

document.querySelector("body a#back-to-top").addEventListener("click", function() { 
   window.scroll({top:0, behavior : "smooth"})
});