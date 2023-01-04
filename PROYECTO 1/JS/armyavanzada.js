var preguntas= [
    "¿Cuándo debuto BTS?",
    "¿Cómo se llama su último álbum?",
    "¿En qué compañía se encuentra BTS actualmente?",
    "¿Cuál es el verdadero nombre del CEO de BTS?",
    "¿Cuál es el modelo de celular que Samsung ha sacado junto al grupo?", 
    "¿Cuál es el nombre del juego que lanzaron con Mattel de manera digital?",
    "¿Cuántas vistas generó “Dynamite” en las primeras 24 horas luego de su estreno? "
    ]
    
    var opciones= [
    ["1 de Enero del 2013", "13 de Junio del 2013", "9 de Junio del 2014", "30 de Junio del 2008", "7 de Julio del 2014"],
    ["Map of the Soul:7", "Love Yourself", "BTS World", "Proof", "Wings "],
    ["Big Hit Entertainment", "JYP entertaiment", "YG entertaiment", "P-NATION ", "SM"],
    ["Bang Si-hyun", "Bang Si-hyuk", "Bang Shi-hyun", "J.Y. Park", "Yang Hyun Suk"],
    ["Samsung Galaxy S10 BTS", "Galaxy Buds+ BTS Edition", "Samsung Galaxy S20+ BTS", "Apple-BTS", "Hawei-x BTS"],
    ["Pictionary","Scrabble", "UNO", "LOL", "Fee Fire"],
    ["101.1 millones de vistas", "200 millones de vistas", "90 mil vistas", "49 millones","500.827 millones" ]
    ];
    
    var puntaje =[
    [0, 5, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [5, 0, 0, 0, 0],
    [0, 5, 0, 0, 0],
    [0, 0, 5, 0, 0],
    [0, 0, 5, 0, 0],
    [5, 0, 0, 0, 0]
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
        imagen.setAttribute("src", "https://lumiere-a.akamaihd.net/v1/images/bts_10e2829a.jpeg?region=0,409,4096,2304&width=960")
    
        imagen.setAttribute("width", 450);
        imagen.setAttribute("height", 260);
        
        document.getElementsByClassName("Opciones") [0].appendChild(imagen) 


    //AÑADIENDO EL BOTON DE VOLVER

        var form=document.createElement("form");
form.action=("./portada.html");
document.getElementsByClassName("Opciones") [0].appendChild(form);

var input=document.createElement("input");
input.type=("submit") ;
input.class=("volver");
input.value=("VOLVER");
form.appendChild(input)
}
