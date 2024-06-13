const cartas = [
    {imagen:"numero-1.png", pareja: 1},
    {imagen:"numero-1.png", pareja: 2},
    {imagen:"numero-1.png", pareja: 3},
    {imagen:"numero-1.png", pareja: 4},
    {imagen:"numero-1.png", pareja: 5},
    {imagen:"numero-1.png", pareja: 6},
];

let carta1 = null;
let carta2 = null;
let aciertos = 0;

const tablero = document.getElementById("tablero");

function barajearCartas() {
    cartas.forEach((carta) => {
        const cartaElement = document.createElement("div");
        cartaElement.classList.add("cartas");
        cartaElement.dataset.imagen = carta.imagen;
        cartaElement.textContent = "?";

        cartaElement.addEventListener("click", () => {
            if (carta1 === null) {
                carta1 = cartaElement;
                carta1.classList.add("volteada");
            } else if (carta2 === null) {
                carta2 = cartaElement;
                carta2.classList.add("volteada");

                if (carta1.dataset.imagen === carta2.dataset.imagen) {
                    aciertos++;
                    carta1.classList.add("pareja");
                    carta2.classList.add("pareja");
                    carta1 = null;
                    carta2 = null;

                    if (aciertos === cartas.length / 2) {
                        alert("¡Ganaste!");
                    }
                } else {
                    setTimeout(() => {
                        carta1.classList.remove("volteada");
                        carta2.classList.remove("volteada");
                        carta1 = null;
                        carta2 = null;
                    }, 500);
                }
            }
        });

        tablero.appendChild(cartaElement);
    });
}

crearCartas();
const squaries = document.querySelectorAll('.squary');

squaries.forEach(squary => {
  squary.addEventListener('click', () => {
    const href = squary.getAttribute('id');
    window.location.href = `./${href}.html`;
  });
});