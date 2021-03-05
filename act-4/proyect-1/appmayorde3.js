function mayorde3() {

    alert("bienvendio a el mayor de 3, debera colocar 3 numeros, presione ok para continuar.");

   let a = prompt("el primero");
   let b = prompt("el segundo");
   let c = prompt("el tercero");

    if (a == b && b == c) {
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

   else if (c > b && c > a)
   {
       document.write("<h2>El numero "+c+" es el mas grande</h2>")
   }
}

mayorde3();