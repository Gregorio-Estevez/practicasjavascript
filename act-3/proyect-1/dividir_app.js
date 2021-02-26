//Proyecto division

let numdiv = 0;
let numdiv2 = 0;

alert("Bienvenido usuario, este proyecto consta de una division, asi que coloque lo que se le indique");

function division(a,b){

    let resultado;

    a = prompt("coloque el dividendo");

    b = prompt("coloque el divisor");

    if(b == 0)
    {
        resultado = "No es posible dividir entre 0";
        return resultado;
    }

    else
    {
        resultado = a/b;
        return resultado;
    }

    
}

document.write("<h2>El resultado de la division es = "+division(numdiv,numdiv2)+" </h2>");