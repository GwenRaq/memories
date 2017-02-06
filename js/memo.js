
function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
    j.style.transform = 'rotateY(180deg)';
    j.style.transitionDuration = "0.5s"
    if(j.style.transform === 'rotateY(180deg)'){
    	setTimeout(function(){j.style.transform = 'rotate(0deg)';
    },1000);
  }
}

var images = ["a","b", "c", "d","e","f","g","h"];

// get images, place them in an array & randomize the order
for (var i = 0; i < 8; i++) { 
  var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
  var img = '../memories/assets/card' + rand + '.jpg';
  images.push(img);
  images.push(img);
}
randomizeImages();