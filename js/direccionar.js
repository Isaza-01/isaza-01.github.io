var invisibleM = document.querySelector (".invisible");
var enviar = document.querySelector (".ingresar_texto");
var enlace= enviar.querySelector ("#dir");

 function invisible (){
    if(invisibleM){
        invisibleM.classList.remove("invisible");
    }
 }setTimeout (invisible,6000);

enlace.addEventListener ("click",function(){
    var link = enlace.querySelector ("a");
    link.classList.add("link");
    link.setAttribute ("href","#textEncriptar");
});


