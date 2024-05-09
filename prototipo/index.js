const cards = document.querySelectorAll('.card');
let flippedCards = [];
let mathCount = 0;
cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});
function flipCard() {
    this.classList.toggle('flipped');
    flippedCards.push(this)
    if (flippedCards.length == 2) {
        checkMath();
    }
}
function checkMath() {
    const card1Value = flippedCards[0].dataset.card;
    const card2Value = flippedCards[1].dataset.card;
    if (card1Value == card2Value) {
        mathCount++;
        flippedCards = [];
    } else {
        setTimeout(() => {
          flippedCards.forEach((card) => card.classList.remove('flipped'));
          flippedCards = [];
        }, 1000);
    }
}
