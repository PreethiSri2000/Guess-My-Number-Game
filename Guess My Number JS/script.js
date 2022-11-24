'use strict';

//dom manipulation

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
}

const displayNumber = function (number) {
    document.querySelector(".number").textContent = number;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
        displayMessage("❌No Number❌");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number !!");
        displayNumber(secretNumber);
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "#60b347";
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too High !!" : "📉 Too Low !!");
            score--;
            document.querySelector(".score").textContent = score;
            document.querySelector("body").style.backgroundColor = "blue";
        } else {
            displayMessage("You lost the game 🤕");
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }

    //else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📈 Too High !!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         document.querySelector("body").style.backgroundColor = "blue";
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game 🤕";
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor = "#60b347";
    //     }

    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉 Too Low !!";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //         document.querySelector("body").style.backgroundColor = "blue";
    //     } else {
    //         document.querySelector(".message").textContent = "You lost the game 🤕";
    //         document.querySelector(".score").textContent = 0;
    //         document.querySelector("body").style.backgroundColor = "red";
    //     }

    // }

});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".score").textContent = score;
    displayMessage("Start Guessing....");
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector(".number").style.width = "15rem";
    displayNumber("?");

});