
function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
    j.style.transform = 'rotateY(180deg)';
    j.style.transitionDuration = "0.5s"
    if(j.style.transform === 'rotateY(180deg)'){
    	setTimeout(function(){j.style.transform = 'rotate(0deg)';
    },1000);
  }
}


var images = ["url('../memories/assets/card/yess.png')", "url('../memories/assets/card/pandaburd.png')","url('../memories/assets/card/pandaburd.png')","url('../memories/assets/large.gif')",];

function randis(){
	var pic=[1,1,2,2,3,3,4,4];
	for (var i = 0; i < 8; i++) {
		document.getElementById(images[i]).style.display="inline";
		var randomNumber =  Math.floor(Math.random() * (images.length));
		//document.getElementsByClassName("front")[i].style.backgroundImage = "url('../memories/assets/card/"+pic[randomNumber]+".png')";
		//pair.push([images[i],pic[randomNumber]]);
		pic.splice(randomNumber, 1);
	}
}
randis();