let cuadrado = 0;

alert("Bienvenido a calculo de cuadrado, primero se calcula su perimetro y luego su superficie, primero inserte el lado del cuadrado");

cuadrado = prompt("El lado del cuadrado es:");

function perimetro_cuadrado(L) {
    L = L *4;
    document.write("<h2> El perimetro de ese cuadrado es: " + L + "</h2>");
}

function superficie_cuadrado(L) {
    L = L * L;
    document.write("<h2> La superficie de ese cuadrado es: " + L + "</h2>");
}

perimetro_cuadrado(cuadrado);

superficie_cuadrado(cuadrado);