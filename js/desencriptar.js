var cajaTexto = document.querySelector ("#textEncriptar");
var botonDesencriptar = document.querySelector ("#desencriptar");
var botonesEncriptar = document.querySelector("#botones_encriptar");
cajaTexto.focus();

cajaTexto.addEventListener ("input", function(){
    var TextAreemplazar = document.querySelector (".ingresar_texto_encriptador2");
    var Rep = TextAreemplazar.value; 
    var EncriptarTexto =  Rep.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");

    var BotonDesencriptar = document.querySelector ("#desencriptar");
    BotonDesencriptar.addEventListener ("click", function(event){
        event.preventDefault();
        var CajaParaCopiar = document.querySelector ("#tarea");
        CajaParaCopiar.textContent= EncriptarTexto;  
        botonesEncriptar.reset();
        TextAreemplazar.innerHTML="";
        cajaTexto.focus();
    });

    
});