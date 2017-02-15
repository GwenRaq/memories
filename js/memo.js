// var ids = ["ichi","nii","san","shi","go","roku","nana","hachi"];
// var pics = [1,1,2,2,3,3,4,4];
// var i;
// var rotation = [];
// var waitpic = [];
// var okay = 0; 

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

//  function flipDis(clicked_id) {
//   document.getElementById(clicked_id).style.transform = 'rotateY(180deg)';
//   var idMatch = showBack.getElementsByClassName("back")[0].id;
//   	if(rotation.length < 2){
//     	rotation.push(clicked_id); 
//     	waitpic.push(idMatch); 
//   } 
// console.log(okay);
//   if (rotation.length == 2) {
//     setTimeout(function(){
//       document.getElementById(rotation[0]).style.transform = "rotateY(0deg)";
//       document.getElementById(rotation[1]).style.transform = "rotateY(0deg)";
//     }, 1000);
//     setTimeout(function() {
//       rotation.splice(0, 2);
//       waitpic.splice(0, 2);
//     }, 1050);
// 	}
// }

 function flipDis(clicked_id) {
  document.getElementById(clicked_id).style.transform= 'rotateY(180deg)';

  if(document.getElementById(clicked_id).style.transform === 'rotateY(180deg)'){
    setTimeout(function(){
    document.getElementById(clicked_id).style.transform = 'rotateY(0deg)';
    },1000);
  }
}
