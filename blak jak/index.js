let cards =[] 
let sum = 0
let  Blackjack = false
let Isalive = false
let msg = ""

let messagEL= document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardEL = document.getElementById("card-el")
console.log(cards)

let player = {
    name : "per",
    chips : 145
}

playerEL = document.getElementById("player-el")
playerEL.textContent = player.name + ": $" + player.chips

function rendergame() { 
    cardEL.textContent =  "cards:" 
    for (i = 0; i < cards.length; i++){
            cardEL.textContent += cards [i] + " "
    }

    if(sum<=20){
   msg ="Do you want to draw a new card?"
  
} else if(sum === 21){
   msg ="you got a blackjack"
    Blackjack = true
}else{
    msg ="you are out of the game"
    Isalive = false
}
messagEL.textContent = msg

    sumEL.textContent = "sum: "  + sum
}

function newcard(){
    if (Isalive === true && Blackjack === false){
        let card = getrandom()
      sum+= card
      cards.push(card)
      console.log(cards)
      rendergame()
    }
      
} 



function startgame(){
    Isalive=true
    let firstcard = getrandom()
    let secondcard = getrandom()
    cards =[firstcard ,secondcard] 
    sum = firstcard + secondcard 
    rendergame()
}  

function getrandom(){
   let rn = Math.floor(Math.random() * 13) + 1
   if(rn > 10){
    return 10
   }else if(rn === 1){
    return 11
   }else{
    return rn
   }
}