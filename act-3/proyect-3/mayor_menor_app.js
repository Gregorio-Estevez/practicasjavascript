let numup = 0;
let numup2 = 0;
let numup3 = 0;

alert("Bienvenido usuario, este proyecto consta de una comparacion de numeros, asi que coloque lo que se le indique");


function mayor_menor(a,b,c){


    
    a = prompt("coloque el primer numero");
    b = prompt("coloque el segundo");
    c = prompt("y ahora el tercero");

    if (a == b && b == c) {

        document.write("<h2>Los tres numeros ingresados son iguales</h2>");
        
    }

    else if (a == b && b > c){

        document.write("<h2> Hay dos numeros iguales, siendo el numero mas grande el: "+a+"</h2>");
    }

    
    else if (a > b && a > c){

        document.write("<h2>El numero mas grande es el: "+a+"</h2>");
    }

    else if (a == b && b < c){

        document.write("<h2> Hay dos numeros iguales, siendo el numero mas grande el: "+c+"</h2>");
    }

    
    else if (c > a && c > b){

        document.write("<h2>El numero mas grande es el: "+c+"</h2>");
    }

    else if (a == c && c < b){

        document.write("<h2> Hay dos numeros iguales, siendo el numero mas grande el: "+b+"</h2>");
    }

    
    else if (b > a && b > c){

        document.write("<h2>El numero mas grande es el: "+b+"</h2>");
    }

}

mayor_menor(numup,numup2,numup3)