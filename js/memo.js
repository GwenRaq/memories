
function flip(clicked_id) {
	var j = document.getElementById(clicked_id);
    j.style.transform = 'rotateY(180deg)';
    j.style.transitionDuration = "0.5s"
    if(j.style.transform === 'rotateY(180deg)'){
    	setTimeout(function(){j.style.transform = 'rotate(0deg)';
    },1000);
  }
}
List<Card> shuffled = new ArrayList<Card>();
shuffled.addAll(allCards);

Random random = new Random();
for (int i = shuffled.size() - 1; i >= 0; i--) {
    int j = random.nextInt(i + 1);

    /* swap cards i,j */
    Card card = shuffled.get(i);
    shuffled.set(i, shuffled.get(j));
    shufflet.set(j, card);
}