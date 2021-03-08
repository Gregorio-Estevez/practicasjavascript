alert("bienvendio a el mayor de 3, debera colocar 3 numeros, presione ok para continuar.");

let num1 = parseInt(prompt("el primero"));
let num2 = parseInt(prompt("el segundo"));
let num3 = parseInt(prompt("el tercero"));


function mayorde3(a,b,c) {

   

  

    if (a == b && a == c) {
        document.write("<h2>Los tres insertados son iguales<h2>");
    }

   else if (a > b && a > c)
   {
       document.write("<h2>El numero "+a+" es el mas grande</h2>")
   }

   
   else if (b > a && b > c)
   {
       document.write("<h2>El numero "+b+" es el mas grande</h2>")
   }

   else 
   {
       document.write("<h2>El numero "+c+" es el mas grande</h2>")
   }
}

mayorde3(num1,num2,num3);