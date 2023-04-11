//while
 /*
let cont = 0
while(cont < 10) {
    document.write("O valor é: " + cont);
    document.write("<br>")
    cont++

}

//do while

let cont1 = 0 
do{
    document.write("<br><br>")
    document.write("O valor while é: " + cont1);
    document.write("<br>")
    cont1++
}while(cont1 == 0)
*/


function mudar(){
    let novo = document.getElementById("idNome")
    document.getElementById("título").innerHTML = novo.value;
}