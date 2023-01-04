// var audio = document.getElementById("audio1");




// function reproduccion(){

//     // audio.play();

//     sonido.play();


// }


let sonido = new Audio("./audios/of-the-bells.mp3")

reproducir.addEventListener("click",function(){
    sonido.volume= 0.3; //el volumen que cees adecuado a tu pagina//
    sonido.playbackRate = 1;  //1 es la velocidad normal//
    sonido.loop= true; //activando nuevamente//
    sonido.play();
})


pausa.addEventListener("click",function(){

    sonido.pause();
})


detener.addEventListener("click", function(){
    // audio.pause();

    sonido.pause();
    sonido.currentTime =  0; 


})

function datos() {

    var nombre = document.getElementById("nombre").value;  
    var apellido = document.getElementById("apellido").value;
    var fecha = document.getElementById("fecha").value;
    var edad = document.getElementById("edad").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var distrito = document.getElementById("distrito").value;
    var mascota = document.getElementById("mascota").value;


        var mensaje = "Bienvedinid@"+ " "+nombre+" "+apellido; 

        document.getElementById("resultados").innerHTML = mensaje;
}