let area = document.getElementById("area");

let imagen = document.createElement("div");

area.appendChild(imagen);

imagen.setAttribute("id", "imagen");

let insimagen = document.createElement("img");

insimagen.setAttribute("src", "/imagen clipart.jpg");

imagen.appendChild(insimagen);

let titulo = document.createElement("div");

area.appendChild(titulo);

titulo.setAttribute("id", "titulo");

let institulo = document.createElement("p");

titulo.appendChild(institulo);

institulo.innerHTML = "<h1> Como añadir un efecto a una imagen</h1>"

let cuerpo = document.createElement("div");

area.appendChild(cuerpo);

cuerpo.setAttribute("id", "cuerpo");

let instext = document.createElement("p");

cuerpo.appendChild(instext);
instext.innerHTML = "Existen muchos plugins para insertar efectos especiales a las imagenes cuando se les pasa el cursor por encima. Todos esos plugins añaden un moton de codigo a la pagina, que termina afectando a la velocidad de la web en si. Si quieres utilizar muy poco codigo para asi optimizar la carga de tu web, nuestro script para generar un efecto de zoom es perfecto para ti."

let boton = document.createElement("div");

area.appendChild(boton);

boton.setAttribute("id", "boton");

let insboton = document.createElement("p");

boton.appendChild(insboton);

insboton.innerHTML = "Leer mas";