// var ids = ["ichi","nii","san","shi","go","roku","nana","hachi"];
// var pics = [1,1,2,2,3,3,4,4];
// var i;
var rotationQueue = [];
var picQueue = [];
var okay = 0; 

// function randomizer() {
// 	console.log("k");
//   for (i = 0; i < 8; i++){  
// 		var randomNum = Math.floor(Math.random()*(pics.length));
// 		var setImg = document.getElementsByClassName("back")[i];
// 		if (pics[randomNum] === 2 || pics[randomNum] === 3) {
// 			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".png')";
//       		setImg.id = ""+pics[randomNum]+"";
// 		} else {
// 			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".png')";
//       		setImg.id = ""+pics[randomNum]+"";
// 		}
// 		pics.splice(randomNum, 1);
// 	}
// randomizer();

 function flipDis(clicked_id) {
  document.getElementById(clicked_id).style.transform = 'rotateY(180deg)';
  var idMatch = showBack.getElementsByClassName("back")[0].id;
  	if(rotationQueue.length < 2){
    	rotationQueue.push(clicked_id); 
    	picQueue.push(showBack.getElementsByClassName("back")[0].id;); 
  } 
console.log(okay);
  if (rotationQueue.length == 2) {
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
    }, 1000);
    setTimeout(function() {
      rotationQueue.splice(0, 2);
      picQueue.splice(0, 2);
    }, 1050);
	}
}

//  function flipDis(clicked_id) {
//   document.getElementById(clicked_id).style.transform= 'rotateY(180deg)';

//   if(document.getElementById(clicked_id).style.transform === 'rotateY(180deg)'){
//     setTimeout(function(){
//     document.getElementById(clicked_id).style.transform = 'rotateY(0deg)';
//     },1000);
//   }
// }
