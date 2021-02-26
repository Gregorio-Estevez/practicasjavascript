let voc = '';
let valit = /d{1}/;

alert("Bienvenido usuario, este proyecto consta de una comparacion de valores escritos, asi que coloque lo que se le indique");


function vocal_o_caracter(a){

    a = prompt("coloque UN SOLO VALOR").toLowerCase();
    while(valit.test(a)) {
    
        a = prompt("recuerde... UN CARACTER");
    }
    
    if (a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u') {
    
        document.write("<h2>Usted coloco una vocal</h2>");
    
    }
    
    else {
        document.write("<h2>Usted coloco otro caracter</h2>");
    }
}

vocal_o_caracter(voc);
