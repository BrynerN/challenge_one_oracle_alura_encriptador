const inputtexto =  document.querySelector(".input_texto1")
const mensaje = document.querySelector(".input_texto2")

//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

   function btnencriptar()  {
        if (inputtexto.value == " " || inputtexto.value.length == 0 ) {
                alert ("Ingresa un Texto"); 
                location.reload(true);
        }
        else {
                mensaje.value = encriptar (inputtexto.value); 
                mensaje.style.backgroundImage="none";
                inputtexto.value = ""
        } 

    }

    function btndesencriptar()  {
        if (inputtexto.value == " " || inputtexto.value.length == 0 ) {
                alert ("Ingresa un Texto"); 
                location.reload(true);
        }
        else {
                mensaje.value = desencriptar (inputtexto.value); 
                mensaje.style.backgroundImage="none";
                inputtexto.value = ""
        } 

    }

    function copiado()  {
        mensaje.select()
        navigator.clipboard.writeText (mensaje.value);
        alert ("Texto Copiado")
    }






    function encriptar(stringencriptada) {
        let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringencriptada = stringencriptada.toLowerCase();
        for (let i=0;i < matrizcodigo.length; i++){
            if (stringencriptada.includes(matrizcodigo[i][0])) {
                stringencriptada=stringencriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1]);
            }

        }
        return stringencriptada;
        
    }

    function desencriptar(stringencriptada) {
        let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        stringencriptada = stringencriptada.toLowerCase();
        for (let i=0;i < matrizcodigo.length; i++){
            if (stringencriptada.includes(matrizcodigo[i][1])) {
                stringencriptada=stringencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0]);
            }

        }
        return stringencriptada;
        
    }