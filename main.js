let cambio_de_color = document.querySelector(".box");
let boton = document.querySelector(".btn1");
let boton2 = document.querySelector(".btn2");


function cambiarDato(){
    cambio_de_color.innerHTML= '<div class="rojo"> </div>';

}

function cambiarDato2(){
    cambio_de_color.innerHTML= '<div class="verde"> </div>';

}

boton.addEventListener("click", cambiarDato);
boton2.addEventListener("click", cambiarDato2);



