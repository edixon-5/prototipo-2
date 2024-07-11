// Variables globales
let cards = [];
let flippedCards = [];
let matches = 0;
let attempts = 0;

// Función para crear las cartas
function createCards() {
  const cardValues = ['blue', 'green', 'yellow', 'red', 'blue', 'green', 'yellow', 'red'];
  for (let i = 0; i < 10; i++) {
    const card = {
      value: cardValues[Math.floor(Math.random() * cardValues.length)],
      flipped: false,
      matched: false
    };
    cards.push(card);
  }
}

// Función para mezclar las cartas
function shuffleCards() {
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
}

// Función para mostrar las cartas
function showCards() {
  const cardContainer = document.getElementById('card-container');
  cardContainer.innerHTML = '';
  for (let i = 0; i < cards.length; i++) {
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.dataset.index = i;
    cardElement.addEventListener('click', flipCard);
    cardContainer.appendChild(cardElement);
  }
}

// Función para voltear una carta
function flipCard(event) {
  const cardIndex = event.target.dataset.index;
  const card = cards[cardIndex];
  if (!card.flipped &&!card.matched) {
    card.flipped = true;
    flippedCards.push(card);
    event.target.innerHTML = card.value;
    if (flippedCards.length === 2) {
      setTimeout(checkMatch, 1000);
    }
  }
}

// Función para verificar si hay un match
function checkMatch() {
  const card1 = flippedCards[0];
  const card2 = flippedCards[1];
  if (card1.value === card2.value) {
    matches++;
    card1.matched = true;
    card2.matched = true;
  } else {
    attempts++;
  }
  flippedCards = [];
  showCards();
}

// Inicializar el juego
createCards();
shuffleCards();
showCards();

// Mostrar el estado del juego
setInterval(() => {
  document.getElementById('matches').innerHTML = `Matches: ${matches}`;
  document.getElementById('attempts').innerHTML = `Attempts: ${attempts}`;
}, 1000);
