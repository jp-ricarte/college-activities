var media = prompt("1.média aritmetica 2.média ponderada 3.sair");

var n = prompt("número de notas");

var somaAritmetica = aritmetica;
var somaAritmetica = 0;

var somaPeso = peso;
var somaPeso = 0;

if(media == 1){

    for(i = 1; i <= n; i++){
        var aritmetica = parseInt(prompt("nota " + i));
        somaAritmetica += aritmetica;
    }
    document.write("media aritmética: " + somaAritmetica / n);
}

if(media == 2){   
    
    for(i = 1; i <= n; i++){
        var aritmetica = parseInt(prompt("nota " + i));
        if(aritmetica >= 0){
            var peso = parseInt(prompt("peso"));
        }
        somaPeso += peso;
        somaAritmetica = peso * aritmetica + somaAritmetica;
       
    }
    document.write("media ponderada: " + somaAritmetica / somaPeso );
}



