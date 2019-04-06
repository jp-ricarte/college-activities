var media = prompt("1.média aritmetica 2.média ponderada 3.sair");

var somaAritmetica = aritmetica;
var somaAritmetica = 0;

var somaPeso = peso;
var somaPeso = 0;

if(media == 1){
    for(i = 1; i<= 2; i++){
        var aritmetica = parseInt(prompt("nota"));
        somaAritmetica += aritmetica;
    }
    document.write("media aritmética: " + somaAritmetica / 2);
}

if(media == 2){
    for(i = 1; i<= 3; i++){
        var aritmetica = parseInt(prompt("nota"));
        if(aritmetica >= 0){
            var peso = parseInt(prompt("peso"));
        }
        somaPeso += peso;
        somaAritmetica = peso * aritmetica + somaAritmetica;
       
    }
    document.write("media ponderada: " + somaAritmetica / somaPeso );
}



