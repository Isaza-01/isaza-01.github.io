var BotonCopiar = document.querySelector (".botonCopiar");
var resetCopiar = document.querySelector ("#tarea");

BotonCopiar.addEventListener ("click",function(event){
    event.preventDefault ();
    

    //creación del botón pegar
    var botonesInvisibles = document.querySelector (".botones");
    botonesInvisibles.classList.add ("invisible");
    var botonPegar = document.createElement ("button");
    botonPegar.setAttribute("id", "botonPegar");

    var BotonDescripcion = document.createElement ("p");
    botonPegar.classList.add("botones","encriptar","encriptar:hover");
    var botonNuevo = document.querySelector ("#botonNuevo");
    
    botonNuevo.appendChild(botonPegar);
    botonPegar.appendChild (BotonDescripcion);
    var p = "Pegar";
    BotonDescripcion.textContent = p;

    //hasta aquí

    //capturar el valor de la caja textarea para poderla copiar y enviar a la otra caja de encriptación
    var inputCopiar = document.querySelector (".ingresar_texto_encriptador2");
    var textoCajaCopiar =document.querySelector ("#tarea");
    var copiandoTexto = textoCajaCopiar.value;
    inputCopiar.textContent = copiandoTexto;
    inputCopiar.classList.add ("invisible");

    resetCopiar.innerHTML="";

    var btonPegar = document.querySelector ("#botonPegar");
    btonPegar.addEventListener ("click",function(event){
        event.preventDefault();
        inputCopiar.classList.remove("invisible");

        botonPegar.classList.add ("invisible");
        botonesInvisibles.classList.remove("invisible");

    });

});



