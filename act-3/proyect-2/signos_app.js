let numsig = 0;
let numsig2 = 0;

alert("Bienvenido usuario, este proyecto consta de una comparacion de numeros con signo, asi que coloque lo que se le indique");

function signos(a,b) { 

    let count = 0;

    a = prompt("coloque el primer numero");
    b = prompt("coloque el segundo");

    if (a > 0 && b > 0 ) {

        document.write("<h2>Hay dos numeros positivos, siendo: "+a+" positivo y el "+b+" positivo.</h2>");   
    }

    else if(a < 0 && b < 0){

        document.write("<h2>Hay dos numeros negativos, siendo: "+a+" negativo y el "+b+" negativo.</h2>");
    }

    else{

        if (a < 0 && b > 0) {

            document.write("<h2>Hay un numero positivo y otro negativo siendo: "+a+" negativo y el "+b+" positivo.</h2>");
        } 
        
        else {
            document.write("<h2>Hay un numero positivo y otro negativo siendo: "+a+" positivo y el "+b+" negativo.</h2>");
        }
        
    }
}

signos(numsig,numsig2);