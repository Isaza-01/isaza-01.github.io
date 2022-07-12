var cajaTexto = document.querySelector ("#textEncriptar");
var botonEncriptar = document.querySelector ("#encriptar");
var botonesEncriptar = document.querySelector("#botones_encriptar");
cajaTexto.focus();

cajaTexto.addEventListener ("input", function(){
    var TextAreemplazar = document.querySelector (".ingresar_texto_encriptador2");
    var Rep = TextAreemplazar.value; 
    var EncriptarTexto =  Rep.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    var BotonEncriptar = document.querySelector ("#encriptar");
    BotonEncriptar.addEventListener ("click", function(event){
        event.preventDefault();
        var CajaParaCopiar = document.querySelector ("#tarea");
        CajaParaCopiar.textContent= EncriptarTexto;  
        botonesEncriptar.reset();
        
        cajaTexto.focus();
    });

    
});






