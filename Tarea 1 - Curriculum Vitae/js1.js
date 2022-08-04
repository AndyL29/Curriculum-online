function calc_creditos(){
    var creditos=parseInt(document.getElementById("input_credito").value);
    var creditoItla = 520
    if(isNaN(creditos) == true)
        alert("Debe digitar numero, el campo de texto no debe quedar vacio...")
    else if(creditos > 25 || creditos <=0){
        alert("El numero de creditos debe estar entre 1 y 25")
        }
    else{
        var result = creditos * creditoItla;
        alert("El monto que debe pagar es: $"+ result + " pesos.")
    }    
}
