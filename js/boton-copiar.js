var BotonCopiar = document.querySelector (".botonCopiar");
var resetCopiar = document.querySelector ("#tarea");

BotonCopiar.addEventListener ("click",function(event){
    event.preventDefault ();
    var botonesInvisibles = document.querySelector (".botones");
    botonesInvisibles.classList.add ("invisible");

    //capturar el valor de la caja textarea para poderla copiar y enviar a la otra caja de encriptación
    var inputCopiar = document.querySelector (".ingresar_texto_encriptador2");
    var textoCajaCopiar =document.querySelector ("#tarea");
    var copiandoTexto = textoCajaCopiar.value;
    inputCopiar.textContent = copiandoTexto;
    inputCopiar.classList.add ("invisible");

    
    
    //creación del botón pegar
    var botonPegar = document.createElement ("button");
    botonPegar.setAttribute("id", "botonPegar");
    var contenidoBoton = document.createElement ("p");
    botonPegar.classList.add("botones","encriptar","encriptar:hover");
    botonesInvisibles.appendChild (botonPegar);
    botonPegar.appendChild (contenidoBoton);
    var p = "Pegar";
    contenidoBoton.textContent = p;
    //hasta aquí

    resetCopiar.innerHTML="";

    var botonPegar = document.querySelector ("#botonPegar");
    botonPegar.addEventListener ("click",function(event){
    
        event.preventDefault();
        inputCopiar.classList.remove("invisible");
        botonPegar.classList.add ("invisible");
        botonesInvisibles.classList.remove("invisible");
    });

});






