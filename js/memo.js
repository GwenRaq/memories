
function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
    j.style.transform = 'rotateY(180deg)';
    j.style.transitionDuration = "0.5s"
    if(j.style.transform === 'rotateY(180deg)'){
    	setTimeout(function(){j.style.transform = 'rotate(0deg)';
    },1000);
  }
}
