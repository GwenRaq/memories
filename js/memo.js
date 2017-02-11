
var ids = ["a","b","c","d","e","f","g","h"];
var pics = [1,1,2,2,3,3,4,4];
var i;

function randomizer() {
  for (i = 0; i < 8; i++){  
		var randomNum = Math.floor(Math.random()*(pics.length));
		var setImg = document.getElementsByClassName("back")[i];
		if (pics[randomNum] === 2 || pics[randomNum] === 3) {
			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".png')";
      		setImg.id = ""+pics[randomNum]+"";
		} else {
			setImg.style.backgroundImage = "url('../memories/assets/card"+pics[randomNum]+".jpeg')";
      		setImg.id = ""+pics[randomNum]+"";
		}
		cardPics.splice(randomNum, 1);
	}

function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
 	j.style.transform = 'rotateY(180deg)';
	var idMatch = showBack.getElementsByClassName("back")[0].id;
  	if(rotationQueue.length < 2){
    	rotationQueue.push(clicked_id); 
    	picQueue.push(idMatch); 
//look up how to access id within div
  } 
console.log(x);
}


// function flip(idName) {
//   var showBack = document.getElementById(idName);
//   showBack.style.transform = "rotateY(180deg)";
 

//   //checks if two cards are flipped   
//   var idMatch = showBack.getElementsByClassName("back")[0].id;
//   if(rotationQueue.length < 2){
//     rotationQueue.push(idName); 
//     picQueue.push(idMatch); 
//     //^ after seeing that pic ids are sam   e, deletes divs, look up how to access id within div
//   } 
//   console.log(x);
