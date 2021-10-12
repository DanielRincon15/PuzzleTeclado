const letras = document.getElementById("letras");
const numeros = document.getElementById("numeros");

const boton1 = document.getElementById("uno");
const boton2 = document.getElementById("dos");
const boton3 = document.getElementById("tres");
const boton4 = document.getElementById("cuatro");
const boton5 = document.getElementById("cinco");
const boton6 = document.getElementById("seis");
const boton7 = document.getElementById("siete");
const boton8 = document.getElementById("ocho");
const boton9 = document.getElementById("nueve");
const boton10 = document.getElementById("diez");
const boton11 = document.getElementById("once");
const boton12 = document.getElementById("doce");

const btn1 = () => {
    if (letras.innerHTML == "") {
        letras.innerHTML = "A";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ") {
            numeros.innerHTML = "1";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn2 = () =>{
    if (letras.innerHTML == "A") {
        letras.innerHTML = letras.innerHTML + "B";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "1") {
            numeros.innerHTML = numeros.innerHTML + "2";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn3 = () =>{
    if (letras.innerHTML == "AB") {
        letras.innerHTML = letras.innerHTML + "C";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "12") {
            numeros.innerHTML = numeros.innerHTML + "3";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn4 = () =>{
    if (letras.innerHTML == "ABC") {
        letras.innerHTML = letras.innerHTML + "D";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "123") {
            numeros.innerHTML = numeros.innerHTML + "4";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn5 = () =>{
    if (letras.innerHTML == "ABCD") {
        letras.innerHTML = letras.innerHTML + "E";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "1234") {
            numeros.innerHTML = numeros.innerHTML + "5";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn6 = () =>{
    if (letras.innerHTML == "ABCDE") {
        letras.innerHTML = letras.innerHTML + "F";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "12345") {
            numeros.innerHTML = numeros.innerHTML + "6";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn7 = () =>{
    if (letras.innerHTML == "ABCDEF") {
        letras.innerHTML = letras.innerHTML + "G";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "123456") {
            numeros.innerHTML = numeros.innerHTML + "7";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn8 = () =>{
    if (letras.innerHTML == "ABCDEFG") {
        letras.innerHTML = letras.innerHTML + "H";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "1234567") {
            numeros.innerHTML = numeros.innerHTML + "8";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn9 = () =>{
    if (letras.innerHTML == "ABCDEFGH") {
        letras.innerHTML = letras.innerHTML + "I";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "12345678") {
            numeros.innerHTML = numeros.innerHTML + "9";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

const btn11 = () =>{
    if (letras.innerHTML == "ABCDEFGHI") {
        letras.innerHTML = letras.innerHTML + "J";
    } else {
        if (letras.innerHTML == "ABCDEFGHIJ" , numeros.innerHTML == "123456789") {
            numeros.innerHTML = numeros.innerHTML + "0";
        } else {
            alert ("Faltan Letras o números") 
        }
    }
};

boton1.onclick = function () {
    btn1 ();
};

boton2.onclick = function () {
    btn2 ();
};

boton3.onclick = function () {
    btn3 ();
};

boton4.onclick = function () {
    btn4 ();
};

boton5.onclick = function () {
    btn5 ();
};

boton6.onclick = function () {
    btn6 ();
};

boton7.onclick = function () {
    btn7 ();
};

boton8.onclick = function () {
    btn8 ();
};

boton9.onclick = function () {
    btn9 ();
};

boton10.onclick = function () {
    btn10 ();
};

boton11.onclick = function () {
    btn11 ();
};

boton12.onclick = function () {
    btn12 ();
};