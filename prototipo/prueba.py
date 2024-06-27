import random

def generar_numero():
    """Genera un numero aleatorio entre el 1 y el 10."""
    return random.randint(1, 10)

def numero_a_nombre(numero):
    """Convierte un número a su nombre en inglés."""
    if numero == 1:
        return "one"
    elif numero == 2:
        return "two"
    elif numero == 3:
        return "three"
    elif numero == 4:
        return "four"
    elif numero == 5:
        return "five"
    else:
        return str(numero)

def juego_de_numeros():
    """Implementa el juego de adivinar el número."""
    numero_objetivo = generar_numero()

    while True:
        try:
            respuesta = int(input("Adivina un número entre 1 y 10: "))
        except ValueError:
            print("Debes ingresar un número entero.")
            continue

        if respuesta == numero_objetivo:
            print(f"¡Felicidades! Adivinaste el número. Era {numero_a_nombre(numero_objetivo)}.")
            break
        elif respuesta < numero_objetivo:
            print(f"El número que estás buscando es mayor.")
        else:
            print(f"El número que estás buscando es menor.")

juego_de_numeros()
