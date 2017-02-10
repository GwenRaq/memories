
function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
    j.style.transform = 'rotateY(180deg)';
    j.style.transitionDuration = "0.5s"
    if(j.style.transform === 'rotateY(180deg)'){
    	setTimeout(function(){j.style.transform = 'rotate(0deg)';
    },1000);
  }


// var images = [];
// images[0] = '../memories/assets/card/yess.png';
// images[1] = '../memories/assets/card/yess.png';
// images[2] = '../memories/assets/card/pandaburd.png';
// images[3] = '../memories/assets/large.gif';
// images[4] = '../memories/assets/card/carot.png';
// images[5] = '../memories/assets/card/pandaburd.png';
// images[6] = '../memories/assets/card/carot.png';
// images[7] ='../memories/assets/large.gif';

// var clicks = 0;
// var firstSelect;
// var secondSelect;

// function select(card){
//   if(clicks === 2 && j.style.transform === 'rotateY(180deg)'){
//     return;
//   }
//   if(clicks === 0){
//     firstSelect = card;
//     document.images[card].src = cardImage[card];
//     clicks = 1;
//   } else {
//     clicks = 2;
//     secondSelect = card;
//     document.images[card].src = cardImage[card];
//     timer = setInterval("check()", 1000);
//   }
//   console.log('poop', clicks);
//   console.log('selection', firstSelect);
//   console.log('selection2', secondSelect);
// }


// 	var pic=[1,1,2,2,3,3,4,4];
// 	for (var i = 0; i < 8; i++) {
// 		document.getElementById(images[i]).style.display="inline";
// 		var randomNumber =  Math.floor(Math.random() * (images.length));
// 		//document.getElementsByClassName("front")[i].style.backgroundImage = "url('../memories/assets/card/"+pic[randomNumber]+".png')";
// 		//pair.push([images[i],pic[randomNumber]]);
// 		pic.splice(randomNumber, 1);
// 	}
// }
// randis();