function openModal(){
    var modal = document.getElementById("addCardModal");
    var span = document.getElementsByClassName("close")[0];

    modal.classList.add("show");

    span.onclick = function() {
        modal.classList.remove("show");
    }

    window.onclick = function(event) {
        if (event.target == modal) {
        modal.classList.remove("show");
        }
    }
}

function addCard(){
  		var character = document.getElementById("character_input").value;
  		var translation = document.getElementById("translation_input").value;
  		var meaning = document.getElementById("meaning_input").value;
  		var flashcard = {
  			"character":character,
  			"translation":translation,
  			"meaning":meaning
          }

          console.log("reached add card and variables");
          
        // Get card collections
  		var allCards = null
		var storedCardsString = localStorage["all_cards"]
		if(storedCardsString == null){
			allCards = []
		}
		else{
			allCards = JSON.parse(storedCardsString)
        }
        
        // Add the new card to the collection
        allCards.push(flashcard)
        
        // Updates the card collection and displays
		var allCardsString = JSON.stringify(allCards)
		localStorage["all_cards"] = allCardsString
		showAllCards()

        // clears input fields
        var modal = document.getElementById("addCardModal");
        modal.classList.remove("show");
		document.getElementById("character_input").value = null
		document.getElementById("translation_input").value  = null
		document.getElementById("meaning_input").value = null
      }
      
function showAllCards(){
    var storedCardsString = localStorage["all_cards"]
    if(storedCardsString != null){
        var allCards = JSON.parse(storedCardsString)
        var cardDisplay = document.getElementById("displayCards")
        cardDisplay.innerHTML = null;
        for (var i = 0; i < allCards.length; i++) {
            var card = allCards[i]
            cardDisplay.innerHTML += 
            "<section class='card'><div class='inner-card'><div class='front'><p class='character'>"
            + card["character"] +"</p></div>"+"<div class='back'><div class='back-items'><p class='roman'>romaji: "
            + card["translation"] +"</p>"+"<p class='meaning'>Translation: <span>"
            + card["meaning"] +"</span></p></div></div></div></section>"
        }
    }
}