var ids = ["ichi","nii","san","shi","go","roku","nana","hachi"];
var pics = [1,1,2,2,3,3,4,4];
var i;
var rotationQueue = [];
var picQueue = [];
var okay = 0; 

function randomizer() {
	console.log("k");
  for (i = 0; i < 8; i++){  
		var randomNum = Math.floor(Math.random()*(pics.length));
		var setImg = document.getElementsByClassName("back")[i];
		if (pics[randomNum] === 2 || pics[randomNum] === 3) {
			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".png')";
      		setImg.id = ""+pics[randomNum]+"";
		} else {
			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".png')";
      		setImg.id = ""+pics[randomNum]+"";
		}
		pics.splice(randomNum, 1);
	}
randomizer();

function flipDis(idName) {
	var j = document.getElementById(idName);
 	j.style.transform = 'rotateY(180deg)';
	var idMatch = showBack.getElementsByClassName("back")[0].id;
  	if(rotationQueue.length < 2){
    	rotationQueue.push(idName); 
    	picQueue.push(idMatch); 
//look up how to access id within div
  } 
console.log(okay);
  if (rotationQueue.length == 2) {
    setTimeout (function() {
      if (picQueue[0] == picQueue[1]) {
        document.getElementById(rotationQueue[0]).style.opacity = "0";
        document.getElementById(rotationQueue[1]).style.opacity = "0";
        
      }
    }, 900);
    setTimeout(function(){
      document.getElementById(rotationQueue[0]).style.transform = "rotateY(0deg)";
      document.getElementById(rotationQueue[1]).style.transform = "rotateY(0deg)";
    }, 1000);
    setTimeout(function() {
      rotationQueue.splice(0, 2);
      picQueue.splice(0, 2);
    }, 1050);
