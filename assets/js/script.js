// EJERCICIO 3 - LINEA 1 A LINEA 37

// Codigo entregado por D. Latam

// function pintar() {
//     ele = document.getElementById("ele1")
//     ele.style.backgroundColor = 'yellow'
// }
// ele = document.getElementById("ele1")
// ele.addEventListener("click", pintar);


// Ejercicio 3.1 Modificar la función para que reciba el elemento clickeado sin llamarlo dentro de la función

elemento = document.querySelector('#ejercicio');

function colorFuente() {
    elemento.style.color = color;
}

// Ejercicio 3.2 Definir el color verde por defecto

function colorFuente2(color = "green") {
    elemento.style.color = color;
}

// Llamar la función para mostrar el color por defecto

colorFuente2();

// Click para cambiar el color a amarillo

elemento.addEventListener("click", () => {
    colorFuente2('yellow');
})

// Ejercicio 3.3 consiste en estructurar js dentro de assets (arbol de carpetas)

// EJERCICIO 4 - LINEA 41 A LINEA 82

const div1=document.querySelector('#div1');
const div2=document.querySelector('#div2');
const div3=document.querySelector('#div3');
const div4=document.querySelector('#div4');

// Guardo colores en variables
const colorA="red";
const colorS="yellow";
const colorD="green";

// Creo una variable global para guardar la tecla elegida por el usuario

var color;


document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color=colorA;
    } else if (event.key === 's' || event.key === 'S') {
        color=colorS;
    } else if (event.key === 'd' || event.key === 'D'){
        color=colorD;
    }
})

function colorDiv(div){
    div.style.backgroundColor=color;
}

div1.addEventListener("click", function (){
    colorDiv(div1);
});

div2.addEventListener("click", function (){
    colorDiv(div2);
});
div3.addEventListener("click", function (){
    colorDiv(div3);
});
div4.addEventListener("click", function (){
    colorDiv(div4);
});