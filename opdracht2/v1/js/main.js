var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

jQuery(function($){
	$(document).keydown(function(e){
		switch(e.keyCode){
			case 37: {//left arrow
				$('.ps_prev').trigger('click');
				break;
			}
			case 39: {//right arrow
				$('.ps_next').trigger('click');
				break;
			}
		}
		if(Math.abs(e.keyCode - 38) === 1){
			e.preventDefault();
		}
	});
});
