var actualizado = document.getElementById ("titulo"); 
console.log(actualizado); 

var actualizado2= document.getElementsByClassName("titulo_principal");
console.log(actualizado2);

document.getElementById("titulo").innerHTML= "APRENDIENDO MAS DE JAVASCRIPT";


function datos(){

    var nombres= document.getElementById("nombre").value; 
    
    localStorage.setItem("textvalue",nombres); //texvalue = nombre 

}