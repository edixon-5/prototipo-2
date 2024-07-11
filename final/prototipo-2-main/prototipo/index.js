// Variables
const cardGrid = document.querySelector('.card-grid');
const cards = [];
let flippedCards = [];
let matchedCards = [];

// Función para generar las cartas
function generateCards() {
    const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.value = cardValues[i % 6];
        card.addEventListener('click', flipCard);
        cards.push(card);
        cardGrid.appendChild(card);
    }
}

// Función para voltear una carta
function flipCard() {
    if (flippedCards.length < 2) {
        this.classList.add('flip');
        flippedCards.push(this);
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }
}

// Función para verificar si las cartas coinciden
function checkMatch() {
    if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
        matchedCards.push(flippedCards[0]);
        matchedCards.push(flippedCards[1]);
        flippedCards[0].classList.add('match');
        flippedCards[1].classList.add('match');
    } else {
        flippedCards[0].classList.remove('flip');
        flippedCards[1].classList.remove('flip');
    }
    flippedCards = [];
}

// Inicializar el juego
generateCards();



 const colors = ["rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 255)", "rgb(0, 255, 255)"];
        let targetColor = colors[Math.floor(Math.random() * colors.length)];
        let selectedColor = null;
        let messageElement = document.getElementById("message");

        function generateBoxes() {
            const boxesElement = document.getElementById("boxes");
            boxesElement.innerHTML = "";

            for (let i = 0; i < colors.length; i++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundColor = colors[i];
                box.addEventListener("click", function() {
                    selectedColor = this.style.backgroundColor;
                    checkAnswer();
                });
                boxesElement.appendChild(box);
            }
        }

        function checkAnswer() {
            if (selectedColor === targetColor) {
                messageElement.textContent = "Correct! You guessed the right color!";
                generateBoxes(); // Genera nuevos colores para el siguiente juego
            } else {
                messageElement.textContent = "Try again!";
            }
            selectedColor = null;
        }

        generateBoxes(); // Genera los colores iniciales al cargar la página