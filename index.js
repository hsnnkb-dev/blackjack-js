let hasBlackJack = false;
let cardsArray = [];
let sum = 0;
let isAlive = false;
//console.log(sum);

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Nico",
    chips: 145,
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cardsArray = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;

    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let count = 0; count < cardsArray.length; count++) {
        cardsEl.textContent += cardsArray[count] + ", ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        message = "Blackjack! :)";
        hasBlackJack = true;
    } else {
        message = "Bust! :(";
        isAlive = false;
    }
    //console.log(message);
    messageEl.textContent = message;
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    }
    return randomCard;
}

function drawCard() {
    //console.log("NEW CARD!");
    if (isAlive && (!hasBlackJack)) {
        let newCard = getRandomCard();
        sum += newCard;
        cardsArray.push(newCard);
        renderGame();
    }
}