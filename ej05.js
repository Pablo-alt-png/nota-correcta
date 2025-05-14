// if y else
function calcula(){
    
    let n = document.getElementById("nota").value;
    
    if (n > 10) {
        document.getElementById("texto").innerHTML = "DEMASIADO";
    }

    else if (n >= 0) {
        document.getElementById("texto").innerHTML = "CORRECTO"
    }

    else {
        document.getElementById("texto").innerHTML = "MUY POCO"
    }
}