var preguntas= [
    "¿Cuál es el modelo de celular que Samsung ha sacado junto al grupo?",
    "¿Cuando debuto la banta?",
    "¿Con que musica debutaron?",
    "¿Que color se identifica el fandom?",
    "¿Cómo se iba a llamar el fandom?", 
    "¿Cuál es el verdadero nombre del CEO de BTS?",
    "¿Cómo se llamo el ultimo concierto de BTS del 2022?"
    ]
    
    var opciones= [
    ["J-Hope", "RM", "Jin", "Jimin", "V"],
    ["2015", "2001", "2019", "2013", "1999 "],
    ["Danger", "Dynamite", "No more dream", "spray day", "butter"],
    ["Verde", "rosado", "morado", "azul", "rojo"],
    ["bell", "Stay", "MOA", "Once", "blink"],
    ["Hitman Bang","Andy", "Lee Soo Man", "YG", "Park Jin Young"],
    ["Butter", "more", "permission to dance", "Yet to come","Dynamite" ]
    ];
    
    var puntaje =[
    [0, 5, 0, 0, 0],
    [0, 0, 0, 5, 0],
    [0, 0, 5, 0, 0],
    [0, 0, 5, 0, 0],
    [5, 0, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [0, 0, 0, 5, 0]
    ];
    
    
    
    var i=0 
    
    function siguientePregunta() {
        document.getElementById ("pregunta").innerHTML = preguntas [i];
    
        document.getElementById("op1"). innerHTML = opciones [i][0];
        document.getElementById("op2"). innerHTML = opciones [i][1];
        document.getElementById("op3"). innerHTML = opciones [i][2];
        document.getElementById("op4"). innerHTML = opciones [i][3];
        document.getElementById("op5"). innerHTML = opciones [i][4];
          
    }
    
    siguientePregunta();
    
    var puntajeactualizado = 0;
    
    function actualizarPuntaje(alternativa){
        puntajeactualizado = puntaje[i][alternativa] + puntajeactualizado;
    
            i++; 
            if(i<preguntas.length){
                siguientePregunta();
                }   
    
        else{
            mostrarResultado();
    
        }
    }
    
    document.getElementById("op1").addEventListener("click", function() {actualizarPuntaje (0)  });
    document.getElementById("op2").addEventListener("click", function() {actualizarPuntaje (1)  });
    document.getElementById("op3").addEventListener("click", function() {actualizarPuntaje (2)  });
    document.getElementById("op4").addEventListener("click", function() {actualizarPuntaje (3)  });
    document.getElementById("op5").addEventListener("click", function() {actualizarPuntaje (4)  });
    
    function mostrarResultado(){
        document.getElementById("titulo").innerHTML = "RESULTADOS";
        document.getElementById("pregunta").innerHTML = "El puntaje obtenido es: " + puntajeactualizado + " de 35 puntos"; 
        document.getElementsByClassName("Opciones") [0].innerHTML = "  ";
    
    //AÑADIENDO UNA IMAGENS:
    
        var imagen = document.createElement("img")
        imagen.setAttribute("src", "https://www.elsureste.com.mx/wp-content/uploads/2022/10/BTS.jpg")
    
        imagen.setAttribute("width", 450);
        imagen.setAttribute("height", 260);
        
        document.getElementsByClassName("Opciones") [0].appendChild(imagen) }
